# Jornal.com - Desafio Stemis

Jornal.com é um sistema web básico que simula um site de notícias, desenvolvido como parte do desafio para a vaga de estágio na empresa **Stemis**. Este projeto foi criado com o objetivo de demonstrar habilidades no uso de frameworks modernos, como **Vue.js** e **Vuetify**, além de integrar APIs externas para a busca de artigos de notícias.

## Objetivo

O principal objetivo do projeto é fornecer aos usuários uma interface simples e intuitiva para consultar artigos de notícias usando APIs externas, com ênfase na personalização do tema e na experiência responsiva em dispositivos móveis.

## Funcionalidades

### 1. **Visualizar Artigos - Página Inicial (Home)**
    - A página principal exibe uma lista de artigos de notícias mais recentes (inicialmente em português, mas pode-se encontrar artigos em outras linguas), com títulos e descrições.
    - O usuário pode clicar no título do artigo para ser redirecionado para o link completo.

### 2. **Pesquisa de Artigos**
    - A pesquisa é realizada por meio de um campo de entrada onde o usuário pode inserir palavras-chave.
    - Ao pressionar "Enter" ou clicar no ícone de pesquisa (no mobile), o usuário é redirecionado para uma nova página de resultados com artigos relacionados ao termo de pesquisa.
    - Os artigos são puxados através da NewsAPI, que oferece artigos relevantes de fontes de notícias confiáveis.

### 3. **Tema Claro/Escuro**
    - O aplicativo oferece um modo claro e escuro, permitindo que o usuário alterne entre eles.
    - O tema pode ser alterado no topo da aplicação através de um botão de alternância.

### 4. **Descrição do Projeto - Página Sobre**
    - A página "Sobre" fornece informações sobre o propósito do projeto e tecnologias utilizadas.
    - A página inclui também uma pequena descrição sobre o desafio proposto pela Stemis.

### 5. **Hospedagem**
    - O projeto está hospedado na Vercel.

## Tecnologias Utilizadas
- **Vue.js** - Framework JavaScript para a criação da interface do usuário.
- **Vuetify** - Framework baseado em Material Design para a construção da interface.
- **Vue Router** - Para controle de navegação entre as páginas.
- **NewsAPI e GNewsAPI** - APIs externas para obtenção de artigos de notícias.
- **Vercel** - Plataforma para hospedagem do site.

## Instalação e Execução

### 1. **Clonando o Repositório**
    git clone https://github.com/LuanBarbs/jornal-web-stemis.git
    cd jornal-web

### 2. **Instalando as Dependências**
    Execute o comando para instalar as dependências necessárias: npm install

### 3. **Executando o Projeto**
    Para rodar o projeto localmente, use: npm run dev

## Considerações Finais
O projeto foi desenvolvido com o objetivo de fornecer uma experiência simples de consulta de artigos de notícias, utilizando APIs externas. Ele também demonstra como utilizar as tecnologias Vue.js e Vuetify para criar interfaces responsivas e modernas.

Finalmente, agradeço à Stemis pela oportunidade de participar deste desafio!
