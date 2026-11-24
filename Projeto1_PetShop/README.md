# Ajuda - PetShop Bub's

Projeto da disciplina de Fundamentos de Sistemas Web (PUCRS) - Fase 2
Autor: Brunno da Silva Viegas

## Sobre o site

O PetShop Bub's é um site acadêmico feito com HTML, CSS, Bootstrap 4.6.2 e JavaScript. Ele apresenta os produtos e serviços de um petshop e permite simular um agendamento.

Site publicado: https://brunno-viegas.github.io/PUCRS/Projeto1_PetShop/
Código-fonte: https://github.com/brunno-viegas/PUCRS/tree/main/Projeto1_PetShop

## Páginas do site

- Página inicial (index.html): mensagem de boas-vindas, descrição do petshop, carrossel de imagens e atalhos para as categorias de produtos e para os serviços.
- Produtos (produtos.html): três categorias (Alimentação, Higiene e Acessórios), com dois produtos em cada uma. Cada produto tem imagem, nome, descrição e valor.
- Serviços (servicos.html): lista de serviços (Banho, Tosa, Consulta Veterinária e Hospedagem), com descrição, valor e disponibilidade de tele-busca. A página inclui um link para o agendamento.
- Agendamento (agendamento.html): formulário para preencher os dados do cliente e do pet e simular o agendamento de Banho ou Tosa.

## Funcionalidades

1. Menu de navegação: aparece no topo e no rodapé de todas as páginas e leva para Início, Produtos, Serviços e Agendamento.
2. Atalhos por seção: na página inicial, os links levam direto para uma categoria de produtos ou para a seção correspondente de serviços.
3. Índices de Produtos e Serviços: permitem ir direto à categoria ou à seção desejada.
4. Consulta de produtos: o cliente vê foto, descrição e preço de cada item.
5. Consulta de serviços: o cliente vê o que cada serviço inclui, o preço e se o petshop faz a busca do animal em casa (tele-busca).
6. Carrossel: exibe três imagens de produtos na página inicial, com os controles Anterior e Próximo.
7. Agendamento demonstrativo: permite escolher o serviço, a forma de atendimento, a data e o horário.
8. Rodapé: traz endereço, telefone, e-mail, autoria, direitos autorais e a data e hora atuais.

## Alterações da Fase 2

- Inclusão de CSS para estilizar as páginas e uso do Bootstrap 4.6.2.
- Inclusão do carrossel de imagens na página inicial.
- Criação do formulário de cadastro do cliente e do pet.
- Separação de Banho e Tosa em dois serviços.
- Seleção entre tele-busca e entrega do pet no local.
- Agendamento de Banho ou Tosa com seleção de data e horário.
- Exibição da data e hora atuais no rodapé com JavaScript.
- Validação da data e do horário do agendamento e exibição de uma mensagem de confirmação.
- Uso de textos alternativos nas imagens, associação dos rótulos do formulário e melhoria da indicação de foco por teclado.

## Como usar

1. Acesse o link do site publicado ou abra o arquivo index.html no navegador para consultar a versão local.
2. Use o menu do topo para escolher a página.
3. Em Produtos, clique na categoria desejada no índice ou role a página.
4. Em Serviços, consulte as descrições, os valores e a disponibilidade de tele-busca.
5. Acesse Agendamento pelo menu ou clique em "Agendar serviço" na página Serviços.
6. Preencha os dados do cliente e do pet com informações fictícias. Escolha Banho ou Tosa, selecione tele-busca ou entrega do pet no local e indique uma data e um horário futuros.
7. Marque a confirmação dos dados e clique em "Agendar". O navegador verifica os campos obrigatórios e o site exibe a confirmação demonstrativa quando a data e o horário são futuros.
8. Para voltar à página inicial, clique em "Início" no menu.

## Estrutura dos arquivos

```
Projeto1_PetShop/
├── README.md
├── index.html
├── produtos.html
├── servicos.html
├── agendamento.html
├── style.css
├── script.js
└── img/
```

## Observações

- Este é um projeto acadêmico.
- O endereço, telefone e e-mail são fictícios.
- O formulário é demonstrativo. Use apenas dados fictícios. Os dados informados não são enviados nem armazenados.
