<script>
//
</script>

<template>
    <v-container class="about-container">
        <v-card flat class="pa-5">
            <v-card-title class="text-body-1 text-sm-h6 text-md-h5 font-weight-bold text-center">
                📰 Sobre o Jornal.com
            </v-card-title>

            <v-divider class="my-3"></v-divider>

            <v-card-text class="text-body-1">
                <p>
                    o <strong>Jornal.com</strong> é um sistema web desenvolvido como parte do <strong>desafio técnico</strong> da empresa <strong>Stemis</strong>. O projeto simula um site de notícias dinâmico, utilizando APIs para buscar e exibir artigos em tempo real.
                </p>
                <p>
                    Criado com <strong>Vue.js</strong> e estilizado com <strong>Vuetify</strong>, o sistema tem como objetivo demonstrar as habilidades em consumo de APIs usando Axios, roteamento usando VueRouter, além de responsividade e experiência de usuário. 
                </p>
            </v-card-text>

            <v-card-subtitle class="text-h6 font-weight-bold mt-4">
                🚀 Principais Funcionalidades
            </v-card-subtitle>
            <v-card-text>
                <ul>
                    <li>🔍 Pesquisa de artigos por palavra-chave.</li>
                    <li>📢 Exibição dinâmica das notícias relevantes.</li>
                    <li>🎨 Interface responsiva e amigável com Vuetify.</li>
                    <li>🔄 Atualização em tempo real com base nos parâmetros de pesquisa.</li>
                </ul>
            </v-card-text>

            <v-card-subtitle class="text-h6 font-weight-bold mt-4">
                🛠️ Tecnologias Utilizadas
            </v-card-subtitle>
            <v-card-text>
                <ul>
                    <li>🖥️ <strong>Vue.js 3</strong> - Framework de interfaces.</li>
                    <li>🎨 <strong>Vuetify</strong> - Biblioteca baseada no Material Design.</li>
                    <li>🔗 <strong>Vue Router</strong> - Para gerenciamento de rotas.</li>
                    <li>⚡ <strong>Axios</strong> - Para consumo de APIs externas.</li>
                    <li>📰 <strong>NewsData e GNewsAPI</strong> - Fonte de artigos e notícias.</li>
                    <li>🌐 <strong>Vercel</strong> - Para hospedagem do site.</li>
                </ul>
            </v-card-text>

            <v-card-subtitle class="text-h6 font-weight-bold mt-4">
                📩 Contato
            </v-card-subtitle>
            <v-card-text>
                <p>Caso tenha dúvidas ou queira saber mais sobre o projeto, entre em contato pelo e-mail:
                    <strong>
                        <a href="mailto:luanhenrique112004@gmail.com" class="email-link">
                            luanhenrique112004@gmail.com
                        </a>
                    </strong>
                </p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.about-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.email-link {
color: #1976D2; /* Azul Vuetify */
text-decoration: none;
font-weight: bold;
}

.email-link:hover {
text-decoration: underline;
}
</style>