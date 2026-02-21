<script setup lang="ts">
import type { FeatureCard } from '../../types'

const features: FeatureCard[] = [
  {
    icon: 'touch_app',
    title: 'Book in Seconds',
    description: 'Open the app, choose your therapist, and book. Our interface is designed for speed so you can relax sooner.',
  },
  {
    icon: 'location_on',
    title: 'Track your Therapist',
    description: 'Watch your therapist arrive in real-time on the map. No more guessing when your session will begin.',
  },
  {
    icon: 'lock',
    title: 'Secure Payments',
    description: 'Pay securely through the app with Apple Pay, Google Pay, or Credit Card. Tips are cashless and easy.',
  },
]
</script>

<template>
  <section id="features" class="py-20 px-6 bg-canvas">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-bold tracking-widest uppercase mb-3 text-sm">App Features</p>
        <h2 class="text-3xl md:text-5xl font-bold text-foreground leading-tight">
          Wellness in your pocket.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="flex flex-col items-center text-center group p-6 hover:bg-surface/50 rounded-3xl transition-colors"
        >
          <div class="w-20 h-20 bg-surface border border-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
            <span class="material-symbols-outlined text-4xl" aria-hidden="true">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-3">{{ feature.title }}</h3>
          <p class="text-foreground-muted leading-relaxed">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
