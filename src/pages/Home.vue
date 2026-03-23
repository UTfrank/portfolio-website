<script lang="ts" setup>
  import DefaultLayout from '@/layouts/general/DefaultLayout.vue';
  import Hero from '@/components/Hero.vue';
  import StatsSection from '@/components/StatsSection.vue';
  import ServicesSection from '@/components/ServicesSection.vue';
  import ProcessSection from '@/components/ProcessSection.vue';
  import ProjectsSection from '@/components/ProjectsSection.vue';
  import CtaSection from '@/components/CtaSection.vue';
</script>

<template>
  <DefaultLayout>
    <Hero />
    <StatsSection />
    <ServicesSection />
    <ProcessSection />
    <ProjectsSection />
    <CtaSection />
  </DefaultLayout>
</template>

