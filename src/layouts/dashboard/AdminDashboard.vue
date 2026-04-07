<template>
  <div class="min-h-screen bg-[#0a0a0a]/80 font-sans text-white flex">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-gray-800 bg-[#0c0c0e] flex flex-col hidden md:flex">
      <div class="p-6 border-b border-gray-800">
        <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Logo.</h2>
      </div>
      <nav class="flex-1 space-y-2">
        <router-link
          v-for="item in AdminMenuItems"
          :key="item.title"
          :to="item.link"
          :active-class="!item.exact ? 'text-[#a5c5f7] bg-[#a5c5f7]/10' : ''"
          :exact-active-class="'text-[#a5c5f7] bg-[#a5c5f7]/10 border-r-3 border-r-[#a5c5f7]'"
          class="flex items-center space-x-3 text-gray-400 hover:bg-gray-800/50 p-3 hover:text-white transition-colors"
        >
          <div v-html="item.icon" class="flex items-center"></div>
          <span class="font-medium">{{ item.title }}</span>
        </router-link>
      </nav>
      <div class="py-4 border-t border-gray-800">
        <button @click="handleLogout" class="flex w-full items-center space-x-3 text-red-400 hover:bg-red-400/10 p-3 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span class="font-medium">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden">
      <!-- Top Header -->
      <header class="h-20 border-b border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-lg flex items-center justify-between px-8 z-10 hidden md:flex">
        <h1 class="text-xl font-semibold text-gray-200">Dashboard Overview</h1>
        <!-- <div class="flex items-center space-x-4">
          <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center border-2 border-gray-800">
            <span class="font-bold text-sm">A</span>
          </div>
        </div> -->
      </header>

      <!-- Content Area -->
      <div class="flex-1 overflow-y-auto p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { AdminMenuItems } from '@/constants/menu'

const router = useRouter()

const handleLogout = () => {
  // TODO: Add logout logic here (e.g., Supabase signout)
  router.push('/login')
}
</script>
