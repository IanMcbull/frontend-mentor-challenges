<template>
  <div class="rounded-md shadow-md p-3 flex justify-between mb-4 border-none" :class="bg_color">
    <div class="flex gap-2">
        <img :src="icon" alt="icon"/>
        <h3 class="font-bold" :class="text_color">{{ text }}</h3>
    </div>
    <div class="flex gap-2">
        <span class="font-bold">{{ score }}</span>
        <span>/</span>
        <span>100</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import reactionIcon from "../assets/images/icon-reaction.svg"
 defineProps<{bg_color:string,text_color:string,icon:string,score:number,text:string}>()
</script>