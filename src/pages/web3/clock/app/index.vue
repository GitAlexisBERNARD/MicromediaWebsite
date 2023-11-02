<template>
  <main v-if="darkMode" class="text-black bg-white min-h-[100vh] -mt-[90px]">
    <header class="z-10 flex w-full items-center justify-between px-6 py-5">
        <div class="flex items-center space-x-4 ">
            <a href="#" class="text-black flex">
                <img src="/img/NocturneTicksWhite2.png" alt="Logo" class="h-24"/>
            </a>
        </div>
<div class="flex items-center space-x-4 lg:flex-row-reverse">
    <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-black bg-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100">
        <div class="switch-container mb-4 mt-24 lg:m-0 lg:flex lg:justify-end gap-2">
            <button @click="switchMode('timer')" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group" :class="{'active-button': mode === 'timer'}">
                <!-- Contenu du bouton 'Timer' -->
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Timer</span>
                <span class="absolute inset-0 border-2 border-black rounded-full"></span>
            </button>

            <button @click="switchMode('stopwatch')" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group" :class="{'active-button': mode === 'stopwatch'}">
                <!-- Contenu du bouton 'Countdown Timer' -->
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-[210px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Countdown Timer</span>
                <span class="absolute inset-0 border-2 border-black rounded-full"></span>
            </button>

            <button @click="switchMode('clock')" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group" :class="{'active-button': mode === 'clock'}">
                <!-- Contenu du bouton 'Stop watch' -->
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Stop watch</span>
                <span class="absolute inset-0 border-2 border-black rounded-full"></span>
            </button>
        </div>
    </nav>
</div>

    </header>

    <div class="absolute bottom-0 right-0 px-3 py-3 flex flex-row gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
    <label for="toogleA" class="flex items-center cursor-pointer">
      <div class="relative">
        <input id="toogleA" type="checkbox" class="sr-only" v-model="darkMode" />
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
        ></div>
      </div>
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"/></svg>
    </div>
    <div class="timers-container flex justify-center gap-4 mt-[15vh]" v-if="mode !== 'clock'">
      <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">
        <input type="number" name="minutes" required id="minutesInput" v-model="minutes"
          @focus="handleFocus(true, 'minutes')" @blur="handleFocus(false, 'minutes')" @input="handleInput('minutes')"
          class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]" :disabled="timerRunning">
        <span :class="getSpanClasses('minutes')" id="minutesLabel">
          Minutes
        </span>
      </label>

      <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">
        <input type="number" name="seconds" required id="secondsInput" v-model="seconds"
          @focus="handleFocus(true, 'seconds')" @blur="handleFocus(false, 'seconds')" @input="handleInput('seconds')"
          class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]" :disabled="timerRunning">
        <span :class="getSpanClasses('seconds')" id="secondsLabel">
          Seconds
        </span>
      </label>
    </div>

    <div class="buttons-container mt-4 flex justify-center" v-if="mode !== 'clock'">
      <button @click="startTimer" :disabled="timerRunning || mode !== 'timer'"
        class="bg-blue-500 text-white px-12 py-2 rounded-full">Start</button>
      <button @click="stopTimer" :disabled="!timerRunning || mode !== 'timer'"
        class="bg-red-500 text-white px-12 py-2 rounded-full">Stop</button>
      <button @click="resetStopwatch" v-if="mode === 'stopwatch'"
        class="bg-yellow-500 text-white px-12 py-2 rounded-full">Réinitialiser</button>
    </div>

<div class="clock-container flex justify-center items-center" v-if="mode === 'clock'">
   <Horloge class="mt-[55vh]"/>
</div>


  </main>
  <main v-else class="text-white bg-black min-h-[100vh] -mt-[90px]">
    <header class="z-10 flex w-full items-center justify-between px-6 py-5">
        <div class="flex items-center space-x-4 ">
            <a href="#" class="text-black flex">
                <img src="/img/NocturneTicksBlack2.png" alt="Logo" class="h-24"/>
            </a>
        </div>
