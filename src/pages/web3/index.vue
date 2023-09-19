<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>
<template>
    <main>
        <h1 class="mb-8">Web3 TEST</h1>
        <RouterLink to="/web3/animation" class="m-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">4 Animations</RouterLink>
        <div class="flex flex-col">
            <Hero 
                title="4 Animations projets"
                subTitle="Aniamtion projet about water cats"
                imgPath="../../../public/img/water_cats_hero.png"
                imgAlt="Image of a cat logo"
            />
        </div>
    </main>
</template>

