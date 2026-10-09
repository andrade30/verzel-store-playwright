import { test, expect, Page } from '@playwright/test';
import { LojaPage } from './pages/LojaPage';

/** Salva o print do teste como evidência, com o ID do caso no nome (ex.: evidencias/CT-024.png). */
async function evidencia(page: Page, id: string) {
  await page.screenshot({ path: `evidencias/${id}.png`, fullPage: true });
}

const MARIA = { nome: 'Maria Silva', email: 'maria@exemplo.com', cep: '01310-100' };

test.describe('Cupom de desconto e frete grátis', () => {
  test('CT-002: Validar que o desconto do cupom não incide sobre o frete', async ({ page }) => {
    const loja = new LojaPage(page);

    await loja.adicionarProduto('Mochila Urbana 20L', 1);
    await loja.abrirCarrinho();
    await loja.aplicarCupom('BEMVINDO10');

    await loja.verificarMensagem('Cupom BEMVINDO10 aplicado.');
    await loja.verificarResumo({ subtotal: '100,00', desconto: '10,00', frete: '19,90', total: '109,90' });
    await evidencia(page, 'CT-002');
  });

  test('CT-007: Validar a tentativa de aplicar cupom com código inexistente', async ({ page }) => {
    const loja = new LojaPage(page);
 
    await test.step('Dado que o carrinho contém Mochila Urbana 20L (1 un.)', async () => {
      await loja.adicionarProduto('Mochila Urbana 20L', 1);
      await loja.abrirCarrinho();
    });
 
    await test.step('Quando o cliente aplica o cupom "PROMO50"', async () => {
      await loja.aplicarCupom('PROMO50');
    });
 
    await test.step('Então a mensagem "Cupom inválido." é exibida', async () => {
      await loja.verificarMensagem('Cupom inválido.');
    });
 
    await test.step('E nenhum desconto é aplicado (desconto R$ 0,00 e total R$ 119,90)', async () => {
      await loja.verificarResumo({ subtotal: '100,00', desconto: '0,00', frete: '19,90', total: '119,90' });
      await evidencia(page, 'CT-007');
    });
  });

  test('CT-008: Validar a tentativa de aplicar cupom com código expirado', async ({ page }) => {
    const loja = new LojaPage(page);
 
    await test.step('Dado que o carrinho contém Mochila Urbana 20L (1 un.)', async () => {
      await loja.adicionarProduto('Mochila Urbana 20L', 1);
      await loja.abrirCarrinho();
    });
 
    await test.step('Quando o cliente aplica o cupom "VERAO2026"', async () => {
      await loja.aplicarCupom('VERAO2026');
    });
 
    await test.step('Então a mensagem "Cupom expirado." é exibida', async () => {
      await loja.verificarMensagem('Cupom expirado.');
    });
 
    await test.step('E nenhum desconto é aplicado (desconto R$ 0,00 e total R$ 119,90)', async () => {
      await loja.verificarResumo({ subtotal: '100,00', desconto: '0,00', frete: '19,90', total: '119,90' });
      await evidencia(page, 'CT-008');
    });
  });

  test('CT-014: Validar frete fixo de R$ 19,90 abaixo de R$ 200,00', async ({ page }) => {
    const loja = new LojaPage(page);

    await loja.adicionarProduto('Camiseta Essencial', 1);
    await loja.abrirCarrinho();

    await loja.verificarResumo({ subtotal: '59,90', desconto: '0,00', frete: '19,90', total: '79,80' });
    await loja.verificarMensagem('Faltam R$ 140,10 para o frete grátis.');
    await evidencia(page, 'CT-014');
  });

  test('CT-024: Validar fluxo de compra completo com cupom e frete grátis', async ({ page }) => {
    const loja = new LojaPage(page);

    await loja.adicionarProduto('Calça Jeans Slim', 1);
    await loja.adicionarProduto('Boné Aba Curva', 2);
    await loja.abrirCarrinho();
    await loja.aplicarCupom('BEMVINDO10');
    await loja.verificarMensagem('Cupom BEMVINDO10 aplicado.');
    await loja.verificarResumo({ subtotal: '239,70', desconto: '23,97', frete: '0,00', total: '215,73' });

    await loja.finalizarCompra();
    await loja.preencherDadosEntrega(MARIA);
    await loja.confirmarPedido();

    await expect(page.getByText(/VZ-\d{6}/)).toBeVisible();
    await expect(page.getByText(/pagamento.*entrega/i)).toBeVisible();
    await expect(page.getByText('215,73').first()).toBeVisible();
    await evidencia(page, 'CT-024');
  });
});
