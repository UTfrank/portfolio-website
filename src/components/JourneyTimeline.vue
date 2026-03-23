<script lang="ts" setup>
const journey = [
  {
    period: "2021 — PRESENT",
    role: "Senior Frontend Lead",
    desc: "Leading the development of a SaaS enterprise control platform that sees 10k daily engineering analysts worldwide.",
    dotColor: "bg-blue-300",
    side: "left"
  },
  {
    period: "2018 — 2021",
    role: "UI/UX Developer",
    desc: "Bridging the gap between design and engineering. Built a modern react design system used across 6 distinct projects.",
    dotColor: "bg-zinc-700",
    side: "right"
  },
  {
    period: "2016 — 2018",
    role: "Junior Developer",
    desc: "Full stack development for startup clients and web dev projects at an agency that elevated user conversion rates.",
    dotColor: "bg-zinc-700",
    side: "left"
  }
];
</script>

<template>
  <section class="py-24 border-b border-white/5">
    <div class="container max-w-4xl">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Professional journey</h2>
        <p class="text-zinc-400 text-sm max-w-md mx-auto">
          A track of my growth and contributions
        </p>
      </div>

      <div class="relative mt-20">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
        
        <div class="space-y-24">
          <div v-for="(item, index) in journey" :key="index" class="relative group">
            
            <div class="flex items-start w-full" :class="item.side === 'left' ? 'flex-row' : 'flex-row-reverse'">
              
              <!-- Content -->
              <div class="w-1/2 px-12" :class="item.side === 'left' ? 'text-right' : 'text-left'">
                <p class="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">{{ item.period }}</p>
                <h3 class="text-2xl font-bold text-white mb-3">{{ item.role }}</h3>
                <p class="text-zinc-400 text-sm leading-relaxed" 
                   :class="item.side === 'left' ? 'ml-auto max-w-[280px]' : 'mr-auto max-w-[280px]'">
                  {{ item.desc }}
                </p>
              </div>
              
              <!-- Center Dot -->
              <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center top-2">
                <div class="w-3 h-3 rounded-full border-4 border-black box-content" :class="item.dotColor"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
