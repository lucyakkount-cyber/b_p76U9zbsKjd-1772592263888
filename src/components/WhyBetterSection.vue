<template>
  <section id="why-better" class="relative py-28 overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
          <span class="text-xs font-mono text-red-400 tracking-wider uppercase font-bold">{{ $t('why.badge') }}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
          {{ $t('why.title1') }}<span class="line-through text-muted-foreground/50">{{ $t('why.titleBox') }}</span>{{ $t('why.title3') }}
          <span class="neon-text">{{ $t('why.titleAvatar') }}</span>?
        </h2>
        <p class="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          {{ $t('why.desc') }}
        </p>
      </div>

      <!-- Comparison Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        <!-- Old Way -->
        <div class="glass-card relative overflow-hidden border-red-500/20 group">
          <div class="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <!-- Fake Chat UI mockup -->
          <div class="p-4 border-b border-red-500/10">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg class="w-4 h-4 text-muted-foreground/50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div>
                <div class="text-xs font-mono text-red-400/80">{{ $t('whyMock.botType') }}</div>
                <div class="text-[10px] text-muted-foreground/40">{{ $t('whyMock.botInterface') }}</div>
              </div>
            </div>
          </div>
          <div class="p-4 space-y-3">
            <div class="flex gap-2">
              <div class="bg-muted/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]">
                <p class="text-xs text-muted-foreground/50 font-mono">{{ $t('whyMock.botMsg1') }}</p>
              </div>
            </div>
            <div class="flex gap-2 justify-end">
              <div class="bg-muted/20 rounded-lg rounded-tr-none px-3 py-2 max-w-[75%]">
                <p class="text-xs text-muted-foreground/30 font-mono">{{ $t('whyMock.userMsg') }}</p>
              </div>
            </div>
            <div class="flex gap-2">
              <div class="bg-muted/30 rounded-lg rounded-tl-none px-3 py-2 max-w-[85%]">
                <p class="text-xs text-muted-foreground/50 font-mono">{{ $t('whyMock.botMsg2') }}</p>
              </div>
            </div>
            <div class="h-px bg-red-500/10"></div>
            <div class="flex items-center gap-2 opacity-30">
              <div class="flex-1 h-8 rounded-lg bg-muted/20 border border-red-500/10"></div>
              <div class="w-8 h-8 rounded-lg bg-muted/20 border border-red-500/10"></div>
            </div>
          </div>

          <!-- Label + List -->
          <div class="p-6 pt-4 border-t border-red-500/10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-4">
              {{ $t('why.oldWayLabel') }}
            </div>
            <h3 class="text-lg font-bold text-foreground mb-4">{{ $t('why.oldWayTitle') }}</h3>
            <ul class="space-y-3">
              <li v-for="item in oldWay" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-red-400/50 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="text-xs text-muted-foreground leading-relaxed" v-html="item"></span>
              </li>
            </ul>
          </div>
        </div>

        <!-- New Way -->
        <div class="glass-card relative overflow-hidden neon-border group">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <!-- Fake 3D Avatar UI mockup -->
          <div class="p-4 border-b border-primary/20">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/></svg>
              </div>
              <div>
                <div class="text-xs font-mono neon-text">Quantum VRM</div>
                <div class="flex items-center gap-1.5">
                  <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span class="text-[10px] text-green-400/80">{{ $t('whyMock.vrmLive') }}</span>
                </div>
              </div>
              <div class="ml-auto flex items-center gap-1.5">
                <div class="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 12h.01"/></svg>
                </div>
                <div class="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 space-y-3">
            <!-- Avatar viewport mockup -->
            <div class="relative bg-background/50 rounded-xl border border-primary/10 overflow-hidden h-32 flex items-center justify-center">
              <div class="absolute inset-0 grid-bg opacity-30"></div>
              <div class="relative flex flex-col items-center gap-2">
                <div class="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src="/images/hero-avatar.png" :alt="$t('whyMock.vrmPreview')" class="w-full h-full object-cover scale-150 -translate-y-1" />
                </div>
                <span class="text-[10px] font-mono neon-text">{{ $t('whyMock.vrmActive') }}</span>
                <div class="flex items-center gap-3">
                  <span class="text-[9px] text-green-400/60 font-mono flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span> {{ $t('whyMock.vrmVoice') }}
                  </span>
                  <span class="text-[9px] text-amber-400/60 font-mono flex items-center gap-1">
                    <span class="w-1 h-1 rounded-full bg-amber-400 animate-pulse"></span> {{ $t('whyMock.vrmMood') }}
                  </span>
                </div>
              </div>
            </div>
            <!-- Audio bars -->
            <div class="flex items-end justify-center gap-0.5 h-5">
              <div v-for="i in 24" :key="i" class="w-0.5 bg-primary/30 rounded-full" :style="{ height: `${3 + Math.sin(i * 0.7) * 10 + Math.random() * 6}px` }"></div>
            </div>
          </div>

          <!-- Label + List -->
          <div class="p-6 pt-4 border-t border-primary/20">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-4">
              {{ $t('why.newWayLabel') }}
            </div>
            <h3 class="text-lg font-bold text-foreground mb-4">{{ $t('why.newWayTitle') }}</h3>
            <ul class="space-y-3">
              <li v-for="item in newWay" :key="item" class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-xs text-foreground leading-relaxed" v-html="item"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Advantages -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(advantage, idx) in advantages"
          :key="advantage.title"
          class="glass-card p-6 text-center hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 group"
        >
          <div class="text-4xl font-extrabold neon-text mb-3 group-hover:scale-110 transition-transform duration-300">{{ advantage.stat }}</div>
          <h4 class="text-sm font-bold text-foreground mb-2">{{ advantage.title }}</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">{{ advantage.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const oldWay = computed(() => [
  t('whyOldWay.item1'),
  t('whyOldWay.item2'),
  t('whyOldWay.item3'),
  t('whyOldWay.item4'),
  t('whyOldWay.item5'),
  t('whyOldWay.item6'),
  t('whyOldWay.item7'),
])

const newWay = computed(() => [
  t('whyNewWay.item1'),
  t('whyNewWay.item2'),
  t('whyNewWay.item3'),
  t('whyNewWay.item4'),
  t('whyNewWay.item5'),
  t('whyNewWay.item6'),
  t('whyNewWay.item7'),
])

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const advantages = computed(() => [
  {
    stat: '10x',
    title: t('why.adv1Title'),
    desc: t('why.adv1Desc'),
  },
  {
    stat: '3D',
    title: t('why.adv2Title'),
    desc: t('why.adv2Desc'),
  },
  {
    stat: 'Voice',
    title: t('why.adv3Title'),
    desc: t('why.adv3Desc'),
  },
  {
    stat: 'New',
    title: t('why.adv4Title'),
    desc: t('why.adv4Desc'),
  },
])
</script>
