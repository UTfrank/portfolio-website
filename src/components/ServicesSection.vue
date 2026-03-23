<script lang="ts" setup></script>

<template>
  <section class="py-24">
    <div class="container">
      <div class="grid lg:grid-cols-[1fr_2fr] gap-16">
        <!-- Left: Heading -->
        <div class="space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            Services that make your software stand out.
          </h2>
          <p class="text-zinc-400 text-lg leading-relaxed">
            We focus on real results. Driven by deep technical knowledge, we partner with you.
          </p>
          <div class="pt-4">
            <button class="border border-white/20 hover:bg-white/10 text-white text-sm font-medium py-3 px-6 rounded-full transition-colors">
              View Services
            </button>
          </div>
        </div>

        <!-- Right: Services Grid -->
        <div class="grid sm:grid-cols-2 gap-6">
          <!-- Service 1: Highlighted -->
          <div class="bg-blue-200 rounded-[2rem] p-8 space-y-36 relative group overflow-hidden transition-transform hover:-translate-y-2">
            <div class="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-black">Frontend Dev</h3>
              <p class="text-black/70 text-sm leading-relaxed">
                Building fast, responsive, and beautiful user interfaces that perform efficiently on all devices.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-black font-semibold text-sm hover:underline pt-2">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="bg-zinc-900/80 rounded-[2rem] p-8 space-y-36 relative group overflow-hidden transition-transform hover:-translate-y-2 border border-white/5">
            <div class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white">Design System</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Development of scalable component libraries that ensure consistency across tools.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors pt-2">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="bg-zinc-900/80 rounded-[2rem] p-8 space-y-36 relative group overflow-hidden transition-transform hover:-translate-y-2 border border-white/5">
            <div class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white">Performance</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Optimizing your software to reduce load times, handle higher traffic, and run smoothly.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors pt-2">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="bg-zinc-900/80 rounded-[2rem] p-8 space-y-36 relative group overflow-hidden transition-transform hover:-translate-y-2 border border-white/5">
            <div class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white">Architecture</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Designing high-level structures focused on maintainability, scalability, and performance.
              </p>
              <a href="#" class="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-300 transition-colors pt-2">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
