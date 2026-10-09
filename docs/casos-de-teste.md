# Casos de Teste — Cupom de Desconto e Frete Grátis (Verzel Store)

## Informações da Execução

| Campo               | Valor                                                                 |
|---------------------|-----------------------------------------------------------------------|
| Loja                | https://verzel-store.qa-test-verzel-store.workers.dev/                |
| Documentação        | https://verzel-store.qa-test-verzel-store.workers.dev/documentacao    |
| Responsável         | Alessandro Santos Andrade                                             |
| Data da execução    | 08/10/2026                                                            |
| Navegador / versão  | Chrome 154.0.8037.98                                                  |
| Sistema operacional | Windows 11                                                            |
| Tipo de execução    | Manual e exploratória                                                 |

---

## Como Usar Este Documento

- Em cada caso, marque o status: **Passou**, **Falhou** ou **Bloqueado**.
- Descreva o resultado obtido e registre a evidência (print). Se houver mais de um print, registre todos no mesmo campo.
- Em caso de falha, informe o ID do bug e consolide-o na seção **Bugs Encontrados**.
- Comportamentos descritos em "Sobre este ambiente" (carrinho por aba, pedidos fictícios, sem controle de estoque) **não** devem ser reportados como bug.

---

## Resumo da Execução

| Total | Passou | Falhou | Bloqueado | Não executado |
|-------|--------|--------|-----------|---------------|
| 27    | 24     | 3      | 0         | 0             |

---

## Índice dos Casos

