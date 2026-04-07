<template>
  <div class="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
    <div 
      class="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br"
      :class="gradientClass"
    ></div>
    
    <div class="flex justify-between items-start mb-1 relative z-10">
      <h3 class="text-gray-400 text-sm font-medium">{{ title }}</h3>
      <div v-if="icon" v-html="icon" class="flex-shrink-0"></div>
    </div>
    
    <p class="text-3xl font-bold text-white relative z-10">{{ value }}</p>
    
    <span 
      v-if="trend" 
      class="text-sm font-medium mt-2 block relative z-10"
      :class="trendColor"
    >
      {{ trend }}
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  value: string | number
  trend?: string
  trendColor?: string
  gradientClass?: string
  icon?: string
}>(), {
  trendColor: 'text-emerald-400',
  gradientClass: 'from-blue-500/10',
  icon: ''
})
</script>
