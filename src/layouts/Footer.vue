<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { Github, Linkedin, Twitter } from 'lucide-vue-next';
</script>

<template>
  <footer class="w-full border-t border-white/5 py-8 mt-12">
    <div class="container flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="flex items-center">
        <span class="text-white font-bold text-lg tracking-wide">Code_Consult</span>
      </div>
      
      <div class="text-zinc-500 text-sm">
        &copy; 2024 Code_Consult. All rights reserved.
      </div>
      
      <div class="flex items-center gap-4 text-zinc-400">
        <a href="#" class="hover:text-white transition-colors">
          <Github class="w-5 h-5" />
        </a>
        <a href="#" class="hover:text-white transition-colors">
          <Linkedin class="w-5 h-5" />
        </a>
        <a href="#" class="hover:text-white transition-colors">
          <Twitter class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
