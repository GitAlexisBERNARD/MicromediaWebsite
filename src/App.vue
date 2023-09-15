<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue';
import { Suspense } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'
import HeaderPageAnim from '@/components/HeaderPageAnim.vue'
const animationHeader = ref(false);
const route = useRoute();

watch(() => {
    if (route.path === '/web3/animation') {
        animationHeader.value = true;
    } else {
        animationHeader.value = false;
    }
});
</script>

<template>
    <div>
        <HeaderPageAnim v-if="animationHeader" />
        <HeaderPage v-else />
        <main class="pt-[84px]">
            <Suspense>
                <RouterView />
            </Suspense>
        </main>
    </div>
</template>
