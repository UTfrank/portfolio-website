<script lang="ts" setup></script>

<template>
  <section class="pt-40 pb-24 border-b border-white/5">
    <div class="container">
      <div class="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">
        
        <!-- Left Content -->
        <div class="space-y-12 max-w-2xl">
          <h1 class="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            The mind <br /> behind <br />
            <span class="text-blue-300">the interface.</span>
          </h1>

          <p class="text-zinc-400 text-lg leading-relaxed">
            I lead the Frontend Direction at Code_Consult with over eight years of experience crafting digital products that live at the intersection of business needs and technical performance. My journey began out of a curiosity to build the web better, which quickly evolved into a passion for architecting scalable user experiences.
          </p>

          <div class="space-y-4">
            <h3 class="text-white font-bold text-xl">My Philosophy</h3>
            <p class="text-zinc-400 text-base leading-relaxed">
              I believe that code is a tool for humans. A well-written set of functions is only as important as its readability. To me, "good enough" isn't an option. I push for accessibility, scalability, and extreme performance in every line of code I write.
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="text-white font-bold text-xl">My approach</h3>
            <p class="text-zinc-400 text-base leading-relaxed">
              I approach problem solving with a design-first mindset. By understanding the user's pain points and the business goals, I can build software that solves actual needs. It is about culture, innovation, data-backed tests, leveraging modern tech to back future-proof applications.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <button class="bg-blue-200 hover:bg-blue-300 text-black font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              RESUME (PDF)
            </button>
            <button class="border border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              LET'S TALK
            </button>
          </div>
        </div>

        <!-- Right image -->
        <div class="relative">
          <img src="/about-me.png" alt="Portrait" class="w-full max-w-[400px] object-cover rounded-3xl z-10 relative bg-zinc-900 aspect-[4/5] object-top" />
          
          <!-- Floating stats card -->
          <div class="absolute -bottom-6 -left-6 bg-blue-200 text-black p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center gap-1 min-w-[120px]">
            <span class="font-bold text-2xl flex items-center">
              8+ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
            </span>
            <span class="text-xs font-semibold uppercase tracking-wider opacity-80">Years EXP.</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
