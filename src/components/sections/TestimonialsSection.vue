<script setup lang="ts">
import type { Testimonial } from '../../types'

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: `"The app is so smooth. Booked a massage during my lunch break and the therapist was there in 15 mins."`,
    name: 'Sarah J.',
    platform: 'iOS User',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTVJ3tbZqoZaIHBAUDYL5oWJ0YCDSQB6Ma9H6EeP10-w4SykRM1iq1xI1nqwq3B3Vr_t4Bt6KukqcOowRLrIyEOUuYNvtTu1-1_6Hd6czNb8JccEpTArOteEPyDPdZgUUIsGO0fJmaOK2U6lAOSEXZWJqAKPHwMog8LzKAit09y09SWT36oJ0F4p_93Ux_GUFjdL1tUcxaFegI7LOYF70PZOsajAPurq-332ZtvMxaZMwEMC-BC5JmFVa3K7YJoJL57SYEx1ajME',
  },
  {
    rating: 5,
    quote: `"Tracking feature is a game changer. I know exactly when to be ready. Secure payment is a huge plus."`,
    name: 'Mike T.',
    platform: 'Android User',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPF75fAAhHCSSGmRNV1jTeHdQyD4Q1n4BjbkDOu9jnLbNX8ztT8D_GuuJEWwkpiUKVncavnzNVGcOOSom2rDH0ocY2vnybr9RBPts6TSaWUsS92M288rAfqXQkgTGgMruC0Tp-8DxiaUkDKXujrRfQru23GgQ0mJfRJ5e25vWKVE9O9U4fnyDTEYhWj-c1MCLuAdijSNA4BvUuMvn_oytx7CAry0AzuKoAVybr8s3hBnGvzDaDC_X-7Qpybf-k4p_oeNgmGLlqZi0',
  },
  {
    rating: 5,
    halfStar: true,
    quote: `"Incredibly easy to use. I love that I can filter therapists by their specialty directly in the app."`,
    name: 'Elena R.',
    platform: 'iOS User',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCerKinyTE0pOR6t3oO15xFHu2Ww4ZcxGACJqBhBYjqyzvICPbLh6wzaY21tUmU-EkJsd9q2Jg4ttgQMzyuOWG36CuWlYe0qy-Lfklh1cdWWmOnoXRDADwsLqxAN5Rmv9BAVNxdcimK5a-IQIVYDyk_Ugqdev84DFjCYvVCEPoikC2ITWadwig8wvhhZXNDPJb4lZ40RZFCvOG_Um-cIUHv7C_OPbInKSK6WklUYVQSXp8pg82CiYf8DNeAh-surTi51FLb4fi0zl4',
  },
]
</script>

<template>
  <section id="testimonials" class="py-20 md:py-32 bg-canvas-alt">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">App Reviews</h2>
        <p class="text-foreground-muted">What our mobile users are saying.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-surface p-8 rounded-2xl shadow-sm border border-primary/10 flex flex-col gap-4 hover:border-primary/30 transition-colors"
        >
          <!-- Stars -->
          <div class="flex gap-1 text-primary" :aria-label="`${testimonial.halfStar ? 4.5 : testimonial.rating} out of 5 stars`">
            <span
              v-for="i in testimonial.rating"
              :key="`full-${i}`"
              class="material-symbols-outlined text-xl fill"
              aria-hidden="true"
            >star</span>
            <span
              v-if="testimonial.halfStar"
              class="material-symbols-outlined text-xl"
              aria-hidden="true"
            >star_half</span>
          </div>

          <!-- Quote -->
          <blockquote class="text-foreground font-medium leading-relaxed italic flex-grow">
            {{ testimonial.quote }}
          </blockquote>

          <!-- Reviewer -->
          <footer class="flex items-center gap-3 pt-4 border-t border-foreground/5">
            <div
              class="w-10 h-10 rounded-full bg-surface bg-cover bg-center border border-primary/20 flex-shrink-0"
              :style="{ backgroundImage: `url('${testimonial.avatar}')` }"
              role="img"
              :aria-label="`Photo of ${testimonial.name}`"
            ></div>
            <div>
              <p class="text-sm font-bold text-foreground">{{ testimonial.name }}</p>
              <p class="text-xs text-foreground-muted">{{ testimonial.platform }}</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>
