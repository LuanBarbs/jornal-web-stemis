<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { useRouter } from 'vue-router';

const isDrawerOpen = ref(false);
const isDarkTheme = ref(true);
const searchQuery = ref("");
const searchMenu = ref(false);
const router = useRouter();

// Alternar modo claro para escuro.
const theme = useTheme();
const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    theme.global.name.value = isDarkTheme.value ? "dark" : "light";
};

// Buscar os artigos ao pressionar Enter.
const goToSearch = () => {
    if(searchQuery.value.trim()) {
        router.push({ path: "/search", query: { q: searchQuery.value } });
    }
};
</script>

<template>
    <!-- Menu Lateral -->
    <v-navigation-drawer v-model="isDrawerOpen" :color="isDarkTheme ? 'grey-darken-4' : 'blue-grey-lighten-4'">
        <v-list>
            <v-list-subheader>Menu</v-list-subheader>
            <v-list-item prepend-icon="mdi-home" to="/">Página Principal</v-list-item>
            <v-list-item prepend-icon="mdi-information-outline" to="/about">Sobre</v-list-item>

        </v-list>
    </v-navigation-drawer>

    <v-app-bar flat :color="isDarkTheme ? 'grey-darken-4' : 'blue-grey-lighten-4'">
        <!-- Botão do menu lateral -->
        <div class="d-flex align-center">
            <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
            <span class="ml-2 text-h6 font-weight-bold">Menu</span>
        </div>

        <!-- Trocar modo Claro/Escuro -->
        <div class="d-flex align-center ml-2">
            <span class="icon-placeholder">
                <v-icon v-if="!isDarkTheme" class="text-yellow-darken-3">mdi-white-balance-sunny</v-icon>
            </span>
            <v-switch
                :model-value="isDarkTheme"
                hide-details
                @change="toggleTheme"
                class="mx-3"
            ></v-switch>
            <span class="icon-placeholder">
                <v-icon v-if="isDarkTheme" class="text-blue-lighten-3">mdi-moon-waxing-crescent</v-icon>
            </span>
        </div>

        <!-- Título -->
        <div class="d-flex flex-grow-1 justify-center">
            <span :class="{'text-white': isDarkTheme, 'text-grey-darken-3': !isDarkTheme}">JORNAL - STEMIS</span>
        </div>

        <!-- 🔹 Input de pesquisa-->
        <div class="d-none d-md-flex align-center" style="gap: 12px; width: 100%; max-width: 300px;">
            <v-text-field
                v-model="searchQuery"
                @keyup.enter="goToSearch"
                label="Pesquisar"
                type="input"
                hide-details
                prepend-inner-icon="mdi-magnify"
                class="ml-10 mr-10 flex-grow-1"
                :color="isDarkTheme ? 'white' : 'black'"
            ></v-text-field>
        </div>

        <v-menu
            location="bottom center"
            offset="10"
            :close-on-content-click="false"
            attach="body"
        >
            <template #activator="{ props}">
                <v-btn v-bind="props" icon class="d-md-none">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>

            <v-card min-width="250px">
                <v-text-field
                    v-model="searchQuery"
                    label="Pesquisar"
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    @keyup.enter="goToSearch"
                ></v-text-field>
                <v-btn block color="primary" @click="goToSearch" variant="text">Buscar</v-btn>
            </v-card>
        </v-menu>

        <!-- Ícone de pesquisa quando é mobile -->
        <!-- <v-menu 
            v-model="searchMenu" 
            location="bottom center"
            offset="10"
            :close-on-content-click="false"
            attach="body"
        >
            <template #activator="{ props }">
                <v-btn v-bind="props" icon class="d-md-none" @click="searchMenu = !searchMenu">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>

            <v-card class="pa-3" min-width="280px">
                <v-text-field
                    v-model="searchQuery"
                    label="Pesquisar"
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    @keyup.enter="goToSearch"
                ></v-text-field>
                <v-btn block color="primary" @click="goToSearch">Buscar</v-btn>
            </v-card>
        </v-menu> -->
    </v-app-bar>
</template>

<style scoped>
.nav-link {
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease-in-out;
    font-weight: 500;
    padding: 0 10px;
}

.nav-link:hover {
    transform: translateY(-3px);
    color: var(--v-theme-primary);
}

.icon-placeholder {
    width: 24px;
    display: inline-block;
    text-align: center;
}
</style>