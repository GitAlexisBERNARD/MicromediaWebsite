<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue';
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import HeaderPageAnim from '@/components/HeaderPageAnim.vue'

const showHeader = ref(true); // Nouvelle référence pour contrôler la visibilité de l'en-tête
const animationHeader = ref(false);
const route = useRoute();

watch(() => {
    if (route.path === '/web3/clock/app' || route.path === '/web3/clock/proto' || route.path === '/web3/clock/logoanimation') {
        showHeader.value = false; 
    } else {
        showHeader.value = true; 
    }

    
    if (route.path === '/web3/animation') {
        animationHeader.value = true;
    } else {
        animationHeader.value = false;
    }
});
</script>

<template>
    <div>
        <HeaderPageAnim v-if="animationHeader && showHeader" />
        <HeaderPage v-else-if="showHeader" />
        <main class="pt-[84px]">
            <Suspense>
                <RouterView />
            </Suspense>
        </main>
    </div>
</template>
