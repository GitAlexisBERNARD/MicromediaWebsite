    <template>
        <header class="z-10 flex w-full items-center justify-between px-6 py-2 lg:py-0">
            <div class="flex items-center space-x-4">
                <a href="#" class="text-black">
                    <Logo_AB class="w-16 h-16" />
                </a>
            </div>

            <div class="flex items-center space-x-4 lg:flex-row-reverse">
            <button
            class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
            @click="activeMenu = !activeMenu"
            >
            <div
                class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"
            ></div>
            <div
                class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                :class="{ 'bg-black opacity-0': activeMenu }"
            ></div>
            <div
                class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"
            ></div>
            </button>
                <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen text-2xl text-black bg-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100" 
                    :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                    <ul class="mt-24 lg:m-0 lg:flex lg:justify-end">
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/" @click="closeMenu">Home</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/web3" @click="closeMenu">Web3</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/web5" @click="closeMenu">Web5</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/portfolio" @click="closeMenu">Portfolio</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </template>

    <script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'
    import Logo_AB from './icons/Logo_AB.vue'
    const activeMenu = ref(false)

    function closeMenu() {
        activeMenu.value = false
    }
    </script>
