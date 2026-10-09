# Verzel Store — Automação de Testes

Projeto de automação de testes end-to-end (E2E) para os fluxos de cupons de desconto, cálculo de frete e finalização de compra da Verzel Store. Desenvolvido com Playwright Test e TypeScript, executando os cenários no navegador Chromium.

> **Escopo:** este repositório automatiza uma seleção dos casos de teste documentados. A especificação completa também contempla cenários manuais que ainda não foram implementados como testes automatizados.

## Sumário

* [Objetivos](#objetivos)
* [Tecnologias e pré-requisitos](#tecnologias-e-pré-requisitos)
* [Instalação](#instalação)
* [Executar os testes](#executar-os-testes)
* [Relatórios e evidências](#relatórios-e-evidências)
* [Cobertura automatizada](#cobertura-automatizada)
* [Regras de negócio verificadas](#regras-de-negócio-verificadas)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Organização dos testes](#organização-dos-testes)
* [Ambiente e configuração](#ambiente-e-configuração)
* [Documentação relacionada](#documentação-relacionada)

## Objetivos

* Validar os valores apresentados no resumo do carrinho.
* Verificar o comportamento de cupons válidos, inválidos e expirados.
* Conferir as condições de cobrança de frete e concessão de frete grátis.
* Exercitar a jornada de compra até a confirmação do pedido.
* Registrar capturas de tela como evidências dos cenários automatizados.

## Tecnologias e pré-requisitos

* Node.js 20 ou superior.
* npm.
* Playwright Test (`@playwright/test`).
* TypeScript.
* Navegador Chromium gerenciado pelo Playwright.
* Acesso ao ambiente de QA: [Verzel Store](https://verzel-store.qa-test-verzel-store.workers.dev/).

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/andrade30/verzel-store-playwright.git
cd verzel-store-playwright
```

Instale as dependências:

```bash
npm ci
```

Instale o Chromium utilizado pelos testes:

```bash
npx playwright install chromium
```

## Executar os testes

Para executar toda a suíte:

```bash
npx playwright test
```

Outras opções úteis:

```bash
# Executar os testes com o navegador visível
npx playwright test --headed

# Executar um caso pelo identificador presente no título
npx playwright test -g "CT-024"

# Abrir a interface interativa do Playwright
npx playwright test --ui

# Listar os testes encontrados sem executá-los
npx playwright test --list
```

A configuração do projeto utiliza o Chromium. A execução local é paralela, enquanto o ambiente de CI utiliza um worker e duas tentativas para testes que falham.

## Relatórios e evidências

Após a execução, abra o relatório HTML com:

```bash
npx playwright show-report
```

O relatório apresenta os resultados dos testes, detalhes das falhas e os anexos disponíveis.

O diretório `test-results/` armazena artefatos gerados durante as execuções, conforme a configuração do Playwright.

Os cenários automatizados também geram capturas de tela de página inteira na pasta `evidencias/`, identificadas pelo ID do caso, como `CT-024.png`. Essas imagens podem ser atualizadas a cada execução.

## Cobertura automatizada

Atualmente, a suíte contempla os seguintes casos:

| Caso   | Cenário                                  | Principais validações                                                                                   |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| CT-002 | Cupom válido sem desconto sobre o frete  | Cupom `BEMVINDO10`, subtotal de R$ 100,00, desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90 |
| CT-007 | Cupom inexistente                        | Mensagem de cupom inválido e desconto de R$ 0,00                                                        |
| CT-008 | Cupom expirado                           | Mensagem de cupom expirado e desconto de R$ 0,00                                                        |
| CT-014 | Compra abaixo do limite de frete grátis  | Frete de R$ 19,90 e mensagem indicando quanto falta para atingir o limite                               |
| CT-024 | Compra completa com cupom e frete grátis | Aplicação do cupom, cálculo do carrinho, preenchimento dos dados de entrega e confirmação do pedido     |

Os demais cenários estão descritos em [`docs/casos-de-teste.md`](./docs/casos-de-teste.md), mas ainda não fazem parte da suíte automatizada atual.

## Regras de negócio verificadas

Os cenários documentados e automatizados contemplam as seguintes regras:

* O cupom `BEMVINDO10` concede 10% de desconto sobre o subtotal dos produtos.
* O desconto do cupom não incide sobre o valor do frete.
* Cupons inexistentes ou expirados não concedem desconto e devem apresentar a mensagem correspondente.
* Compras abaixo de R$ 200,00 têm frete de R$ 19,90.
* Compras a partir de R$ 200,00 em produtos recebem frete grátis nos cenários considerados.
* O fluxo de compra verifica os dados de entrega e a apresentação da confirmação do pedido.

Esses valores e condições representam as regras consideradas nos casos de teste. Os resultados dependem da disponibilidade do ambiente de QA e da manutenção dos dados utilizados pelos cenários.

## Estrutura do projeto

```text
verzel-store-playwright/
├── docs/
│   ├── casos-de-teste.md
│   └── evidencias_execucao_verzel_store.docx
├── evidencias/
│   ├── CT-002.png
│   ├── CT-007.png
│   ├── CT-008.png
│   ├── CT-014.png
│   └── CT-024.png
├── tests/
│   ├── pages/
│   │   └── LojaPage.ts
│   └── cupom-frete.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

A estrutura acima é ilustrativa e deve refletir os arquivos existentes no repositório.

* `tests/cupom-frete.spec.ts`: contém os cenários automatizados e suas verificações.
* `tests/pages/LojaPage.ts`: concentra interações e verificações reutilizáveis da loja, seguindo o padrão Page Object.
* `playwright.config.ts`: define o diretório de testes, a URL base, o navegador e as opções de execução.
* `docs/casos-de-teste.md`: reúne a especificação dos casos, inclusive os que ainda são manuais.
* `docs/evidencias_execucao_verzel_store.docx`: documento complementar, caso esse seja o nome real do arquivo armazenado.
* `evidencias/`: contém capturas de tela associadas aos casos automatizados.

Os diretórios `playwright-report/` e `test-results/` armazenam artefatos de execução e, normalmente, devem permanecer fora do versionamento.

## Organização dos testes

Os testes utilizam o Playwright Test (`@playwright/test`) com TypeScript. A classe `LojaPage` concentra ações comuns, como adicionar produtos ao carrinho, aplicar cupons e consultar o resumo do pedido.

Cada cenário utiliza o identificador CT definido na documentação, facilitando a rastreabilidade entre o caso especificado, o teste automatizado, o relatório e a evidência correspondente.

Para adicionar um novo cenário:

1. Consulte ou registre o caso em [`docs/casos-de-teste.md`](./docs/casos-de-teste.md).
2. Implemente o fluxo em `tests/cupom-frete.spec.ts`, mantendo o ID CT no título.
3. Reutilize as ações e verificações de `LojaPage` quando apropriado.
4. Execute o teste individual e, em seguida, a suíte.
5. Confira o resultado e as evidências geradas.

## Ambiente e configuração

A URL base configurada para os testes é:

`https://verzel-store.qa-test-verzel-store.workers.dev/`

O projeto utiliza um ambiente de QA remoto, sem aplicação local ou servidor de desenvolvimento configurado neste repositório.

Caso o endereço do ambiente seja alterado, atualize a propriedade `baseURL` em `playwright.config.ts`.

A disponibilidade da loja e a consistência dos dados de teste são necessárias para a execução dos cenários.

## Documentação relacionada

* [Especificação dos casos de teste](./docs/casos-de-teste.md)
* [Configuração do Playwright](./playwright.config.ts)
* [Suíte automatizada](./tests/cupom-frete.spec.ts)

---

**Desenvolvido por Alessandro Santos Andrade**