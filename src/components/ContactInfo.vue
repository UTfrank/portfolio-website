<script lang="ts" setup>
import { Mail, MapPin, Share2 } from 'lucide-vue-next';
</script>

<template>
  <section class="pb-16">
    <div class="container max-w-4xl">
      <div class="grid sm:grid-cols-3 gap-6">
        
        <!-- Email -->
        <div class="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:bg-zinc-800/80 transition-colors">
          <div class="flex items-center gap-2 text-white font-bold mb-3">
            <Mail class="w-4 h-4 text-blue-300" />
            <h3>Email</h3>
          </div>
          <p class="text-zinc-500 text-xs mb-4">Feel free to reach out anytime.</p>
          <a href="mailto:hello@johnperson.dev" class="text-white text-sm font-medium hover:text-blue-300 transition-colors">
            hello@johnperson.dev
          </a>
        </div>

        <!-- Location -->
        <div class="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:bg-zinc-800/80 transition-colors">
          <div class="flex items-center gap-2 text-white font-bold mb-3">
            <MapPin class="w-4 h-4 text-blue-300" />
            <h3>Location</h3>
          </div>
          <p class="text-zinc-500 text-xs mb-4">London, United Kingdom</p>
          <p class="text-white text-sm font-medium">BST (UTC +1)</p>
        </div>

        <!-- Social Media -->
        <div class="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:bg-zinc-800/80 transition-colors">
          <div class="flex items-center gap-2 text-white font-bold mb-3">
            <Share2 class="w-4 h-4 text-blue-300" />
            <h3>Social Media</h3>
          </div>
          <p class="text-zinc-500 text-xs mb-4">Let's connect online.</p>
          <div class="flex gap-4">
            <a href="#" class="text-zinc-400 hover:text-white transition-colors border border-white/10 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-800">
               <!-- Basic SVG for Demo -->
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors border border-white/10 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-800">
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors border border-white/10 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-800">
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
