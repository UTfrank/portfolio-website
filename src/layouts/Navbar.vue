<script lang="ts" setup>
import { RouterLink } from "vue-router"
import { MenuItems } from "@/constants/menu";
</script>

<template>
  <nav class="fixed top-0 w-full z-50 py-6 backdrop-blur-md border-b border-b-white/10">
    <div class="container flex justify-between items-center">
      <RouterLink to="/" class="flex items-center">
        <!-- Assuming Logo.png is the text logo, otherwise fallback to text -->
        <span class="text-white font-bold text-xl tracking-wide">WebConsult</span>
      </RouterLink>

      <ul class="hidden md:flex gap-x-8 items-center bg-white/5 px-8 py-3 rounded-full">
        <li v-for="item in MenuItems" :key="item.title">
          <RouterLink :to="item.link" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>

      <button class="border border-white/20 hover:bg-white/10 text-white text-sm font-medium py-3 px-6 rounded-full transition-colors hidden md:block">
        Let's Talk
      </button>

      <!-- Mobile menu button placeholder -->
      <button class="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </nav>
</template>
