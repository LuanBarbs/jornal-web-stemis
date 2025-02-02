<script setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const footerColor = computed(() => theme.global.current.value.dark ? 'grey-darken-4': 'blue-grey-lighten-4');
</script>

<template>
    <v-footer app class="footer" :color="footerColor">
        <v-container class="d-flex align-center">
            <v-btn variant="text" class="text-caption mr-2" to="/">Jornal.com</v-btn>
            <v-btn variant="text" class="text-caption mr-2" to="/about">Sobre</v-btn>
        </v-container>
    </v-footer>
</template>

<style scoped>
    .footer {
        height: 50px;
        max-height: 60px;
        min-height: 40px;
    }
</style>