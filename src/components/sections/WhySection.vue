<script setup lang="ts">
import type { BenefitCard } from '../../types'

const benefits: BenefitCard[] = [
  {
    icon: 'schedule',
    title: 'Efisien',
    description: 'Sempurna untuk jadwal padat Anda. Cukup luangkan waktu istirahat makan siang untuk kembali produktif.',
  },
  {
    icon: 'bolt',
    title: 'Efektif',
    description: 'Teknik terfokus yang dirancang untuk memberikan kelegaan maksimal dalam waktu singkat. Tanpa basa-basi.',
  },
  {
    icon: 'savings',
    title: 'Terjangkau',
    description: 'Nikmati kualitas layanan premium dengan harga yang sangat bersahabat. Kemewahan yang bisa dinikmati setiap hari.',
  },
]
</script>

<template>
  <section id="why-20" class="py-20 px-6 bg-canvas-alt border-t border-primary/10">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-bold tracking-widest uppercase mb-3 text-sm">Benefits</p>
        <h2 class="text-3xl md:text-5xl font-bold text-foreground leading-tight font-display">
          Mengapa 20 Menit?
        </h2>
        <p class="text-foreground-muted mt-4 text-lg">Waktu yang pas untuk tubuh kembali segar.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          class="bg-surface p-8 rounded-3xl border border-primary/15 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center group"
        >
          <div class="w-16 h-16 bg-canvas rounded-full flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/10 group-hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-3xl" aria-hidden="true">{{ benefit.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-3 font-display">{{ benefit.title }}</h3>
          <p class="text-foreground-muted text-sm leading-relaxed">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
