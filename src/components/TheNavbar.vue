<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'
import type { NavLink } from '../types'

const { isDark, toggleTheme } = useTheme()

const isScrolled = ref(false)

const navLinks: NavLink[] = [
  { href: '#why-20', label: 'Concept' },
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#download', label: 'Download' },
]

function handleScroll(): void {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300',
      isScrolled
        ? 'bg-canvas/95 shadow-sm'
        : 'bg-canvas/90',
      'border-primary/10',
    ]"
    aria-label="Main navigation"
  >
    <div class="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
        <span class="material-symbols-outlined text-primary text-3xl" aria-hidden="true">spa</span>
        <span class="text-foreground text-xl font-bold tracking-tight">twntym</span>
      </a>

      <!-- Desktop nav links -->
      <div class="hidden md:flex items-center gap-8" role="navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-foreground-muted text-sm font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- Theme toggle -->
        <div
          class="flex items-center bg-surface rounded-full p-1 border border-primary/20 shadow-inner"
          role="group"
          aria-label="Theme switcher"
        >
          <button
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center transition-all',
              !isDark
                ? 'bg-primary text-white shadow-sm border border-primary/40'
                : 'text-foreground-muted hover:text-foreground',
            ]"
            aria-label="Switch to light mode"
            :aria-pressed="!isDark"
            @click="() => { if (isDark) toggleTheme() }"
          >
            <span class="material-symbols-outlined text-[18px]" aria-hidden="true">light_mode</span>
          </button>
          <button
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center transition-all',
              isDark
                ? 'bg-primary/20 text-primary shadow-sm border border-primary/30'
                : 'text-foreground-muted hover:text-foreground',
            ]"
            aria-label="Switch to dark mode"
            :aria-pressed="isDark"
            @click="() => { if (!isDark) toggleTheme() }"
          >
            <span class="material-symbols-outlined text-[18px]" aria-hidden="true">dark_mode</span>
          </button>
        </div>

        <!-- CTA button -->
        <a
          href="#download"
          class="bg-primary hover:bg-primary-dark text-canvas-alt text-sm font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Get the App
        </a>
      </div>
    </div>
  </nav>
</template>
