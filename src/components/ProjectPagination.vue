<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="py-12 bg-black border-t border-white/5 relative z-20">
    <div class="container max-w-6xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 px-4 sm:px-12 relative">
        
        <!-- Left Link -->
        <a href="#" class="group flex items-center gap-4 text-left mr-auto">
          <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 group-hover:bg-white/10 transition-colors">
            <ArrowLeft class="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <span class="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Previous Project</span>
            <span class="text-white font-semibold group-hover:text-blue-300 transition-colors">Titanium UI Kit</span>
          </div>
        </a>

        <!-- Center Line -->
        <div class="hidden sm:block absolute left-1/2 -translate-x-1/2 w-12 h-px bg-white/20"></div>

        <!-- Right Link -->
        <a href="#" class="group flex items-center gap-4 text-right ml-auto flex-row-reverse">
          <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 group-hover:bg-white/10 transition-colors">
            <ArrowRight class="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <span class="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-1">Next Project</span>
            <span class="text-white font-semibold group-hover:text-blue-300 transition-colors">NeoBank Interface</span>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>
