<script lang="ts" setup></script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Text -->
        <div class="space-y-6">
          <h2 class="text-xs font-semibold text-blue-300 uppercase tracking-widest">ABOUT US & STATS</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            Solving complex problems <br /> through code
          </h3>
          <p class="text-zinc-400 text-lg leading-relaxed max-w-lg">
            We focus on real results. Driven by deep technical knowledge, we partner with you to give your software and tech operations the competitive advantage.
          </p>
          <div class="pt-4">
            <button class="border border-white/20 hover:bg-white/10 text-white text-sm font-medium py-3 px-6 rounded-full transition-colors">
              Read About Us
            </button>
          </div>
        </div>

        <!-- Right Stats Grid -->
        <div class="grid grid-cols-2 gap-6">
          <!-- Stat 1 -->
          <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-900/80 transition-colors">
            <div class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4 class="text-3xl font-bold text-white mb-2">500+</h4>
            <p class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Satisfied Clients</p>
          </div>

          <!-- Stat 2 -->
          <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-900/80 transition-colors">
            <div class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h4 class="text-3xl font-bold text-white mb-2">1205+</h4>
            <p class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Completed Projects</p>
          </div>

          <!-- Stat 3 -->
          <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-900/80 transition-colors">
            <div class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h4 class="text-3xl font-bold text-white mb-2">10+</h4>
            <p class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Years of Experience</p>
          </div>

          <!-- Stat 4 -->
          <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-zinc-900/80 transition-colors">
            <div class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <h4 class="text-3xl font-bold text-white mb-2">30+</h4>
            <p class="text-sm font-medium text-zinc-500 uppercase tracking-wider">Awards Winning</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
