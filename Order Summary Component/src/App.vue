<script setup lang="ts">
import heroPhoto from "./assets/images/illustration-hero.svg"
import musicIcon from "./assets/images/icon-music.svg"
// import patternBGDesktop from "./assets/images/pattern-background-desktop.svg"
// import patternBGMobile from "./assets/images/pattern-background-mobile.svg"
</script>

<template>
  <div class="bg-[url('./assets/images/pattern-background-mobile.svg')] md:bg-[url('./assets/images/pattern-background-desktop.svg')] bg-cover bg-center bg-no-repeat h-screen p-4 flex justify-center items-center">
  <main class="shadow-xl max-w-[350px]">
     <img :src="heroPhoto" class="rounded-t-xl"/>
     <div class="flex flex-col p-8 gap-4 bg-white rounded-b-xl items-center font-ff-red-hat-display">
       <h1 class="font-[900] text-xl text-center">Order Summary</h1>
       <p class="text-center text-Desaturated-blue max-w-[17rem]">You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!
</p>
<div class="flex bg-Very-pale-blue justify-between items-center w-full rounded-md px-3 py-2 mt-4">
  <img :src="musicIcon" alt="music icon"/>
  
  <div class="flex flex-col gap-1">
    <h2 class="font-bold">Annual plan</h2>
    <p class="text-Desaturated-blue">$59.99/year</p>
  </div>
  <a href="#" class="text-Bright-blue underline font-bold decoration-Bright-blue hover:text-Desaturated-blue">Change</a>
</div>
<button class="bg-Bright-blue text-white font-bold w-full py-3 rounded-xl mt-4 shadow-xl">Proceed to Payment</button>
<button class="font-bold text-Desaturated-blue">Cancel Order</button>
</div>
  </main>
  </div>
</template>

