<script setup lang="ts">
import Fleche from '@/components/icons/Fleche.vue'
defineProps<{
    title: String
    imgPath: String
    imgAlt: String
    subTitle: String
}>()
</script>
<template>
    <div class=" w-full mx-auto p-4">
      <div class="bg-[#E6E6E6] border overflow-hidden flex">
        <div class="w-1/3 h-40" style="background-image: url(public/img/cat_water_hero.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: top;">
          <!-- <img :src="imgPath" :alt="imgAlt" class="w-full max-w-2xl max-h-96 h-auto object-cover" /> -->
        </div>
        <div class="p-4 w-1/2 ml-[24px] my-auto mr-auto">
          <h1 class="text-3xl font-semibold mb-[16px]">{{ title }}</h1>
          <hr class="hr"/>
          <h2 class="text-base mt-[16px] font-sans">{{ subTitle }}</h2>
          <button class="flex items-center mt-4">
            Go to details
            <Fleche class="ml-2"/>
          </button>
        </div>
      </div>
    </div>

</template>

<style>
.hr{
    width:80%;
    text-align:center;
    margin-left:0;
    color: #000;
    border-color: #000;
    border-width: 1px;
}
</style>