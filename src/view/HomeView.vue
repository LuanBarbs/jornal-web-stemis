<script>
import axios, { CancelToken } from 'axios';

export default {
    data() {
        return {
            principalArticle: {},
            articles: [],
            cancelSource: CancelToken.source(),
            page: 1,
        };
    },
    methods: {
        async fetchNews() {
            if(this.page === 1) {
                try {
                    const response = await axios.get(
                        `https://gnews.io/api/v4/top-headlines?lang=pt&country=br&max=10&apikey=5ffd1a3f0b75e713136a9299a0de6d88`,
                        { cancelToken: this.cancelSource.token }
                    );
    
                    if(response.data.articles && response.data.articles.length > 0) {
                        this.principalArticle = response.data.articles[0];
                        this.articles = response.data.articles.slice(1);
                    } else {
                        this.page++;
                        this.fetchNews();
                    }
                } catch (error) {
                    if(axios.isCancel(error)) {
                        console.log('Requisicão cancelada!');
                    } else {
                        console.error("Erro ao buscar as notícias: ", error);
                    }
                }
            } else {
                try {
                    const response = await axios.get(
                        `https://newsapi.org/v2/everything?q=Apple&from=2025-02-01&sortBy=popularity&apiKey=ec5e9a3e5fe64b728a61c14fc62f5cfa`,
                        { cancelToken: this.cancelSource.token }
                    );

                    console.log(response);

                    if(response.data.articles && response.data.articles.length > 0) {
                        this.articles.push(...response.data.articles);
                    }
                } catch (error) {
                    if(axios.isCancel(error)) {
                        console.log('Requisição cancelada!');
                    } else {
                        console.error("Erro ao buscar as notícias: ", error);
                    }
                }
            }

            // Artigos de Teste.
            // this.principalArticle = {
            //     image: "https://s2-g1.glbimg.com/TuWw8Iz18t1OpgbTdlD_I7BGioI=/0x0:877x494/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/1/I/eNJWaKQhiq2NBG4hobtw/captura-de-tela-2025-02-01-152909.png",
            //     title: 'Nem sempre agradaremos a todos',
            //     publishedAt: '2025-02-01T12:01:58Z',
            //     description: 'Parlamentar da União Brasil venceu eleição com folga após ...'
            // };

            // this.articles = [
            //     {
            //         image: "https://s2-g1.glbimg.com/TuWw8Iz18t1OpgbTdlD_I7BGioI=/0x0:877x494/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/1/I/eNJWaKQhiq2NBG4hobtw/captura-de-tela-2025-02-01-152909.png",
            //         title: 'Nem sempre agradaremos a todos',
            //         publishedAt: '2022-65-04',
            //         description: 'Parlamentar da União Brasil venceu eleição com folga após ...'
            //     },
            //     {
            //         image: "https://s2-g1.glbimg.com/TuWw8Iz18t1OpgbTdlD_I7BGioI=/0x0:877x494/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/1/I/eNJWaKQhiq2NBG4hobtw/captura-de-tela-2025-02-01-152909.png",
            //         title: 'Nem sempre agradaremos a todos',
            //         publishedAt: '2022-65-04',
            //         description: 'Parlamentar da União Brasil venceu eleição com folga após ...'
            //     },
            //     {
            //         image: "https://s2-g1.glbimg.com/TuWw8Iz18t1OpgbTdlD_I7BGioI=/0x0:877x494/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/1/I/eNJWaKQhiq2NBG4hobtw/captura-de-tela-2025-02-01-152909.png",
            //         title: 'Nem sempre agradaremos a todos',
            //         publishedAt: '2022-65-04',
            //         description: 'Parlamentar da União Brasil venceu eleição com folga após ...'
            //     },
            //     {
            //         image: "https://s2-g1.glbimg.com/TuWw8Iz18t1OpgbTdlD_I7BGioI=/0x0:877x494/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/1/I/eNJWaKQhiq2NBG4hobtw/captura-de-tela-2025-02-01-152909.png",
            //         title: 'Nem sempre agradaremos a todos',
            //         publishedAt: '2022-65-04',
            //         description: 'Parlamentar da União Brasil venceu eleição com folga após ...'
            //     },
            // ];
        },

        loadMoreArticles() {
            this.page++;
            this.fetchNews();
        },

        cancelRequest() {
            this.cancelSource.cancel('Requisição cancelada pelo usuário.');
        },

        formatDate(date) {
            if(!date) return "";
            return new Date(date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
        },
    },
    created() {
        this.fetchNews();
    },
};
</script>

<template>
    <v-container>
        <!-- Destaque Principal -->
        <v-row>
            <v-col cols="12" md="8">
                <v-card flat class="mb-4" outlined>
                    <v-img
                        :src="principalArticle.image"
                        class="align-end text-white"
                        cover
                        height="500px"
                        gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)"
                    >
                        <v-card-title class="font-weight-bold">{{ principalArticle.title }}</v-card-title>
                        <v-card-subtitle class="font-weight-bold">{{ formatDate(principalArticle.publishedAt) }}</v-card-subtitle>
                        <v-card-text class="font-weight-bold">
                            {{ principalArticle.description }}
                        </v-card-text>
                        <v-card-actions class="mb-5">
                            <v-btn
                                color="primary"
                                :href="principalArticle.url"
                                target="_blank"
                            >Ler Mais</v-btn>
                        </v-card-actions>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-row>
                    <v-col cols="12" v-for="article in articles.slice(0, 2)" :key="article.title">
                        <v-card flat class="mb-4" outlined>
                            <v-img 
                                :src="article.image"
                                class="align-end text-white"
                                cover
                                height="225px"
                                gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)"
                            >
                                <v-card-title class="font-weight-bold">{{ article.title }}</v-card-title>
                                <v-card-subtitle class="font-weight-bold">{{ formatDate(principalArticle.publishedAt) }}</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        color="primary"
                                        :href="article.url"
                                        target="_blank"
                                    >Ler Mais</v-btn>
                                </v-card-actions>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!-- Lista de notícias geral -->
        <v-row>
            <v-col cols="12" md="4" v-for="article in articles.slice(2)" :key="article.title">
                <v-card flat class="mb-4" outlined>
                    <v-img
                        v-if="article.image"
                        :src="article.image"
                        class="align-end text-white"
                        cover
                        height="225px"
                        gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)"
                    >
                        <v-card-title class="font-weight-bold">{{ article.title }}</v-card-title>
                        <v-card-subtitle class="font-weight-bold">{{ formatDate(principalArticle.publishedAt) }}</v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                :href="principalArticle.url"
                                target="_blank"
                            >Ler Mais</v-btn>
                        </v-card-actions>
                    </v-img>
                    <v-img
                        v-else-if="article.urlToImage"
                        :src="article.urlToImage"
                        class="align-end text-white"
                        cover
                        height="225px"
                        gradient="to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)"
                    >
                        <v-card-title class="font-weight-bold">{{ article.title }}</v-card-title>
                        <v-card-subtitle class="font-weight-bold">{{ formatDate(principalArticle.publishedAt) }}</v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                :href="principalArticle.url"
                                target="_blank"
                            >Ler Mais</v-btn>
                        </v-card-actions>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

        <!-- Carregar mais artigos -->
        <v-row justify="center" class="mt-4 mb-4">
            <v-btn 
                @click="loadMoreArticles"
                color="primary" 
                density="compact" 
                variant="text"
                class="font-weight-bold"
            >
                Ver mais
            </v-btn>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
}
</style>