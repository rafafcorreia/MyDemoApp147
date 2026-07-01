#language: pt
Funcionalidade: Comprar Produto
    Esquema do Cenario: Comprar Produto com Sucesso
        Dado que abro o MyDemoApp
        Quando seleciono o produto na "<posicao>"
        Entao exibe a pagina de detalhe com o "<nome_produto>"
        E o "<preco_produto>"

    Exemplos:
    | posicao | nome_produto              | preco_produto |
    | 0       | Sauce Labs Backpack       | $ 29.99        |
    | 3       | Sauce Labs Backpack (red) | $ 29.99        |