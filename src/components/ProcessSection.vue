<script lang="ts" setup>
const steps = [
  {
    num: "01",
    title: "Consult",
    desc: "We discuss your goals, you get a clear view of our tech process and your target system."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Designing the best solution architecture with performance and scalability ahead."
  },
  {
    num: "03",
    title: "Execution",
    desc: "High quality professional engineering, working iteratively towards your goal."
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Testing and optimizing to hit the required KPIs and successful rollout."
  }
];
</script>

<template>
  <section class="py-24">
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Proven process for success</h2>
        <p class="text-zinc-400 text-sm max-w-md mx-auto">
          We focus on real results. Driven by deep technical knowledge.
        </p>
      </div>

      <div class="relative">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
        
        <div class="space-y-12">
          <div v-for="(step, index) in steps" :key="step.num" class="relative group">
            <!-- connecting line highlight on hover could go here -->
            <div class="flex items-center w-full" :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
              <!-- Content -->
              <div class="w-1/2 px-12" :class="index % 2 === 0 ? 'text-left' : 'text-right'">
                <h3 class="text-xl font-bold text-white mb-2">{{ step.title }}</h3>
                <p class="text-zinc-400 text-sm leading-relaxed">{{ step.desc }}</p>
              </div>
              
              <!-- Center Circle -->
              <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-black border border-white/20 text-white font-bold text-sm flex items-center justify-center z-10 group-hover:bg-white group-hover:text-black transition-colors">
                  {{ step.num }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