<div class="flex items-center space-x-4 lg:flex-row-reverse">
    <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-black bg-white transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100">
        <div class="switch-container mb-4 mt-24 lg:m-0 lg:flex lg:justify-end gap-2">
            <button @click="switchMode('timer')" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group" :class="{'active-button-dark': mode === 'timer'}">
                <!-- Contenu du bouton 'Timer' -->
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">Timer</span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
            </button>

<button @click="switchMode('stopwatch')" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group" :class="{'active-button-dark': mode === 'stopwatch'}">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-[210px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Countdown Timer</span>
    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
</button>


            <button @click="switchMode('clock')" :class="{'active-button-dark': mode === 'clock'}" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Stop watch</span>
    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
</button>

        </div>
    </nav>
</div>

    </header>

    <div class="absolute bottom-0 right-0 px-3 py-3 flex flex-row gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
    <label for="toogleA" class="flex items-center cursor-pointer">
      <div class="relative">
        <input id="toogleA" type="checkbox" class="sr-only" v-model="darkMode" />
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
        ></div>
      </div>
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"/></svg>
    </div>
    <div class="timers-container flex justify-center gap-4 mt-[15vh]" v-if="mode !== 'clock'">
      <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">
        <input type="number" name="minutes" required id="minutesInput" v-model="minutes"
          @focus="handleFocus(true, 'minutes')" @blur="handleFocus(false, 'minutes')" @input="handleInput('minutes')"
          class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]" :disabled="timerRunning">
        <span :class="getSpanClassesDark('minutes')" id="minutesLabel">
          Minutes
        </span>
      </label>

      <label class="flex flex-col-reverse relative focus group w-[200px] h-[100px] rounded-full">
        <input type="number" name="seconds" required id="secondsInput" v-model="seconds"
          @focus="handleFocus(true, 'seconds')" @blur="handleFocus(false, 'seconds')" @input="handleInput('seconds')"
          class="border-2 text-black border-black px-4 py-3 leading-9 rounded-full w-[200px]" :disabled="timerRunning">
        <span :class="getSpanClassesDark('seconds')" id="secondsLabel">
          Seconds
        </span>
      </label>
    </div>

    <div class="buttons-container mt-4 flex justify-center" v-if="mode !== 'clock'">
<button @click="mode === 'timer' ? startTimer() : startStopwatch()" :disabled="timerRunning || stopwatchRunning"
  class="bg-blue-500 text-white px-12 py-2 rounded-full">Start</button>
<button @click="mode === 'timer' ? stopTimer() : stopStopwatch()" :disabled="!timerRunning && !stopwatchRunning"
  class="bg-red-500 text-white px-12 py-2 rounded-full">Stop</button>
      <button @click="resetStopwatch" v-if="mode === 'stopwatch'"
        class="bg-yellow-500 text-white px-12 py-2 rounded-full">Réinitialiser</button>
    </div>

<div class="clock-container flex justify-center items-center" v-if="mode === 'clock'">
   <timerwhite class="mt-[55vh]"/>
</div>
  </main> 
</template> 

<style>
.active-button {
    border-color: black; 
    background-color: white; 
}

.active-button span:nth-child(3) {
    transform: translateX(8px);
    color: white;
    transform: none;
}

.active-button span:nth-child(2) {
    transform: translateX(0px);
    opacity: 1; 
}
.active-button-dark {
    border-color: white; 
    background-color: black;
}

.active-button-dark span:nth-child(3) {
    transform: translateX(8px);
    color: black;
    transform: none;
}

.active-button-dark span:nth-child(2) {
    transform: translateX(0px);
    opacity: 1; 
}

