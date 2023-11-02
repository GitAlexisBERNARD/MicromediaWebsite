<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>
<template>
    <main>
        <h1 class="mb-8">Web3</h1>
        <div class="flex flex-col">
            <Hero 
                title="4 Animations projets"
                subTitle="Aniamtion projet about water cats"
                imgPath="/img/cat_water_hero.png"
                imgAlt="Image of a cat logo"
                url="/web3/animation"
            />
                 <Hero 
                    title="The user interface design projects"
                    subTitle="App of a clock with UI/UX design"
                    imgPath="/img/astralclock.png"
                    imgAlt="Image of a clock"
                    url="/web3/clock"
                />
                
        </div>
    </main>
</template>

