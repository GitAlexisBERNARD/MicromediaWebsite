<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>
<template>
    <main>
        <h1 class="mb-8">The user interface design projects</h1>
        <div class="flex flex-col">
            <Hero title="Prototype" subTitle="Prototype of a clock with UI/UX design"
                imgPath="/img/proto.png" imgAlt="Prototype Image" url="/web3/clock/proto" />
            <Hero title="App" subTitle="App of a clock with UI/UX design"
                imgPath="/img/app_timer.png" imgAlt="Image of a clock" url="/web3/clock/app" />
            <Hero title="Logo Animation" subTitle="Animation of Logo App"
                    imgPath="/img/NocturneTicksBlack_png.png" imgAlt="Image of logo clock" url="/web3/clock/logoanimation" />
            </div>
    </main>
</template>