.blanc1 {
        fill: #fff;
      }

      .blanc1, .blanc2 {
        stroke-width: 0px;
      }

      .blanc2 {
        fill: #1d1d1b;
      }
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #deff4e;
}
'jsx'.timers-container {
  display: flex;
    flex-direction: column;
  gap: 20px;
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.switch-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100px;
}

.analog-clock {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  margin-top: 20px;
}

.hour-hand,
.minute-hand,
.second-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  z-index: 1;
}

.hour-hand {
  width: 6px;
  height: 50px;
  background-color: black;
}

.minute-hand {
  width: 4px;
  height: 70px;
  background-color: blue;
}

.second-hand {
  width: 2px;
  height: 90px;
  background-color: red;
}
</style>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import Horloge from "@/components/Horloge.vue";
import timerwhite from "@/components/timerwhite.vue";

export default defineComponent({
    name: "SvgClock",
    components: { Horloge,timerwhite },
    data() {
        return {
            mode: 'timer',
            minutes: '',
            seconds: '',
            timerRunning: false,
            stopwatchRunning: false,
            focusFields: {
                minutes: false,
                seconds: false
            },
            timer: null,
            stopwatch: null,
            darkMode: false
        };
    },
    setup() {
        const clockHands = ref({
            secondHand: { y: -95, degrees: 0 },
            minuteHand: { y: -70, degrees: 0 },
            hourHand: { y: -50, degrees: 0 },
        });
        
        const updateClock = () => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();
            clockHands.value.secondHand.degrees = seconds * 6;
            clockHands.value.minuteHand.degrees = minutes * 6 + seconds * 0.1;
            clockHands.value.hourHand.degrees = hours * 30 + minutes * 0.5;
        };

        const interval = setInterval(updateClock, 1000);
        onMounted(updateClock);
        onUnmounted(() => {
            clearInterval(interval);
        });

        return { clockHands };
    },
    methods: {
        switchMode(selectedMode) {
            this.mode = selectedMode;
            if (selectedMode === 'timer') {
                this.resetStopwatch();
            }
        },
        handleInput(field) {
            if (this[field] === '') return;
            this[field] = Math.max(0, parseInt(this[field]) || 0);
        },
    handleFocus(isFocused, field) {
        this.$set(this.focusFields, field, isFocused || this[field].length > 0);
    },
        getSpanClasses(field) {
            let classes =
                'w-[200px] absolute text-xl transform left-4 transition leading-10 rounded-full';
            if (this[field] || this.focusFields[field]) {
                classes += ' -translate-y-16';
            } else {
                classes += ' -translate-y-3';
            }
            return classes;
        },
getSpanClassesDark(field) {
    let classes =
        'w-[200px] absolute text-black text-xl transform left-4 transition leading-10 rounded-full';
    if (this[field] || this.focusFields[field]) {
        classes += ' -translate-y-16 text-white';
    } else {
        classes += ' -translate-y-3';
    }
    return classes;
      },
stopStopwatch() {
    this.stopwatchRunning = false;
    clearInterval(this.stopwatch);
},

        startTimer() {
            if (this.timerRunning) return;
            this.timerRunning = true;

            this.timer = setInterval(() => {
                if (this.seconds > 0) {
                    this.seconds--;
                } else if (this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                } else {
                    this.stopTimer();
                    alert('Timer terminé !');
                }
            }, 1000);
      },
        startStopwatch() {
    if (this.stopwatchRunning) return;
    this.stopwatchRunning = true;

    this.stopwatch = setInterval(() => {
        if (this.seconds < 59) {
            this.seconds++;
        } else {
            this.minutes++;
            this.seconds = 0;
        }
    }, 1000);
},
        stopTimer() {
            this.timerRunning = false;
            clearInterval(this.timer);
        },
        resetStopwatch() {
            this.stopwatchRunning = false;
            clearInterval(this.stopwatch);
            this.minutes = '';
            this.seconds = '';
        }
    },
    beforeUnmount() {
        this.stopTimer();
        this.resetStopwatch();
    }
});
</script>
