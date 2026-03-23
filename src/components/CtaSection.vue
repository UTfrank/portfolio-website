<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="py-24 pb-32">
    <div class="container">
      <div class="bg-blue-200 rounded-[3rem] px-8 py-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <!-- subtle gradient overlay for realism -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>

        <h2 class="text-4xl md:text-5xl font-bold text-black mb-8 relative z-10 max-w-xl">
          Ready to transform your digital presence?
        </h2>
        <RouterLink to="/contact" class="bg-white hover:bg-zinc-100 text-black font-semibold py-4 px-8 rounded-full transition-colors relative z-10 shadow-lg">
          Let's talk
        </RouterLink>
        <p class="text-black/60 text-sm mt-6 font-medium relative z-10 uppercase tracking-widest">
          Consulting on cutting-edge projects for Fortune 500
        </p>
      </div>
    </div>
  </section>
</template>
