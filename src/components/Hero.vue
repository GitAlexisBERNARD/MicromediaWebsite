<script setup lang="ts">
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    subTitle: String
}>()
</script>
<template>
    <div>
        <h1>{{ title }}</h1>
        <object href="#"></object>
        <h2>{{ subTitle }}</h2>
        <button>
            Go to details 
            <object href="#"></object>
        </button>
        <img :src="imgPath" :alt="imgAlt" />
    </div>
</template>