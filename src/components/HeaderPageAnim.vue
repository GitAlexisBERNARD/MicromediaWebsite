<template>
    <header class="z-10 flex w-full items-center justify-between px-6 py-2 lg:py-0">
        <div class="flex items-center space-x-4 ">
            <a href="#" class="text-black flex">
                <img src="../../public/img/water_cats_logo.png" alt="Logo Chat" class="w-28"/>
            </a>
        </div>

        <div class="flex items-center space-x-4 lg:flex-row-reverse">
            <button class="relative z-50 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45 bg-blacblack': activeMenu }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'bg-black opacity-0': activeMenu }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45 bg-black   ': activeMenu }"></div>
            </button>
            <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-black bg-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100 lg:pr-[500px]"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="mt-24 lg:m-0 lg:flex lg:justify-end">
                    <li class="menu-item">
                        <a href="#animation1" class="menu-link" @click="closeMenu">Cat 1</a>
                    </li>
                    <li class="menu-item">
                        <a href="#animation2" class="menu-link" @click="closeMenu">Cat 2</a>
                    </li>
                    <li class="menu-item">
                        <a href="#animation3" class="menu-link" @click="closeMenu">Cat 3</a>
                    </li>
                    <li class="menu-item">
                        <a href="#animation4" class="menu-link" @click="closeMenu">Cat 4</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Cat_logo from './icons/Cat_logo.vue'
const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}
</script>
