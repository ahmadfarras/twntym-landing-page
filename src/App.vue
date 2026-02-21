<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import WhySection from './components/sections/WhySection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import CtaBanner from './components/sections/CtaBanner.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col bg-canvas text-foreground font-display antialiased">
    <TheNavbar />
    <main class="flex-grow pt-20">
      <HeroSection />
      <WhySection />
      <FeaturesSection />
      <CtaBanner />
      <TestimonialsSection />
    </main>
    <TheFooter />
  </div>
</template>
