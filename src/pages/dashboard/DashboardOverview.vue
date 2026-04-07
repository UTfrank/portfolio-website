<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <!-- Stats Cards -->
    <OverviewCard
      title="Total Views"
      value="12,456"
      trend="+14% this month"
      gradientClass="from-blue-500/10"
      :icon="viewsIcon"
    />
    <OverviewCard
      title="Projects"
      value="24"
      trend="+2 this month"
      gradientClass="from-purple-500/10"
      :icon="projectsIcon"
    />
    <OverviewCard
      title="Messages"
      value="8"
      trend="3 unread messages"
      trendColor="text-gray-500"
      gradientClass="from-pink-500/10"
      :icon="messagesIcon"
    />
  </div>

  <div class="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg p-6">
    <h2 class="text-xl font-bold text-white mb-6">Recent Activity</h2>
    <div class="space-y-6">
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        </div>
        <div>
          <p class="text-white font-medium">New view on "E-commerce Redesign"</p>
          <p class="text-sm text-gray-400 mt-1">2 hours ago from United States</p>
        </div>
      </div>
      <div class="flex items-start space-x-4">
        <div class="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </div>
        <div>
          <p class="text-white font-medium">New contact form submission</p>
          <p class="text-sm text-gray-400 mt-1">John Doe sent you a message about a potential project.</p>
          <p class="text-xs text-gray-500 mt-1">5 hours ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OverviewCard from '@/components/ui/OverviewCard.vue'

const viewsIcon = `<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`
const projectsIcon = `<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`
const messagesIcon = `<svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>`
</script>
