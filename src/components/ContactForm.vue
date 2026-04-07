<script lang="ts" setup>
import { CheckCircle2, Send } from 'lucide-vue-next';
import { ref } from 'vue';

const isSent = ref(false);
const isLoading = ref(false);

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) return;

  isLoading.value = true;
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  isLoading.value = false;
  isSent.value = true;

  // Reset form
  formData.value = { name: '', email: '', message: '' };

  // Reset success message after 5 seconds
  setTimeout(() => {
    isSent.value = false;
  }, 5000);
};
</script>

<template>
  <section class="pb-24">
    <div class="container max-w-4xl relative">

      <!-- Decorative background glow -->
      <div class="absolute inset-0 bg-blue-500/5 blur-3xl z-0 rounded-[3rem]"></div>

      <div class="bg-zinc-900/80 border border-white/5 rounded-[2rem] p-8 md:p-12 relative z-10 backdrop-blur-xl shadow-2xl">

        <!-- Success Message -->
        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100" leave-to-class="transform -translate-y-4 opacity-0">
          <div v-show="isSent" class="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-3 mb-8">
            <CheckCircle2 class="w-5 h-5 flex-shrink-0" />
            <p class="text-sm font-semibold">MESSAGE SENT. Thank you! Your message has been received.</p>
          </div>
        </transition>

        <h2 class="text-2xl font-bold text-white mb-8">Send a Message</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="block text-xs font-semibold text-zinc-400">Full Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-zinc-600"
                placeholder="John Doe"
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-xs font-semibold text-zinc-400">Email Address</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-zinc-600"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="message" class="block text-xs font-semibold text-zinc-400">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              required
              class="w-full bg-black border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors placeholder:text-zinc-600 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-[#a5c5f7] hover:bg-blue-300 text-black font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
            <Send v-if="!isLoading" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </form>
      </div>
    </div>
  </section>
</template>
