<template>
  <section id="features" class="relative py-28">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-0 w-[600px] h-[300px] bg-primary/3 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border mb-6">
          <span class="text-xs font-mono text-primary tracking-wider uppercase">{{ $t('feature.badge') }}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
          {{ $t('feature.title1') }}<span class="neon-text">{{ $t('feature.titleAI') }}</span>
        </h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {{ $t('feature.desc') }}
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group glass-card p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-neon"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <component :is="feature.icon" />
          </div>

          <h3 class="text-lg font-bold text-foreground mb-3">{{ feature.title }}</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Feature Images -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="img in featureImages"
          :key="img.alt"
          class="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
        >
          <div class="relative overflow-hidden">
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-sm font-semibold text-foreground">{{ img.label }}</span>
              <p class="text-xs text-muted-foreground mt-1">{{ img.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const BrainIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M9.5 2A5.5 5.5 0 004 7.5c0 1.457.562 2.78 1.482 3.763A5.484 5.484 0 007 15.5V17h4v-1.5c0-1.42-.458-2.677-1.24-3.707A5.477 5.477 0 009.5 2z' }),
      h('path', { d: 'M14.5 2A5.5 5.5 0 0120 7.5c0 1.457-.562 2.78-1.482 3.763A5.484 5.484 0 0017 15.5V17h-4v-1.5c0-1.42.458-2.677 1.24-3.707A5.477 5.477 0 0014.5 2z' }),
      h('path', { d: 'M8 17v2a3 3 0 006 0v-2' }),
    ])
  }
}

const MicIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z' }),
      h('path', { d: 'M19 10v2a7 7 0 01-14 0v-2' }),
      h('path', { d: 'M12 19v4M8 23h8' }),
    ])
  }
}

const EyeIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
      h('circle', { cx: '12', cy: '12', r: '3' }),
    ])
  }
}

const ShieldIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
    ])
  }
}

const SparklesIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z' }),
      h('path', { d: 'M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z' }),
    ])
  }
}

const ZapIcon = {
  render() {
    return h('svg', { class: 'w-6 h-6 text-primary', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M13 2L3 14h9l-1 10 10-12h-9l1-10z' }),
    ])
  }
}

const features = computed(() => [
  {
    icon: BrainIcon,
    title: t('feature.feat1Title'),
    description: t('feature.feat1Desc'),
  },
  {
    icon: MicIcon,
    title: t('feature.feat2Title'),
    description: t('feature.feat2Desc'),
  },
  {
    icon: EyeIcon,
    title: t('feature.feat3Title'),
    description: t('feature.feat3Desc'),
  },
  {
    icon: SparklesIcon,
    title: t('feature.feat4Title'),
    description: t('feature.feat4Desc'),
  },
  {
    icon: ShieldIcon,
    title: t('feature.feat5Title'),
    description: t('feature.feat5Desc'),
  },
  {
    icon: ZapIcon,
    title: t('feature.feat6Title'),
    description: t('feature.feat6Desc'),
  },
])

const featureImages = computed(() => [
  { src: '/images/voice-chat.jpg', alt: 'Real-time voice chat interface with AI avatar', label: t('feature.img1Label'), desc: t('feature.img1Desc') },
  { src: '/images/screen-analysis.jpg', alt: 'AI screen analysis and sharing feature', label: t('feature.img2Label'), desc: t('feature.img2Desc') },
  { src: '/images/emotions.jpg', alt: 'Dynamic avatar expressions and emotions', label: t('feature.img3Label'), desc: t('feature.img3Desc') },
])
</script>
