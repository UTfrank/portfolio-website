<script lang="ts" setup>
  import Navbar from '../Navbar.vue';
  import Footer from '../Footer.vue';
</script>

<template>
  <main class="w-full h-auto">
    <Navbar />
    <slot />
    <Footer />
  </main>
</template>
