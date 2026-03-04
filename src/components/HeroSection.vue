<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Ambient Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-dim/5 rounded-full blur-3xl"></div>
      <div class="absolute inset-0 grid-bg opacity-30"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <div class="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
            <span class="text-xs font-mono text-red-400 tracking-wider uppercase font-bold">{{ $t('hero.newBadge') }}</span>
          </div>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border mb-8">
            <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span class="text-xs font-mono text-muted-foreground tracking-wider uppercase">{{ $t('hero.subtitle') }}</span>
          </div>

          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-balance">
            <span class="text-foreground">{{ $t('hero.title1') }}</span>
            <br />
            <span class="neon-text">{{ $t('hero.title2') }}</span>
            <br />
            <span class="text-foreground">{{ $t('hero.title3') }}</span>
            <span class="neon-text">{{ $t('hero.title4') }}</span>
          </h1>

          <p class="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4">
            {{ $t('hero.desc1') }}
            <span class="text-foreground font-semibold">{{ $t('hero.desc1_2') }}</span>
            {{ $t('hero.desc1_3') }}
          </p>

          <p class="text-muted-foreground/70 text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            {{ $t('hero.desc2') }}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button @click="$emit('tryDemo')" class="btn-primary w-full sm:w-auto">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ isLoggedIn ? $t('nav.launchDemo') : $t('nav.tryDemo') }}
            </button>
            <a href="#why-better" class="btn-secondary w-full sm:w-auto">
              {{ $t('hero.btnWhy') }}
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <!-- Auth hint -->
          <p v-if="!isLoggedIn" class="text-muted-foreground/50 text-xs mt-4 text-center lg:text-left font-mono">
            {{ $t('hero.authHint') }}
          </p>
        </div>

        <!-- Hero Image -->
        <div class="flex-1 relative flex justify-center">
          <div class="relative animate-float">
            <!-- Glow behind image -->
            <div class="absolute -inset-8 bg-primary/10 rounded-full blur-3xl"></div>
            <div class="absolute -inset-4 bg-gradient-to-b from-primary/15 via-transparent to-neon-dim/10 rounded-3xl blur-2xl"></div>

            <!-- Avatar image with styled frame -->
            <div class="relative">
              <div class="relative glass-card p-3 overflow-hidden rounded-2xl">
                <img
                  src="/images/hero-avatar.png"
                  alt="VRoid 3D AI Avatar - your living AI companion"
                  class="w-full max-w-sm h-auto rounded-xl"
                />
                <!-- Scan line overlay -->
                <div class="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                  <div class="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan"></div>
                </div>
              </div>

              <!-- Floating badge: LIVE 3D -->
              <div class="absolute -top-3 -right-3 glass-card neon-border px-3 py-1.5 flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span class="text-xs font-mono text-foreground">{{ $t('hero.live3d') }}</span>
              </div>

              <!-- Floating badge: AI Active -->
              <div class="absolute -bottom-3 -left-3 glass-card neon-border px-3 py-1.5 flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span class="text-xs font-mono neon-text">{{ $t('hero.aiActive') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-muted-foreground/40 text-[10px] font-mono uppercase tracking-widest">{{ $t('hero.scroll') }}</span>
      <svg class="w-4 h-4 text-muted-foreground/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M19 14l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
defineProps({
  isLoggedIn: Boolean,
})

defineEmits(['openAuth', 'tryDemo'])
</script>
