<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import DefaultLayout from '@/layouts/general/DefaultLayout.vue';
  import ProjectDetailHero from '@/components/ProjectDetailHero.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import ProjectGallery from '@/components/ProjectGallery.vue';
  import ProjectPagination from '@/components/ProjectPagination.vue';
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen pt-20">
      <ProjectDetailHero />
      <ProjectOverview />
      <ProjectGallery />
      <ProjectPagination />
    </div>
  </DefaultLayout>
</template>
