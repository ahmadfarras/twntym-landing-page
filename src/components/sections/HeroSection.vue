<script setup lang="ts">
const THERAPIST_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCerKinyTE0pOR6t3oO15xFHu2Ww4ZcxGACJqBhBYjqyzvICPbLh6wzaY21tUmU-EkJsd9q2Jg4ttgQMzyuOWG36CuWlYe0qy-Lfklh1cdWWmOnoXRDADwsLqxAN5Rmv9BAVNxdcimK5a-IQIVYDyk_Ugqdev84DFjCYvVCEPoikC2ITWadwig8wvhhZXNDPJb4lZ40RZFCvOG_Um-cIUHv7C_OPbInKSK6WklUYVQSXp8pg82CiYf8DNeAh-surTi51FLb4fi0zl4'
const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1xwCa143qE9a8-yzeXO4Y7x0uCu4N3-prXaC59WG_ob0LpPl5valFHqP2-Hx5Cn6tcRB0O-fTjZyT6bYHS8jIeYsMpuvFUkPi2ejs4tpMJIE8aeFk8ZjUP3hMa-YjbTzXIxanQrdET8RM3BKBgbkudlr-8fnhrgvrG3KBvSFKmnYHDOAqYsfHzWraW87FWNYGKNRbHtTzqz_-0oqtxVW4XUMWkdjleOY7FcRHkjU33Z2RR_Wv0NHLEIj6OqkC3O0UO4gvpF8RRY'
</script>

