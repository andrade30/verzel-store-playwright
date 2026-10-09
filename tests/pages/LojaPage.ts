import { expect, Page } from "@playwright/test";

export const AJUSTAR = {
  // Lista de produtos: cada produto fica dentro de um destes elementos.
  cardProduto: "article, li",
  // Botão de adicionar ao carrinho dentro do card do produto.
  botaoAdicionar: /adicionar/i,
  // Botão que confirma o pedido depois de preencher os dados de entrega.
  botaoConfirmarPedido: /confirmar|finalizar pedido|concluir/i,
};

export type Resumo = {
  subtotal: string; // ex.: '239,70'
  desconto: string;
  frete: string;
  total: string;
};

export type DadosEntrega = { nome: string; email: string; cep: string };

export class LojaPage {
  constructor(private readonly page: Page) {}

  // ---------- Navegação ----------
  async abrirLoja() {
    await this.page.goto("/");
  }

  async abrirCarrinho() {
    await this.page.getByRole("link", { name: /carrinho/i }).click();
    await expect(
      this.page.getByRole("heading", { name: "Carrinho" }),
    ).toBeVisible();
  }

  // ---------- Carrinho ----------
  async adicionarProduto(nome: string, quantidade = 1) {
    await this.abrirLoja();
    const card = this.page
      .locator(AJUSTAR.cardProduto)
      .filter({ hasText: nome })
      .first();
    for (let i = 0; i < quantidade; i++) {
      await card.getByRole("button", { name: AJUSTAR.botaoAdicionar }).click();
    }
  }

  async aplicarCupom(codigo: string) {
    await this.page.getByLabel("Cupom de desconto").fill(codigo);
    await this.page.getByRole("button", { name: "Aplicar cupom" }).click();
  }

  async finalizarCompra() {
    const acao = this.page
      .getByRole("button", { name: "Finalizar compra" })
      .or(this.page.getByRole("link", { name: "Finalizar compra" }));
    await acao.click();
  }

  // ---------- Dados de entrega e pedido ----------
  async preencherDadosEntrega(dados: DadosEntrega) {
    await this.page.getByLabel(/nome/i).fill(dados.nome);
    await this.page.getByLabel(/e-?mail/i).fill(dados.email);
    await this.page.getByLabel(/cep/i).fill(dados.cep);
  }

  async confirmarPedido() {
    await this.page
      .getByRole("button", { name: AJUSTAR.botaoConfirmarPedido })
      .click();
  }

  // ---------- Verificações ----------
  private get resumo() {
    return this.page
      .getByRole("heading", { name: "Resumo do pedido" })
      .locator("..");
  }

  /** Confere uma linha do resumo sem depender da estrutura HTML (rótulo seguido do valor). */
  private async verificarLinha(rotulo: string, valor: string) {
    if (rotulo.toLowerCase() === "frete") {
      const textoResumo = (await this.resumo.innerText()).replace(/\s+/g, "");

      expect(textoResumo.toLowerCase()).toContain("fretegrátis");
      return;
    }

    await expect(this.resumo).toContainText(
      new RegExp(`${rotulo}[^]*\\$\\s*${valor}`),
    );
  }

  async verificarResumo(esperado: Resumo) {
    await this.verificarLinha("Subtotal", esperado.subtotal);
    await this.verificarLinha("Desconto", esperado.desconto);
    await this.verificarLinha("Frete", esperado.frete);
    await this.verificarLinha("Total", esperado.total);
  }

  async verificarMensagem(texto: string) {
    await expect(this.page.getByText(texto)).toBeVisible();
  }
}
