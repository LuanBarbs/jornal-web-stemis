<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
    data() {
        return {
            searchTerm: "",
            articles: [],
            loading: true,
        };
    },
    async mounted() {
        const route = useRoute();
        this.searchTerm = route.query.q || "";

        if(this.searchTerm) {
            await this.fetchArticles();
        } else {
            this.loading = false;
        }
    },
    methods: {
        async fetchArticles() {
            this.loading = true;
            try {
                const response = await axios.get(
                    `https://newsdata.io/api/1/news?apikey=pub_6757063b059fd746c495ad78e5baae3ada258&q=${encodeURIComponent(this.searchTerm)}&country=br`,
                );
                
                this.articles = response.data.results;
            } catch (error) {
                console.error("Erro ao buscar as notícias relacionadas:", error)
            } finally {
                this.loading = false;
            }
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
    watch: {
        "$route.query.q"(newQuery) {
            this.searchTerm = newQuery || "";
            this.fetchArticles();
        }
    }
};

</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2 class="text-h4 font-weight-bold mb-4">Resultados para "{{ searchTerm }}"</h2>
            </v-col>
        </v-row>

        <v-row v-if="loading">
            <v-col cols="12" class="text-center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-col>
        </v-row>

        <v-row v-if="articles.length">
            <v-col v-for="article in articles" :key="article.url" cols="12" md="6" lg="4">
                <v-card elevation="2" max-height="400px">
                    <v-img
                        v-if="article.image_url"
                        :src="article.image_url"
                        height="180px"
                        cover
                    ></v-img>
                    <v-card-title>{{ article.title }}</v-card-title>
                    <v-card-subtitle>{{ formatDate(article.pubDate) }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            :href="article.url"
                            target="_blank"
                        >Ler Mais</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-else-if="!loading">
            <v-col cols="12" class="text-center">
                <v-alert 
                    border="start"
                    variant="outlined"
                    type="info"
                >
                    Nenhum artigo foi encontrado!
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>