| ID       | Título |
|----------|--------|
| [CT-001](#ct-001-validar-a-aplicação-do-cupom-válido-sobre-o-subtotal) | Validar a aplicação do cupom válido sobre o subtotal |
| [CT-002](#ct-002-validar-que-o-desconto-não-incide-sobre-o-frete) | Validar que o desconto não incide sobre o frete |
| [CT-003](#ct-003-validar-a-aplicação-do-cupom-com-código-em-minúsculas) | Validar a aplicação do cupom com código em minúsculas |
| [CT-004](#ct-004-validar-a-aplicação-do-cupom-com-código-em-maiúsculas-e-minúsculas-misturadas) | Validar a aplicação do cupom com código em maiúsculas e minúsculas misturadas |
| [CT-005](#ct-005-validar-que-ao-aplicar-o-cupom-os-espaços-no-início-e-no-fim-do-código-são-ignorados) | Validar que ao aplicar o cupom os espaços no início e no fim do código são ignorados |
| [CT-006](#ct-006-validar-que-ao-aplicar-o-cupom-o-espaço-no-meio-do-código-não-é-ignorado) | Validar que ao aplicar o cupom o espaço no meio do código não é ignorado |
| [CT-007](#ct-007-validar-a-tentativa-de-aplicar-o-cupom-de-desconto-com-código-inexistente) | Validar a tentativa de aplicar o cupom de desconto com código inexistente |
| [CT-008](#ct-008-validar-a-tentativa-de-aplicar-o-cupom-de-desconto-com-código-expirado) | Validar a tentativa de aplicar o cupom de desconto com código expirado |
| [CT-009](#ct-009-validar-a-tentativa-de-aplicar-o-cupom-sem-informar-o-código) | Validar a tentativa de aplicar o cupom sem informar o código |
| [CT-010](#ct-010-validar-a-remoção-de-um-cupom-aplicado) | Validar a remoção de um cupom aplicado |
| [CT-011](#ct-011-validar-a-troca-de-cupom-removendo-o-atual) | Validar a troca de cupom removendo o atual |
| [CT-012](#ct-012-validar-que-o-desconto-é-recalculado-ao-alterar-o-carrinho) | Validar que o desconto é recalculado ao alterar o carrinho |
| [CT-013](#ct-013-validar-que-o-cupom-permanece-aplicado-após-recarregar-a-página-na-mesma-aba) | Validar que o cupom permanece aplicado após recarregar a página na mesma aba |
| [CT-014](#ct-014-validar-frete-fixo-abaixo-de-r-20000) | Validar Frete fixo abaixo de R$ 200,00 |
| [CT-015](#ct-015-validar-que-o-subtotal-exatamente-igual-a-r-20000-tem-frete-grátis) | Validar que o Subtotal exatamente igual a R$ 200,00 tem frete grátis |
| [CT-016](#ct-016-validar-subtotal-logo-abaixo-do-limite-de-frete-grátis) | Validar subtotal logo abaixo do limite de frete grátis |
| [CT-017](#ct-017-validar-subtotal-acima-do-limite-de-frete-grátis) | Validar Subtotal acima do limite de frete grátis |
| [CT-018](#ct-018-validar-que-o-frete-grátis-considera-o-subtotal-antes-do-desconto) | Validar que o Frete grátis considera o subtotal antes do desconto |
| [CT-019](#ct-019-validar-que-o-subtotal-abaixo-do-limite-com-cupom-mantém-o-frete) | Validar que o subtotal abaixo do limite com cupom mantém o frete |
| [CT-020](#ct-020-validar-que-o-frete-passa-a-ser-grátis-ao-atingir-o-limite) | Validar que o Frete passa a ser grátis ao atingir o limite |
| [CT-021](#ct-021-validar-o-não-arredondamento-com-valores-decimais) | Validar o não arredondamento com valores decimais |
| [CT-022](#ct-022-validar-a-quantidade-máxima-permitida-por-produto-5-unidades) | Validar a quantidade máxima permitida por produto (5 unidades) |
| [CT-023](#ct-023-validar-que-o-limite-é-aplicado-por-produto-e-não-pelo-carrinho) | Validar que o limite é aplicado por produto e não pelo carrinho |
| [CT-024](#ct-024-validar-o-fluxo-de-compra-completo-com-cupom-e-frete-grátis) | Validar Fluxo de compra completo com cupom e frete grátis |
| [CT-025](#ct-025-validar-que-o-cupom-inválido-não-bloqueia-a-compra) | Validar que o cupom inválido não bloqueia a compra |
| [CT-026](#ct-026-validar-o-carrinho-de-compras-isolado-por-aba) | Validar o Carrinho de compras isolado por aba |
| [CT-027](#ct-027-validar-a-atualização-da-mensagem-de-quanto-falta-para-o-frete-grátis) | Validar a atualização da mensagem de quanto falta para o frete grátis |

---

## Casos Executados

---

### CT-001: Validar a aplicação do cupom válido sobre o subtotal

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA01 |
| **Severidade**| Crítica |
| **Dados**     | Produtos: P002 x1 + P004 x2 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho os produtos Calça Jeans Slim (1 UN.) e Boné Aba Curva (2 UN.)
When o cliente aplica o cupom "BEMVINDO10"
Then o carrinho informa "Cupom BEMVINDO10 aplicado."
And exibe Subtotal R$ 239,70, Desconto (BEMVINDO10) R$ 23,97, Frete Grátis e Total R$ 215,73
And valida a confirmação do registro do pedido
```

**Resultado esperado**

- O carrinho informa "Cupom BEMVINDO10 aplicado."
- O carrinho exibe Subtotal R$ 239,70, Desconto (BEMVINDO10) R$ 23,97, Frete R$ 0,00 e Total R$ 215,73

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-002: Validar que o desconto não incide sobre o frete

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA01, CA09 |
| **Severidade**| Alta |
| **Dados**     | Produto: P005 x1 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "BEMVINDO10"
Then o carrinho informa "Cupom BEMVINDO10 aplicado."
And exibe subtotal R$ 100,00, desconto R$ 10,00, frete R$ 19,90 e total R$ 109,90
And valida a confirmação do registro do pedido
```

**Resultado esperado**

- O carrinho informa "Cupom BEMVINDO10 aplicado."
- O carrinho exibe Subtotal R$ 100,00, Desconto R$ 10,00, Frete R$ 19,90 e Total R$ 109,90
- O desconto não incide sobre o frete

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-003: Validar a aplicação do cupom com código em minúsculas

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA02 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: `bemvindo10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "bemvindo10"
Then o cupom é aplicado com desconto de R$ 10,00
And valida a confirmação do registro do pedido
```

**Resultado esperado**

- O cupom é aceito
- O desconto aplicado é de R$ 10,00
- O pedido é concluído com sucesso

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-004: Validar a aplicação do cupom com código em maiúsculas e minúsculas misturadas

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA02 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: `BemVindo10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "BemVindo10"
Then o cupom é aplicado com desconto de R$ 10,00
And valida a confirmação do registro do pedido
```

**Resultado esperado**

- O cupom é aceito
- O desconto aplicado é de R$ 10,00

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-005: Validar que ao aplicar o cupom os espaços no início e no fim do código são ignorados

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA02 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: `"   BEMVINDO10   "` (com espaços) |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "   BEMVINDO10   "
Then o cupom é aplicado com desconto de R$ 10,00
And valida a conclusão da compra do pedido
```

**Resultado esperado**

- O cupom é aceito, mesmo com espaços no início e no fim do código
- O desconto aplicado é de R$ 10,00

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-006: Validar que ao aplicar o cupom o espaço no meio do código não é ignorado

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Negativo |
| **CA**        | CA02 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: `BEM VINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "BEM VINDO10"
Then a mensagem "Cupom inválido." é exibida
And nenhum desconto é aplicado
```

**Resultado esperado**

- É exibida a mensagem "Cupom inválido."
- Nenhum desconto é aplicado

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-007: Validar a tentativa de aplicar o cupom de desconto com código inexistente

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Negativo |
| **CA**        | CA03 |
| **Severidade**| Alta |
| **Dados**     | Produto: P005 x1 \| Cupom: `PROMO50` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "PROMO50"
Then a mensagem "Cupom inválido." é exibida
And o desconto permanece R$ 0,00 e o total é R$ 119,90
```

**Resultado esperado**

- É exibida a mensagem "Cupom inválido."
- O desconto permanece R$ 0,00
- O Total é R$ 119,90

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-008: Validar a tentativa de aplicar o cupom de desconto com código expirado

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Negativo |
| **CA**        | CA04 |
| **Severidade**| Alta |
| **Dados**     | Produto: P005 x1 \| Cupom: `VERAO2026` (expirado em 31/03/2026) |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente aplica o cupom "VERAO2026"
Then a mensagem "Cupom expirado." é exibida
And o desconto permanece R$ 0,00 e o total é R$ 119,90
```

**Resultado esperado**

- É exibida a mensagem "Cupom expirado."
- O desconto permanece R$ 0,00
- O Total é R$ 119,90

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-009: Validar a tentativa de aplicar o cupom sem informar o código

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Negativo |
| **CA**        | CA03 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: (vazio) e somente espaços |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona no carrinho o produto Mochila Urbana 20L (1 UN.)
When o cliente tenta aplicar um cupom sem informar o código
Then a mensagem "Informe um cupom" é exibida
And nenhum desconto é aplicado
```

**Resultado esperado**

- É exibida a mensagem "Informe um cupom"
- Nenhum desconto é aplicado

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-010: Validar a remoção de um cupom aplicado

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA05 |
| **Severidade**| Média |
| **Dados**     | Produto: P005 x1 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cupom "BEMVINDO10" está aplicado ao carrinho com o produto Mochila Urbana 20L (1 UN.)
When o cliente remove o cupom aplicado
Then o desconto volta a R$ 0,00
And o total passa de R$ 109,90 para R$ 119,90
```

**Resultado esperado**

- O desconto volta a R$ 0,00
- O Total passa de R$ 109,90 para R$ 119,90

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-011: Validar a troca de cupom removendo o atual

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA05 |
| **Severidade**| Média |
| **Dados**     | Cupons: `BEMVINDO10` (remover) e `VERAO2026` (aplicar) |

**Passos (Gherkin)**

```gherkin
Given que o cupom "BEMVINDO10" está aplicado ao carrinho
When o cliente remove o cupom e aplica "VERAO2026"
Then a mensagem "Cupom expirado." é exibida
And nenhum desconto é aplicado
```

**Resultado esperado**

- É exibida a mensagem "Cupom expirado."
- Nenhum desconto é aplicado

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-012: Validar que o desconto é recalculado ao alterar o carrinho

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA01 |
| **Severidade**| Alta |
| **Dados**     | Produto: P005 x1 → x3 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o carrinho contém o produto Mochila Urbana 20L (1 UN.) com o cupom "BEMVINDO10" aplicado
When o cliente altera a quantidade do produto Mochila Urbana 20L para 3 unidades
Then é exibido o Subtotal R$ 300,00, Desconto R$ 30,00, Frete Grátis e Total R$ 270,00
And valida a confirmação do registro do pedido
```

**Resultado esperado**

- O carrinho exibe Subtotal R$ 300,00, Desconto R$ 30,00, Frete Grátis e Total R$ 270,00
- O pedido é concluído com sucesso

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-013: Validar que o cupom permanece aplicado após recarregar a página na mesma aba

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA01 |
| **Severidade**| Média |
| **Dados**     | Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cupom "BEMVINDO10" está aplicado ao produto no carrinho
When o cliente recarrega a página
Then o cupom e o carrinho devem ser mantidos
```

**Resultado esperado**

- O carrinho e o cupom são mantidos

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-014: Validar Frete fixo abaixo de R$ 200,00

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA07 |
| **Severidade**| Alta |
| **Dados**     | Produto: P001 x1 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Camiseta Essencial (1 un.) no carrinho
When o cliente acessar o carrinho de compras
And não aplicar o cupom de desconto
Then é exibido o subtotal R$ 59,90, frete R$ 19,90 e total R$ 79,80
And informa que faltam R$ 140,10 para o frete grátis
```

**Resultado esperado**

- O carrinho exibe Subtotal R$ 59,90, Frete R$ 19,90 e Total R$ 79,80
- O carrinho informa que faltam R$ 140,10 para o frete grátis

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-015: Validar que o Subtotal exatamente igual a R$ 200,00 tem frete grátis

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA06 |
| **Severidade**| Crítica |
| **Dados**     | Produto: P005 x2 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Mochila Urbana 20L (2 un.) no carrinho
When o cliente acessar o carrinho de compras
And não aplicar o cupom de desconto
Then o subtotal é R$ 200,00 e o frete é R$ 0,00
And o total é R$ 200,00
And o carrinho indica frete grátis sem valor faltante
```

**Resultado esperado**

- O Subtotal é R$ 200,00 e o Frete é R$ 0,00
- O Total é R$ 200,00
- O carrinho indica frete grátis, sem valor faltante

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ **Bloqueado**

**Bug relacionado:** ID do bug: **BUG-001**

> **BUG-001 — Frete de R$ 19,90 cobrado quando o subtotal é exatamente R$ 200,00**
>
> **Descrição:** Quando o subtotal do carrinho é exatamente R$ 200,00, a loja cobra o frete fixo de R$ 19,90, embora a regra diga que o frete é grátis a partir de R$ 200,00, inclusive (CA06). O carrinho também exibe a mensagem "Faltam R$ 0,00 para o frete grátis.", que indica que o limite foi atingido e contradiz a cobrança do frete.
>
> **Resultado obtido:**
> - Subtotal R$ 200,00
> - Desconto R$ 0,00
> - Frete R$ 19,90 _(incorreto)_
> - Total R$ 219,90 _(incorreto)_
> - Mensagem: "Faltam R$ 0,00 para o frete grátis."
>
> **Impacto:** O cliente que chega a exatamente R$ 200,00 paga R$ 19,90 a mais (~10% sobre o valor correto). A interface exibe valores contraditórios, prejudicando a confiança do cliente.

---

### CT-016: Validar subtotal logo abaixo do limite de frete grátis

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Negativo |
| **CA**        | CA07 |
| **Severidade**| Crítica |
| **Dados**     | Produtos: P001 x1 + P002 x1 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona os produtos Camiseta Essencial (1 un.) e Calça Jeans Slim (1 un.) no carrinho
When o cliente acessar o carrinho de compras
And não aplicar o cupom de desconto
Then o subtotal é R$ 199,80 e o frete é R$ 19,90
And informa que faltam R$ 0,20 para o frete grátis
And o total é R$ 219,70
```

**Resultado esperado**

- O Subtotal é R$ 199,80 e o Frete é R$ 19,90
- O carrinho informa que faltam R$ 0,20 para o frete grátis
- O Total é R$ 219,70

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-017: Validar Subtotal acima do limite de frete grátis

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA06 |
| **Severidade**| Alta |
| **Dados**     | Produto: P007 x1 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Jaqueta Corta-Vento (1 un.) no carrinho
When o cliente acessar o carrinho de compras
And não aplicar o cupom de desconto
Then o frete é Grátis e o total é R$ 229,90
```

**Resultado esperado**

- O Frete é Grátis
- O Total é R$ 229,90

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-018: Validar que o Frete grátis considera o subtotal antes do desconto

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA08 |
| **Severidade**| Crítica |
| **Dados**     | Produto: P005 x2 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Mochila Urbana 20L (2 un.) no carrinho
When o cliente aplica o cupom "BEMVINDO10"
Then exibe o subtotal R$ 200,00, desconto R$ 20,00 e frete R$ 0,00
And o total é R$ 180,00
```

**Resultado esperado**

- O Subtotal é R$ 200,00, o Desconto é R$ 20,00 e o Frete é R$ 0,00
- O frete grátis considera o subtotal antes do desconto
- O Total é R$ 180,00

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ **Bloqueado**

**Bug relacionado:** ID do bug: **BUG-002**

> **BUG-002 — Frete de R$ 19,90 cobrado com cupom BEMVINDO10 quando o subtotal é exatamente R$ 200,00**
>
> **Descrição:** Ao aplicar o cupom `BEMVINDO10` a um carrinho com subtotal exatamente igual a R$ 200,00, o desconto de 10% é calculado corretamente (R$ 20,00), mas o frete fixo de R$ 19,90 é cobrado. Pelo CA06 e CA08, o frete deveria ser R$ 0,00, pois o limite considera o subtotal antes do desconto e o valor de R$ 200,00 já atinge a condição ("a partir de R$ 200,00, inclusive"). O carrinho também exibe "Faltam R$ 0,00 para o frete grátis.", contradizendo a cobrança.
>
> **Resultado obtido:**
> - Mensagem "Cupom BEMVINDO10 aplicado." exibida corretamente
> - Subtotal R$ 200,00
> - Desconto R$ 20,00
> - Frete R$ 19,90 _(incorreto)_
> - Total R$ 199,90 _(incorreto)_
> - Mensagem: "Faltam R$ 0,00 para o frete grátis."
>
> **Impacto:** O cliente que usa o cupom em uma compra de exatamente R$ 200,00 paga R$ 19,90 a mais (~11% sobre o valor correto). A interface exibe valores contraditórios, prejudicando a confiança do cliente.

---

### CT-019: Validar que o subtotal abaixo do limite com cupom mantém o frete

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA08 |
| **Severidade**| Alta |
| **Dados**     | Produto: P004 x4 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Boné Aba Curva (4 un.) no carrinho
When o cliente aplica o cupom "BEMVINDO10"
Then exibe o subtotal R$ 199,60, desconto R$ 19,96 e frete R$ 19,90
And o total é R$ 199,54
And informa que faltam R$ 0,40 para o frete grátis
```

**Resultado esperado**

- O Subtotal é R$ 199,60, o Desconto é R$ 19,96 e o Frete é R$ 19,90
- O Total é R$ 199,54
- O carrinho informa que faltam R$ 0,40 para o frete grátis

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-020: Validar que o Frete passa a ser grátis ao atingir o limite

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA06 |
| **Severidade**| Alta |
| **Dados**     | Produtos: P005 x1 + P008 x2 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o carrinho contém o produto Mochila Urbana 20L (1 un.) com frete de R$ 19,90
When o cliente adiciona o produto Garrafa Térmica 750ml (2 un.)
Then o subtotal é R$ 200,00, o frete é R$ 0,00 e o valor faltante é R$ 0,00
```

**Resultado esperado**

- O Subtotal é R$ 200,00
- O Frete é R$ 0,00
- O valor faltante para o frete grátis é R$ 0,00

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ **Bloqueado**

**Bug relacionado:** ID do bug: **BUG-003**

> **BUG-003 — Frete de R$ 19,90 continua sendo cobrado ao atingir o subtotal de R$ 200,00 após adicionar produtos ao carrinho**
>
> **Descrição:** Com a Mochila Urbana 20L (1 un.) no carrinho (subtotal R$ 100,00, frete R$ 19,90), ao adicionar 2 unidades da Garrafa Térmica 750ml, o subtotal passa a ser exatamente R$ 200,00, mas o frete de R$ 19,90 continua sendo cobrado. Pelo CA06, o frete deveria passar a R$ 0,00. O carrinho também exibe "Faltam R$ 0,00 para o frete grátis.", contradizendo a cobrança.
>
> **Resultado obtido:**
> - Subtotal R$ 200,00
> - Desconto R$ 0,00
> - Frete R$ 19,90 _(incorreto)_
> - Total R$ 219,90 _(incorreto)_
> - Mensagem: "Faltam R$ 0,00 para o frete grátis."
>
> **Impacto:** O cliente que chega a exatamente R$ 200,00 adicionando produtos paga R$ 19,90 a mais (~10% sobre o valor correto). Mesmo comportamento do BUG-001 e BUG-002.

---

### CT-021: Validar o não arredondamento com valores decimais

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA11 |
| **Severidade**| Alta |
| **Dados**     | Produto: P001 x3 \| Cupom: `BEMVINDO10` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona Camiseta Essencial (3 un.) no carrinho
When o cliente aplica o cupom "BEMVINDO10"
Then exibe o subtotal R$ 179,70, desconto R$ 17,97, frete R$ 19,90 e total R$ 181,63
And nenhum valor apresenta imprecisão de ponto flutuante (ex.: 179,70000000000002)
```

**Resultado esperado**

- O carrinho exibe Subtotal R$ 179,70, Desconto R$ 17,97, Frete R$ 19,90 e Total R$ 181,63
- Nenhum valor apresenta imprecisão de ponto flutuante (ex.: 179,70000000000002)

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-022: Validar a quantidade máxima permitida por produto (5 unidades)

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA10 |
| **Severidade**| Alta |
| **Dados**     | Produto: P006 x5 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Kit 3 Pares de Meias (5 un.) no carrinho
When o cliente acessar o carrinho de compras
Then o item é aceito, o subtotal é R$ 149,50 e o frete é R$ 19,90
And a mensagem "Limite de 5 unidades por produto." é exibida
And valida a conclusão da compra do pedido
```

**Resultado esperado**

- O item é aceito
- O Subtotal é R$ 149,50 e o Frete é R$ 19,90
- É exibida a mensagem "Limite de 5 unidades por produto."
- O pedido é concluído com sucesso

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-023: Validar que o limite é aplicado por produto e não pelo carrinho

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA10 |
| **Severidade**| Média |
| **Dados**     | Produtos: P006 x5 + P004 x5 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona os produtos Kit 3 Pares de Meias (5 un.) e Boné Aba Curva (5 un.) no carrinho
When o cliente acessar o carrinho de compras
Then ambos os itens são aceitos
And o subtotal é R$ 399,00 com frete grátis
```

**Resultado esperado**

- Ambos os itens são aceitos
- O Subtotal é R$ 399,00
- O Frete é R$ 0,00 (frete grátis)

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-024: Validar o Fluxo de compra completo com cupom e frete grátis

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Positivo |
| **CA**        | CA01, CA06 |
| **Severidade**| Crítica |
| **Dados**     | Produtos: P002 x1 + P004 x2 \| Cupom: `BEMVINDO10` \| Cliente: Maria Silva, maria@exemplo.com, CEP 01310-100 |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona os produtos Calça Jeans Slim (1 un.) e Boné Aba Curva (2 un.) no carrinho
When aplica o cupom "BEMVINDO10" e preenche dados válidos de entrega
And confirma o pedido
Then o pedido é confirmado com número "VZ-XXXXXX"
And o resumo exibe subtotal R$ 239,70, desconto R$ 23,97, frete R$ 0,00 e total R$ 215,73
And o pagamento é informado como realizado na entrega
```

**Resultado esperado**

- O pedido é confirmado com número "VZ-XXXXXX"
- O resumo exibe Subtotal R$ 239,70, Desconto R$ 23,97, Frete R$ 0,00 e Total R$ 215,73
- O pagamento é informado como realizado na entrega

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-025: Validar que o cupom inválido não bloqueia a compra

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA03 |
| **Severidade**| Média |
| **Dados**     | Produto: P001 x1 \| Cupom: `PROMO50` |

**Passos (Gherkin)**

```gherkin
Given que o cliente acessa a página da Verzel Store
And adiciona o produto Camiseta Essencial (1 un.) no carrinho
When aplica o cupom "PROMO50"
Then a mensagem "Cupom inválido." é exibida
And o cliente consegue concluir o pedido sem desconto
```

**Resultado esperado**

- É exibida a mensagem "Cupom inválido."
- O pedido é concluído sem desconto

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-026: Validar o Carrinho de compras isolado por aba

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | Ambiente |
| **Severidade**| Baixa |
| **Dados**     | Qualquer produto no carrinho da aba original |

**Passos (Gherkin)**

```gherkin
Given que o carrinho contém itens em uma aba
When o cliente acessa a Verzel Store em outra aba ou janela anônima
Then o carrinho deve iniciar vazio
```

**Resultado esperado**

- O carrinho inicia vazio

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

### CT-027: Validar a atualização da mensagem de quanto falta para o frete grátis

| Campo         | Detalhe |
|---------------|---------|
| **Tipo**      | Alternativo |
| **CA**        | CA07 |
| **Severidade**| Baixa |
| **Dados**     | Produto: P001 x1 → x2 \| Sem cupom |

**Passos (Gherkin)**

```gherkin
Given que o carrinho contém o produto Camiseta Essencial (1 un.)
When o cliente aumenta a quantidade para 2
Then o valor faltante é atualizado de R$ 140,10 para R$ 80,20
And a mensagem informa que faltam R$ 80,20 para o frete grátis
And o subtotal é R$ 119,80
```

**Resultado esperado**

- O valor faltante é atualizado de R$ 140,10 para R$ 80,20
- A mensagem informa que faltam R$ 80,20 para o frete grátis
- O Subtotal é R$ 119,80

**Resultado obtido**

> _(preencher após execução)_

**Evidência**

> _(inserir print)_

**Status:** ☐ Passou &nbsp;&nbsp; ☐ Falhou &nbsp;&nbsp; ☐ Bloqueado

**Bug relacionado:** ID do bug (se houver): ________________

---

## Bugs Encontrados

| ID       | Caso(s) | Resumo | Severidade | Evidência |
|----------|---------|--------|------------|-----------|
| BUG-001  | CT-015  | Frete de R$ 19,90 cobrado com subtotal de R$ 200,00 (Mochila x2, sem cupom). Esperado: frete R$ 0,00 e total R$ 200,00. Obtido: total R$ 219,90. | Crítica | Evidência anexada no CT-015. |
| BUG-002  | CT-018  | Frete de R$ 19,90 cobrado com subtotal de R$ 200,00 e cupom BEMVINDO10. Esperado: frete R$ 0,00 e total R$ 180,00. Obtido: total R$ 199,90. | Crítica | Evidência anexada no CT-018. |
| BUG-003  | CT-020  | Frete de R$ 19,90 mantido ao atingir R$ 200,00 adicionando produtos (Mochila x1 + Garrafa x2). Esperado: frete R$ 0,00 e total R$ 200,00. Obtido: total R$ 219,90. | Alta | Evidência anexada no CT-020. |
