<template >
    <main v-if="darkMode" class="text-black bg-white min-h-[100vh] -mt-[90px]">
        <div class="flex flex-col gap-2">
            <h1>Prototype</h1>
            <div>
                <h2>Bouton</h2>
                <div class="gap-3 px-3 flex mt-4">
                    <a href="#_"
                        class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span
                            class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                        <span
                            class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                        <span
                            class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Timer</span>
                        <span class="absolute inset-0 border-2 border-black rounded-full"></span>
                    </a>
                    <a href="#_"
                        class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span
                            class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                        <span
                            class="absolute top-0 left-0 w-[210px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                        <span
                            class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Countdown
                            Timer
                        </span>
                        <span class="absolute inset-0 border-2 border-black rounded-full"></span>
                    </a>
                    <a href="#_"
                        class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span
                            class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                        <span
                            class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                        <span
                            class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Stop
                            watch
                        </span>
                        <span class="absolute inset-0 border-2 border-black rounded-full"></span>
                    </a>
                </div>
            </div>
            <div>
                <h2>Switch Dark/Light</h2>
                <div class="flex items-center px-4 py-4 w-full mb-12">

                    <label for="toogleA" class="flex items-center cursor-pointer">
                        <div class="relative">
                            <input id="toogleA" type="checkbox" class="sr-only" v-model="darkMode"/>
                            <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                    </label>
                </div>
            </div>
            <div class="-mt-12">
                <h2>Imput Field</h2>
      <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">

          <input type="number"
                 name="number"
                 required
                 id="numberInputLight"
                 v-model="inputValue"
                 @focus="handleFocus(true)"
                 @blur="handleFocus(false)"
                 @input="handleInput"
                 class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]">

          <span :class="spanClassesLight"
                id="numberLabelLight">
              Number
          </span>
      </label>
            </div>
            <div>
                <h2></h2>
            </div>
        </div>
    </main>
    <main v-else  class="text-white bg-black min-h-[100vh] -mt-[90px]">
            <div class="flex flex-col gap-2">
                <h1>Prototype</h1>
                <div>
                    <h2>Bouton</h2>
                    <div class="gap-3 px-3 flex mt-4">
                        <a href="#_"
                            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span
                                class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span
                                class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span
                                class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Timer</span>
                            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>
                        <a href="#_"
                            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span
                                class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span
                                class="absolute top-0 left-0 w-[210px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span
                                class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Countdown
                                Timer
                            </span>
                            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>
                        <a href="#_"
                            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span
                                class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span
                                class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span
                                class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Stop
                                watch
                            </span>
                            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>Switch Dark/Light</h2>
                    <div class="flex items-center px-4 py-4 w-full mb-12">

                        <label for="toogleA" class="flex items-center cursor-pointer">
                            <div class="relative">
                                <input id="toogleA" type="checkbox" class="sr-only" v-model="darkMode"/>
                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="-mt-12">
                    <h2>Imput Field</h2>
          <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">

              <input type="number"
                 name="number"
                 required
                 id="numberInputDark"
                 v-model="inputValue"
                 @focus="handleFocus(true)"
                 @blur="handleFocus(false)"
                 @input="handleInput"
                     class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]">

              <span :class="spanClassesDark"
                id="numberLabelDark">
                  Number
              </span>
          </label>
                </div>
                <div>
                    <h2></h2>
                </div>
            </div>
    </main>
</template>

<style>input:checked~.dot {
    transform: translateX(100%);
    background-color: #deff4e;
}</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            darkMode: false,
            inputValue: '', 
            isFocused: false,
        }
    },
    computed: {
        spanClassesLight(): string {
            let classes = 'w-[200px] absolute text-xl transform left-4 transition leading-10 rounded-full';
            if (this.inputValue || this.isFocused) {
                classes += ' -translate-y-16 text-black';
            } else {
                classes += ' -translate-y-3 text-gray-400';
            }
            return classes;
        },
        spanClassesDark(): string {
            let classes = 'w-[200px] absolute text-xl transform left-4 transition leading-10 rounded-full';
            if (this.inputValue || this.isFocused) {
                classes += ' -translate-y-16 text-white';
            } else {
                classes += ' -translate-y-3 text-gray-400';
            }
            return classes;
        }
    },
    methods: {
        handleInput(): void {
            this.isFocused = this.inputValue.length > 0;
        },
        handleFocus(isFocused: boolean): void {
            this.isFocused = isFocused;
        },
    }
})
</script>