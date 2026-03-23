<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import DefaultLayout from '@/layouts/general/DefaultLayout.vue';
  import AboutHero from '@/components/AboutHero.vue';
  import ExpertiseStack from '@/components/ExpertiseStack.vue';
  import JourneyTimeline from '@/components/JourneyTimeline.vue';
  import CtaSection from '@/components/CtaSection.vue';
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen pt-20">
      <AboutHero />
      <ExpertiseStack />
      <JourneyTimeline />
      <CtaSection />
    </div>
  </DefaultLayout>
</template>
