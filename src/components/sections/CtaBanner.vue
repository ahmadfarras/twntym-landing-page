<script setup lang="ts">
const BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoWTYnh2RqjTnU5l-CkwjPyblLs4zF4rXFDHMwt9W2jrmudOc1TRHga1q-sa6Ov_p7_advYpM1v4TDj_w5KBbg_KbjhMXMT1rgonQvmFa3RHzO5GD563tYsMl8qpLmW6WaUJ09bcDQW6DT1oJr3jyMSnEq_8yCMNZJT6aJztC08ax6lXz9rAlaOVapjZ5h1UDiWTmwwXDZLkPDkhpG4jL1p_9iBXq4WVhJ8CYefumk5jnD-TrqCbSZoeW2WbX1dWe5iTRwwj7HMV4'
</script>

<template>
  <section class="relative h-[400px] md:h-[500px] w-full overflow-hidden" aria-label="Download call to action">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-foreground/30 z-10" aria-hidden="true"></div>

    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-fixed"
      :style="{ backgroundImage: `url('${BG_IMAGE}')`, filter: 'grayscale(40%)' }"
      role="img"
      aria-label="Serene minimalist spa interior with soft lighting and plants"
    ></div>

    <!-- Card -->
    <div class="absolute inset-0 z-20 flex items-center justify-center">
      <div class="bg-canvas-alt/85 backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-lg mx-4 text-center shadow-2xl border border-primary/20">
        <span class="material-symbols-outlined text-primary text-5xl mb-4 block" aria-hidden="true">phonelink_setup</span>
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Download Now</h2>
        <p class="text-foreground-muted mb-6 text-lg">
          Your first 20-minute session is 50% off when you download the app today.
        </p>
        <a
          href="#download"
          class="inline-block bg-primary hover:bg-primary-dark text-canvas-alt px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
</template>
