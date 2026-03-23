<script lang="ts" setup>
const projects = [
  {
    image: "/project1.png",
    title: "Recent Contract",
    tag1: "WEB APP",
    tag2: "COMMERCE",
    desc: "A fully functional e-commerce platform handling 10k+ users daily."
  },
  {
    image: "/project2.png",
    title: "E-commerce Experience",
    tag1: "UX UI",
    tag2: "FRONTEND",
    desc: "A re-brand and storefront revamp that elevated sales by 40% in a quarter."
  },
  {
    image: "/project3.png",
    title: "Card Design System",
    tag1: "DESIGN SYSTEM",
    tag2: "FINANCE",
    desc: "A comprehensive design system created for a global FinTech card brand."
  }
];
</script>

<template>
  <section class="py-24">
    <div class="container">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div class="space-y-4 max-w-lg">
          <h2 class="text-3xl md:text-4xl font-bold text-white">Recent Projects</h2>
          <p class="text-zinc-400 text-sm leading-relaxed">
            A selection of our best work that showcases our discipline and technical excellence.
          </p>
        </div>
        <a href="#" class="text-white text-sm font-semibold hover:text-blue-300 transition-colors inline-flex items-center gap-2 pb-2">
          View All Our Work <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="item in projects" :key="item.title" class="group cursor-pointer">
          <div class="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3] bg-zinc-900 border border-white/5">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{{ item.title }}</h3>
          <p class="text-zinc-400 text-sm mb-4 leading-relaxed">{{ item.desc }}</p>
          <div class="flex gap-2 text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
            <span>{{ item.tag1 }}</span>
            <span class="w-1 h-1 rounded-full bg-zinc-700 self-center"></span>
            <span>{{ item.tag2 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
