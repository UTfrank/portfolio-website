<script lang="ts" setup>
const stacks = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    name: "React & TypeScript",
    desc: "Core Framework",
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    name: "D3.js & Chart.js",
    desc: "Data Visualization",
    color: "bg-purple-500/10 text-purple-400"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    name: "Tailwind CSS",
    desc: "Styling System",
    color: "bg-sky-500/10 text-sky-400"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    name: "AWS SDK",
    desc: "Cloud Integration",
    color: "bg-orange-500/10 text-orange-400"
  }
];
</script>

<template>
  <section class="py-16">
    <div class="container max-w-5xl">
      <div class="grid lg:grid-cols-[2fr_1fr] gap-16 items-start">

        <!-- Left: Overview and details -->
        <div class="space-y-12">

          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-white">Project Overview</h2>
            <div class="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                CloudFlow required a comprehensive modernization of their infrastructure monitoring tools. Their existing solution was fragmented across multiple legacy platforms, leading to high latency in incident response and poor visibility into multi-cloud deployments.
              </p>
              <p>
                The goal was to build a unified, real-time analytics engine that could ingest millions of data points and present them through an intuitive, high-performance interface. I served as the Lead Frontend Architect, focusing on data visualization efficiency and user experience.
              </p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 space-y-4">
              <h3 class="text-white font-bold text-lg">The Challenge</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Rendering high-frequency real-time data charts without compromising UI responsiveness or battery life on mobile devices.
              </p>
            </div>

            <div class="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 space-y-4">
              <h3 class="text-white font-bold text-lg">The Solution</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">
                Implemented a custom WebWorker-based data processing layer and leveraged Canvas-based rendering for complex time-series charts.
              </p>
            </div>
          </div>

        </div>

        <!-- Right: Tech Stack Sidebar -->
        <div class="bg-zinc-900/80 border border-white/5 rounded-3xl p-8 space-y-8 relative">

          <!-- Decorative circle outside -->
          <button class="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>

          <h3 class="text-white font-bold text-lg">Tech Stack</h3>

          <div class="space-y-6">
            <div v-for="stack in stacks" :key="stack.name" class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" :class="stack.color" v-html="stack.icon"></div>
              <div>
                <h4 class="text-white font-semibold text-sm">{{ stack.name }}</h4>
                <p class="text-zinc-500 text-xs">{{ stack.desc }}</p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button class="w-full bg-[#a5c5f7] hover:bg-blue-300 text-black font-semibold py-3 px-4 rounded-xl transition-colors flex justify-center items-center gap-2 text-sm">
              View Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            </button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
