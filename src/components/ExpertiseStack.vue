<script lang="ts" setup>
const skills = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    title: "Modern Frontend",
    desc: "Responsive and fast UIs crafted by leveraging modern tools like Vue, React, for performance and SEO.",
    link: "#",
    color: "bg-blue-200 text-black",
    iconColor: "text-black"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: "System Architecture",
    desc: "Designing scalable, modular access of diverse and managing environments for complex requirements.",
    link: "#",
    color: "bg-zinc-900",
    iconColor: "text-white"
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: "Performance Opt",
    desc: "From load times reduced to asset minification, web app outcomes and speeds in lightning-speed.",
    link: "#",
    color: "bg-zinc-900",
    iconColor: "text-white"
  }
];
</script>

<template>
  <section class="py-24 border-b border-white/5">
    <div class="container space-y-12">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 max-w-5xl mx-auto">
        <div class="space-y-4 max-w-lg">
          <h2 class="text-3xl md:text-4xl font-bold text-white">Core expertise <br /> & tech stack.</h2>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Crafting modern web apps and tools for scale alongside the users. The stack and tools go from ...
          </p>
        </div>
        <a href="https://github.com/UTfrank" target="_blank" class="text-zinc-400 font-semibold text-sm hover:text-white transition-colors pb-1 flex items-center gap-2">
          VIEW GITHUB <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="skill in skills" :key="skill.title"
             class="rounded-[2rem] p-8 space-y-12 relative group border border-white/5 transition-transform hover:-translate-y-2"
             :class="skill.color">
          <div :class="skill.iconColor" v-html="skill.icon"></div>

          <div class="space-y-4">
            <h3 class="text-2xl font-bold" :class="skill.title === 'Modern Frontend' ? 'text-black' : 'text-white'">
              {{ skill.title }}
            </h3>
            <p class="text-sm leading-relaxed" :class="skill.title === 'Modern Frontend' ? 'text-black/80' : 'text-zinc-400'">
              {{ skill.desc }}
            </p>
            <a :href="skill.link" class="inline-flex items-center gap-2 text-sm font-semibold pt-2" :class="skill.title === 'Modern Frontend' ? 'text-black hover:underline' : 'text-white hover:text-blue-300'">
              Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
