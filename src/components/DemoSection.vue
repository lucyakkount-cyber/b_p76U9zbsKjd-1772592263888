<template>
  <section id="demo" class="relative py-28">
    <div class="max-w-7xl mx-auto px-6">
      <div class="glass-card p-10 md:p-16 relative overflow-hidden">
        <!-- Ambient -->
        <div class="absolute top-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-neon-dim/5 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-6">
              {{ $t('demo.badge') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4 text-balance">
              {{ $t('demo.title1') }}<span class="neon-text">{{ $t('demo.titleAI') }}</span>{{ $t('demo.titleEnd') }}
            </h2>
            <p class="text-muted-foreground text-lg leading-relaxed mb-4 max-w-lg">
              {{ $t('demo.desc') }}
            </p>

            <!-- Auth required hint -->
            <p v-if="!isLoggedIn" class="text-yellow-400/80 text-sm mb-8 flex items-center gap-2 justify-center lg:justify-start">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ $t('demo.authHint') }}
            </p>
            <p v-else class="text-green-400/80 text-sm mb-8 flex items-center gap-2 justify-center lg:justify-start">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('demo.loggedIn') }}
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button @click="$emit('tryDemo')" class="btn-primary w-full sm:w-auto">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ isLoggedIn ? $t('demo.btnLaunch') : $t('demo.btnSign') }}
              </button>
              <a
                href="https://aichat-tau-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary w-full sm:w-auto"
              >
                {{ $t('demo.btnLive') }}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Mock terminal / preview -->
          <div class="flex-1 max-w-md w-full">
            <div class="rounded-xl bg-background border border-border overflow-hidden shadow-glass">
              <!-- Terminal header -->
              <div class="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
                <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
                <span class="text-xs font-mono text-muted-foreground ml-3">quantum-vrm ~ session</span>
              </div>
              <!-- Terminal content -->
              <div class="p-5 font-mono text-xs space-y-2.5">
                <div class="flex items-center gap-2">
                  <span class="text-primary">$</span>
                  <span class="text-foreground">quantum init --mode voice</span>
                </div>
                <div class="text-muted-foreground/60">Loading VRoid 3D model...</div>
                <div class="text-muted-foreground/60">Initializing Neural Persona Engine...</div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400">&#x2713;</span>
                  <span class="text-foreground">{{ $t('demo.boot1') }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400">&#x2713;</span>
                  <span class="text-foreground">{{ $t('demo.boot2') }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400">&#x2713;</span>
                  <span class="text-foreground">{{ $t('demo.boot3') }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400">&#x2713;</span>
                  <span class="text-foreground">{{ $t('demo.boot4') }}</span>
                </div>
                <div class="mt-3 pt-3 border-t border-border">
                  <div class="flex items-center gap-2">
                    <span class="text-primary font-semibold">{{ $t('demo.bootLabel') }}</span>
                    <span class="text-foreground/50">&gt;</span>
                    <span class="text-foreground">Hey! Ready to see something new?</span>
                    <span class="inline-block w-1.5 h-4 bg-primary animate-pulse ml-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  isLoggedIn: Boolean,
})

defineEmits(['openAuth', 'tryDemo'])
</script>
