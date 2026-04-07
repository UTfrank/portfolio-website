<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, Sun } from 'lucide-vue-next';
import { ref } from 'vue';

const filters = ["All Projects", "Web Apps", "Mobile", "Consulting", "Design Systems"];
const activeFilter = ref("All Projects");

const projects = [
  {
    category: "WEB DEVELOPMENT",
    title: "CloudFlow Analytics",
    image: "/project1.png",
    link: "#",
    colSpan: "col-span-1"
  },
  {
    category: "MOBILE APP",
    title: "NeoBank Interface",
    image: "/project2.png",
    link: "#",
    colSpan: "col-span-1"
  },
  {
    category: "DESIGN SYSTEM",
    title: "Titanium UI",
    image: "/project3.png",
    link: "#",
    colSpan: "col-span-1"
  },
  {
    category: "CONSULTING",
    title: "Legacy Migration",
    image: "/hero.png",
    link: "#",
    colSpan: "col-span-1"
  }
];
</script>

<template>
  <section class="py-24 pt-32 min-h-screen relative">
    <div class="container max-w-6xl">
      <!-- Header -->
      <div class="max-w-xl mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Case <span class="text-blue-300">Studies</span>
        </h1>
        <p class="text-zinc-400 text-sm leading-relaxed">
          A selection of my professional work ranging from full-scale web
          applications to specialized consulting projects. Each project represents
          a unique challenge solved through clean code and user-centric design.
        </p>
      </div>

      <Tabs default-value="account">

        <TabsList class="bg-transparent grid md:grid-cols-5 gap-6">
          <TabsTrigger v-for="filter in filters" :key="filter" :value="filter" class="px-5 py-2.5 rounded-full text-xs font-semibold transition-colors border"
          :class="activeFilter === filter ? 'bg-[#a5c5f7] text-black! border-blue-200' : 'bg-zinc-800/50 text-white border-white/10 hover:bg-white/10'">
            {{ filter }}
          </TabsTrigger>
        </TabsList>

        <TabsContent v-for="filter in filters" :key="filter" :value="filter">
          Make changes to your account here.
        </TabsContent>

      </Tabs>

      <!-- Filters -->
      <div class="flex flex-wrap gap-3 mb-12">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="px-5 py-2.5 rounded-full text-xs font-semibold transition-colors border"
          :class="activeFilter === filter ? 'bg-[#a5c5f7] text-black border-blue-200' : 'bg-zinc-800/50 text-white border-white/10 hover:bg-white/10'"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.title"
             class="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-zinc-900 border border-white/5 cursor-pointer"
             :class="project.colSpan">
          <!-- Image -->
          <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Content -->
          <div class="absolute inset-0 p-8 flex flex-col justify-end">
            <span class="text-[10px] font-bold tracking-widest text-blue-300 uppercase mb-2">{{ project.category }}</span>
            <h3 class="text-2xl font-bold text-white mb-4">{{ project.title }}</h3>
            <a :href="project.link" class="inline-flex items-center gap-2 text-white text-xs font-semibold hover:text-blue-300 transition-colors">
              Read more <ArrowRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- Floating Theme Toggle Placeholder -->
    <button class="fixed right-8 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-50">
      <Sun class="w-5 h-5" />
    </button>
  </section>
</template>
