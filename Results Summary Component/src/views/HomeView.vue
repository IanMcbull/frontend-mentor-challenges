<script setup lang="ts">
import SummaryCardVue from '@/components/SummaryCard.vue';
import { useDataStore } from "../stores/data"
const userData = useDataStore().userData
</script>

<template>
  <main class="flex justify-center items-center h-screen">
    <div class="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 font-ff-Hanken-Grotesk max-w-3xl shadow-2xl">
    <div class="flex flex-col items-center justify-around bg-gradient-to-t from-Light-royal-blue-background to-Light-slate-blue-background p-6 md:rounded-3xl rounded-b-3xl">
        <h1 class="text-Light-lavender font-bold">Your Result</h1>
       <div class="shadow-xl gap-1 w-32 h-32 rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-Violet-blue-circle to-Persian-blue-circle">
        <h2 class="text-White text-5xl font-bold">76</h2>
         <p class="text-Light-lavender font-semibold">of 100</p> 
      </div>
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-white font-bold text-xl">Great</h3>
      <p class="text-Light-lavender w-72 md:w-60 text-center">You scored higher than 65% of the people who have taken these tests</p>
      </div>
    </div>
    <div class="p-6 md:py-8 bg-White flex flex-col rounded-r-md">
       <h3 class="font-bold">Summary</h3>
       <div class="flex flex-col mt-6">
          <div v-for="data in userData">
             <SummaryCardVue :bg_color="data['bg-color']" :icon="data.icon" :text_color="data['text-color']" :score="data.score" :text="data.category"/>
          </div>
          <button class="text-White bg-Dark-gray-blue py-3 rounded-full font-bold hover:bg-Light-royal-blue-background">Continue</button>
       </div>
    </div>
  </div>
  </main>
</template>
