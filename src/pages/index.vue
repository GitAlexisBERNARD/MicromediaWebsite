<script setup lang="ts">
    import Hero from '@/components/Hero.vue'
</script>
<template>
    <div>
        <div class="m-10">
            <h2>Hi I’m Alexis Bernard</h2>
            <h1>Vanier College <br>Student </h1>
            <h4 >at  Micropublishing and Hypermedia </h4>
        </div>
        <h4 >Work in progress :/</h4>
    </div>
    <sections class="invisible">
        <h3>Sections</h3>
        <Hero 
    		title="Web 3"
            subTitle="All of my project in Web 3"
            imgPath="./img/crd-int-01.webp"
            imgAlt="Photo de l'entrée du Conservatoire Henri Dutilleux"
    	/>
            <Hero 
        		title="Web 5"
                subTitle="All of my project in Web 5"
                imgPath="./img/crd-int-01.webp"
                imgAlt="Photo de l'entrée du Conservatoire Henri Dutilleux"
        	/>
                <Hero 
        		title="Portfolio"
                subTitle="Go to my portfolio WebSite"
                imgPath="./img/crd-int-01.webp"
                imgAlt="Photo de l'entrée du Conservatoire Henri Dutilleux"
        	/>
    </sections>
</template>