<template>
  <section class="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 overflow-hidden gap-12 pt-10 lg:pt-0">
    <!-- Background blobs -->
    <div class="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
    <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10" aria-hidden="true"></div>

    <!-- Text content -->
    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 gap-8 md:gap-10">
      <div class="flex flex-col w-full max-w-2xl">
        <p class="text-foreground-muted text-lg md:text-2xl font-medium tracking-[0.2em] md:tracking-[0.5em] uppercase pb-4 border-b border-primary/30">
          20 Minutes
        </p>
        <h1 class="text-foreground text-[12vw] lg:text-[130px] leading-[0.85] font-black tracking-tighter py-4 lg:py-6 select-none">
          twntym
        </h1>
        <p class="text-foreground-muted text-lg md:text-2xl font-medium tracking-[0.2em] md:tracking-[0.5em] uppercase pt-4 border-t border-primary/30">
          Massage
        </p>
      </div>

      <p class="text-foreground-dim text-base md:text-lg max-w-md leading-relaxed font-light">
        The on-demand massage app. Book a certified therapist to your home, office, or hotel in seconds.
      </p>

      <!-- Download buttons -->
      <div id="download" class="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
        <!-- App Store -->
        <a
          href="#"
          class="inline-flex items-center bg-foreground text-canvas px-5 py-2.5 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Download on the App Store"
        >
          <svg class="w-8 h-8 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 3.75-1.62 1.05.01 2.05.45 2.65.84-2.23 1.25-2.01 4.54.49 5.58-.45 1.34-1.07 2.62-1.97 3.43zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          <div class="flex flex-col items-start leading-none">
            <span class="text-[10px] uppercase font-medium opacity-70">Download on the</span>
            <span class="text-xl font-bold font-display">App Store</span>
          </div>
        </a>

        <!-- Google Play -->
        <a
          href="#"
          class="inline-flex items-center border border-foreground-muted/30 text-foreground px-5 py-2.5 rounded-lg hover:bg-surface transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 gap-3 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Get it on Google Play"
        >
          <svg class="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.185-.154-.316-.363-.36-.606V2.419c.044-.243.175-.452.36-.605zM15.42 13.628l-2.96-2.96-2.96 2.959 5.92 5.92c.622-.36 1.055-.98 1.154-1.705l-1.154-4.214zM16.574 8.372l1.154-4.214c-.099-.725-.532-1.345-1.154-1.705l-5.92 5.919 2.96 2.96 2.96-2.96zM4.964 10.669l9.317-9.316c-.463-.263-1.006-.328-1.508-.18L4.364 3.654l.6 7.015zm0 2.662l-.6 7.015 8.41 2.482c.502.148 1.045.083 1.508-.18l-9.318-9.317z" />
          </svg>
          <div class="flex flex-col items-start leading-none">
            <span class="text-[10px] uppercase font-medium text-foreground-dim">Get it on</span>
            <span class="text-xl font-bold font-display">Google Play</span>
          </div>
        </a>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2 text-sm text-foreground-dim" aria-label="Rating: 4.9 out of 5 from 12,000+ reviews">
        <span class="flex gap-1" aria-hidden="true">
          <span v-for="i in 5" :key="i" class="material-symbols-outlined text-primary text-base fill">star</span>
        </span>
        <span>4.9/5 from 12k+ reviews</span>
      </div>
    </div>

    <!-- Phone mockup -->
    <div class="w-full lg:w-1/2 flex justify-center items-center relative h-[600px] lg:h-[800px]">
      <!-- Gradient overlay on mobile -->
      <div class="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-transparent z-10 lg:hidden" aria-hidden="true"></div>

      <!-- Phone frame -->
      <div
        class="relative w-[300px] h-[600px] bg-canvas-alt rounded-[3rem] shadow-2xl border-8 border-foreground-dim/30 overflow-hidden
               transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-0"
        aria-label="App preview"
        role="img"
      >
        <!-- Notch -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-foreground/20 rounded-b-2xl z-20" aria-hidden="true"></div>

        <div class="w-full h-full flex flex-col">
          <!-- App header -->
          <div class="pt-10 px-6 pb-4 flex justify-between items-center bg-canvas-alt shadow-sm border-b border-primary/10">
            <span class="font-bold text-lg text-foreground">twntym</span>
            <span class="material-symbols-outlined text-foreground" aria-hidden="true">account_circle</span>
          </div>

          <!-- Map area -->
          <div class="flex-1 bg-surface relative">
            <div
              class="absolute inset-0 bg-cover bg-center opacity-30"
              :style="{ backgroundImage: `url('${MAP_IMG}')`, filter: 'grayscale(100%)' }"
              aria-hidden="true"
            ></div>
            <!-- Therapist pins -->
            <div class="absolute top-1/4 left-1/3 w-8 h-8 bg-primary rounded-full border-2 border-canvas-alt shadow-lg animate-bounce flex items-center justify-center" aria-hidden="true">
              <span class="material-symbols-outlined text-canvas text-xs fill">spa</span>
            </div>
            <div class="absolute bottom-1/3 right-1/4 w-8 h-8 bg-surface rounded-full border-2 border-canvas-alt shadow-lg flex items-center justify-center border-primary/30" aria-hidden="true">
              <span class="material-symbols-outlined text-primary text-xs">spa</span>
            </div>

            <!-- Booking card -->
            <div class="absolute bottom-6 left-4 right-4 bg-canvas-alt p-4 rounded-xl shadow-lg border border-primary/10">
              <div class="flex gap-3 mb-3">
                <div
                  class="w-12 h-12 rounded-full bg-surface bg-cover bg-center border border-primary/20 flex-shrink-0"
                  :style="{ backgroundImage: `url('${THERAPIST_IMG}')` }"
                  role="img"
                  aria-label="Sarah Jenkins, therapist"
                ></div>
                <div>
                  <h4 class="font-bold text-sm text-foreground">Sarah Jenkins</h4>
                  <div class="flex items-center text-xs text-primary font-medium">
                    <span class="material-symbols-outlined text-xs mr-1 fill" aria-hidden="true">star</span>
                    4.98
                  </div>
                </div>
                <div class="ml-auto text-xs bg-primary/20 text-primary px-2 py-1 rounded-md h-fit border border-primary/20">
                  Available
                </div>
              </div>
              <div class="w-full bg-primary hover:bg-primary-dark text-canvas-alt py-3 rounded-lg text-center font-bold text-sm transition-colors cursor-pointer">
                Book 20 Min — $29
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Glow behind phone -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse" aria-hidden="true"></div>
    </div>
  </section>
</template>
