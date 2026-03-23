<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import DefaultLayout from '@/layouts/general/DefaultLayout.vue';
  import ContactHero from '@/components/ContactHero.vue';
  import ContactInfo from '@/components/ContactInfo.vue';
  import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen pt-20">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  </DefaultLayout>
</template>
