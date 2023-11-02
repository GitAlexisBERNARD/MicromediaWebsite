<template>
  <div>
    <svg xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  width="500" height="500" viewBox="-100 -100 200 200">

  <defs>
    <circle cx="0" cy="87" r="2.2" fill="white" id="minMarker"/>
	<line x1="0" y1="95" x2="0" y2="78" stroke-width="3.8" stroke="white" id="hourMarker"/>
  </defs>
  <g id="markerSet">
    <use xlink:href="#hourMarker"/>
    <use xlink:href="#minMarker" transform="rotate( 6)"/>
    <use xlink:href="#minMarker" transform="rotate(12)"/>
    <use xlink:href="#minMarker" transform="rotate(18)"/>
    <use xlink:href="#minMarker" transform="rotate(24)"/>
  </g>
  <use xlink:href="#markerSet" transform="rotate( 30)"/>
  <use xlink:href="#markerSet" transform="rotate( 60)"/>
  <use xlink:href="#markerSet" transform="rotate( 90)"/>
  <use xlink:href="#markerSet" transform="rotate(120)"/>
  <use xlink:href="#markerSet" transform="rotate(150)"/>
  <use xlink:href="#markerSet" transform="rotate(180)"/>
  <use xlink:href="#markerSet" transform="rotate(210)"/>
  <use xlink:href="#markerSet" transform="rotate(240)"/>
  <use xlink:href="#markerSet" transform="rotate(270)"/>
  <use xlink:href="#markerSet" transform="rotate(300)"/>
  <use xlink:href="#markerSet" transform="rotate(330)"/>
<line
      :x1="0"
      :y1="clockHands.secondHand.y"
      :x2="0"
      :y2="0"
      stroke-width="2"
      stroke="red"
      :transform="`rotate(${clockHands.secondHand.degrees})`"
    />
    <line
      :x1="0"
      :y1="clockHands.minuteHand.y"
      :x2="0"
      :y2="0"
      stroke-width="3"
      stroke="white"
      :transform="`rotate(${clockHands.minuteHand.degrees})`"
    />
    <line
      :x1="0"
      :y1="clockHands.hourHand.y"
      :x2="0"
      :y2="0"
      stroke-width="5"
      stroke="white"
      :transform="`rotate(${clockHands.hourHand.degrees})`"
    />
    <circle cx="0" cy="0" r="9" fill="white"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "SvgClock",
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
});
</script>

