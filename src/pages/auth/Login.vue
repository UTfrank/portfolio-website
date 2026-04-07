<template>
  <div class="min-h-screen flex items-center justify-center bg-radial from-[#1e1b4b] to-[#0a0a0c] font-sans">
    <div class="max-w-sm w-full p-8 rounded-2xl backdrop-blur-md bg-white/5 border-b border-b-white/10 shadow-xl shadow-black/50">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
        <p class="text-gray-400 mt-2">Sign in to your dashboard</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-3 c border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="you@example.com"
            required
          >
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="••••••••"
            required
          >
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 bg-[#a5c5f7] text-[#0a0a0c] text-center flex items-center justify-center font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
        >
          <span v-if="!loading">Sign In</span>
          <Spinner class="size-8" v-else />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/libs/supabaseClient'
import Spinner from '@/components/ui/spinner/Spinner.vue'
import { toast } from 'vue-sonner'

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    console.log('Login success:', data)
    toast.success('Login successful')

    router.push('/admin')
  } catch (error: any) {
    console.error('Login error:', error)
    toast.error(error.message || 'Login failed')
  } finally {
    loading.value = false
  }
}
</script>
