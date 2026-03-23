<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="pt-40 pb-20 relative">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 pr-4">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Professional <br />
            <span class="text-blue-300">consulting</span> for your <br />
            app & software.
          </h1>

          <p class="text-lg text-zinc-400 max-w-xl leading-relaxed">
            We focus on real results. Driven by deep technical <br class="hidden md:block"/>
            knowledge, we partner with you to give your <br class="hidden md:block"/>
            software and tech operations the competitive advantage.
          </p>

          <div class="flex flex-wrap items-center gap-6 pt-4">
            <RouterLink to="/contact" class="bg-blue-200 hover:bg-blue-300 text-black font-semibold py-3 px-8 rounded-md transition-colors">
              Let's talk
            </RouterLink>
            <RouterLink to="/projects" class="flex items-center gap-2 text-white hover:text-blue-300 transition-colors font-medium">
              See Our Work
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </RouterLink>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative">
          <div class="absolute inset-0 bg-blue-500/10 rounded-[2rem] -translate-x-4 translate-y-4 -z-10 blur-xl"></div>
          <img src="/src/assets/hero.JPG" alt="Consultant in suit" class="w-full object-cover rounded-[2rem] shadow-2xl border border-white/5 aspect-[4/5]" />
        </div>
      </div>
    </div>
  </section>
</template>
