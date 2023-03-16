<script setup lang="ts">
 import qrImage from "./assets/images/image-qr-code.png"
</script>

<template>
  <main class="h-screen bg-Light-gray flex items-center justify-center">
    <section class="bg-White p-4 max-w-[300px] rounded-xl">
     <img :src="qrImage" alt="QR Code image" class="rounded-xl"/>
     <article class="flex flex-col text-center p-5 gap-4">
      <h1 class="font-bold font-ff-outfit text-xl">Improve your front-end skills by building projects</h1>
      <p class="text-Grayish-blue font-ff-outfit">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
     </article>
    </section>
  </main>
</template>
