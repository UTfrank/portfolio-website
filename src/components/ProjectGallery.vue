<script lang="ts" setup>
const images = [
  { img: "/project1.png", title: "Main Dashboard", desc: "Central hub for infrastructure metrics and active alerts." },
  { img: "/project2.png", title: "Real-time Analytics", granular: true, desc: "Granular data exploration tool with multi-parameter filtering." },
  { img: "/project3.png", title: "Infrastructure Settings", desc: "Modular configuration interface for AWS/Azure deployments." }
];
</script>

<template>
  <section class="py-24 border-t border-b border-blue-500/20 mt-8 relative">
    <!-- Decorative background glow -->
    <div class="absolute inset-0 bg-blue-500/5 z-0"></div>
    
    <div class="container max-w-6xl relative z-10">
      
      <!-- header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold text-white mb-4">Interface Gallery</h2>
          <p class="text-zinc-400 text-sm leading-relaxed">
            A deeper look into the visual system and user interface modules developed for the CloudFlow platform.
          </p>
        </div>
        
        <div class="flex gap-3">
          <span class="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Design System</span>
          <span class="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">UX Architecture</span>
        </div>
      </div>

      <!-- grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="item in images" :key="item.title" class="space-y-4">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 relative group">
            <img :src="item.img" :alt="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" :class="{ 'object-top': !item.granular }" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div>
            <h4 class="text-white font-bold text-sm mb-1">{{ item.title }}</h4>
            <p class="text-zinc-500 text-xs">{{ item.desc }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
