<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10 rounded-xl bg-card border border-neon/30 flex items-center justify-center overflow-hidden group-hover:shadow-neon transition-shadow duration-300">
          <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <div class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        </div>
        <div>
          <span class="text-foreground font-bold text-lg tracking-tight">Quantum</span>
          <span class="neon-text font-bold text-lg">VRM</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
        >
          {{ $t(link.labelKey) }}
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden md:flex items-center gap-3">
        <LanguageSwitcher />

        <!-- Logged OUT state -->
        <template v-if="!isLoggedIn">
          <button
            @click="$emit('openAuth')"
            class="btn-secondary text-xs px-5 py-2.5"
          >
            {{ $t('nav.signIn') }}
          </button>
          <button
            @click="$emit('tryDemo')"
            class="btn-primary text-xs px-5 py-2.5"
          >
            {{ $t('nav.tryDemo') }}
          </button>
        </template>

        <!-- Logged IN state -->
        <template v-else>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
              <div class="w-2 h-2 rounded-full bg-green-400"></div>
              <span class="text-xs font-mono text-muted-foreground truncate max-w-[140px]">{{ userEmail }}</span>
            </div>
            <button
              @click="$emit('tryDemo')"
              class="btn-primary text-xs px-5 py-2.5"
            >
              {{ $t('nav.launchDemo') }}
            </button>
            <button
              @click="$emit('logout')"
              class="text-muted-foreground hover:text-red-400 text-xs font-medium transition-colors"
            >
              {{ $t('nav.logout') }}
            </button>
          </div>
        </template>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary transition-colors"
      >
        <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileOpen" class="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 py-4">
        <div class="flex flex-col gap-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-muted-foreground hover:text-primary text-sm font-medium py-2 transition-colors"
            @click="mobileOpen = false"
          >
            {{ $t(link.labelKey) }}
          </a>
          <div class="flex flex-col gap-2 pt-3 border-t border-border">
            <div class="py-2">
              <LanguageSwitcher />
            </div>
            <template v-if="!isLoggedIn">
              <button @click="$emit('openAuth'); mobileOpen = false" class="btn-secondary text-xs py-2.5">{{ $t('nav.signIn') }}</button>
              <button @click="$emit('tryDemo'); mobileOpen = false" class="btn-primary text-xs py-2.5">{{ $t('nav.tryDemo') }}</button>
            </template>
            <template v-else>
              <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border">
                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                <span class="text-xs font-mono text-muted-foreground truncate">{{ userEmail }}</span>
              </div>
              <button @click="$emit('tryDemo'); mobileOpen = false" class="btn-primary text-xs py-2.5">{{ $t('nav.launchDemo') }}</button>
              <button @click="$emit('logout'); mobileOpen = false" class="text-muted-foreground hover:text-red-400 text-xs font-medium py-2 transition-colors">{{ $t('nav.logout') }}</button>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

defineProps({
  isLoggedIn: Boolean,
  userEmail: String,
})

defineEmits(['openAuth', 'logout', 'tryDemo'])

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { labelKey: 'nav.whyUs', href: '#why-better' },
  { labelKey: 'nav.features', href: '#features' },
  { labelKey: 'nav.pricing', href: '#pricing' },
  { labelKey: 'nav.demo', href: '#demo' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
