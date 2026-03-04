<template>
  <section id="pricing" class="relative py-28">
    <!-- Ambient glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border mb-6">
          <span class="text-xs font-mono text-primary tracking-wider uppercase">{{ $t('pricing.badge') }}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
          {{ $t('pricing.title1') }}<span class="neon-text">{{ $t('pricing.titleLevel') }}</span>
        </h2>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {{ $t('pricing.desc') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!-- Standard Plan -->
        <div class="glass-card p-8 flex flex-col relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/3 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

          <div class="mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-mono text-muted-foreground mb-4">
              {{ $t('pricing.stdTier') }}
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">Standard</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-extrabold text-foreground">$0</span>
              <span class="text-muted-foreground">{{ $t('pricing.forever') }}</span>
            </div>
            <p class="text-muted-foreground text-xs mt-2">{{ $t('pricing.freeTrial') }}</p>
          </div>

          <ul class="flex-1 space-y-4 mb-8">
            <li v-for="item in standardFeatures" :key="item.text" class="flex items-start gap-3">
              <svg v-if="item.included" class="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-5 h-5 text-red-400/40 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-sm" :class="item.included ? 'text-muted-foreground' : 'text-muted-foreground/40 line-through'">{{ item.text }}</span>
            </li>
          </ul>

          <button @click="handleAction" class="btn-secondary w-full">
            {{ $t('pricing.btnFree') }}
          </button>
        </div>

        <!-- Pro Plan -->
        <div class="relative glass-card p-8 flex flex-col neon-border overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

          <!-- Popular badge -->
          <div class="absolute top-6 right-6">
            <div class="px-3 py-1 rounded-full bg-primary/20 border border-primary/40">
              <span class="text-xs font-semibold text-primary">{{ $t('pricing.proPopular') }}</span>
            </div>
          </div>

          <div class="mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-4">
              {{ $t('pricing.proTier') }}
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">Pro</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-extrabold neon-text">$4.99</span>
              <span class="text-muted-foreground">{{ $t('pricing.month') }}</span>
            </div>
            <p class="text-muted-foreground text-xs mt-2">{{ $t('pricing.proSubtitle') }}</p>
          </div>

          <ul class="flex-1 space-y-4 mb-8">
            <li v-for="item in proFeatures" :key="item.text" class="flex items-start gap-3">
              <svg v-if="item.included" class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-5 h-5 text-red-400/40 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-sm" :class="item.included ? 'text-foreground' : 'text-muted-foreground/40 line-through'">{{ item.text }}</span>
            </li>
          </ul>

          <button @click="handleAction" class="btn-primary w-full">
            {{ $t('pricing.btnPro') }}
          </button>
        </div>

        <!-- Plus Plan -->
        <div class="relative glass-card p-8 flex flex-col overflow-hidden border-yellow-500/30">
          <div class="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

          <!-- Ultimate badge -->
          <div class="absolute top-6 right-6">
            <div class="px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40">
              <span class="text-xs font-semibold text-yellow-400">{{ $t('pricing.plusUltimate') }}</span>
            </div>
          </div>

          <div class="mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs font-mono text-yellow-400 mb-4">
              {{ $t('pricing.plusTier') }}
            </div>
            <h3 class="text-2xl font-bold text-foreground mb-2">Plus</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-extrabold text-yellow-400" style="text-shadow: 0 0 10px rgba(250, 204, 21, 0.5), 0 0 20px rgba(250, 204, 21, 0.2);">$9.99</span>
              <span class="text-muted-foreground">{{ $t('pricing.month') }}</span>
            </div>
            <p class="text-muted-foreground text-xs mt-2">{{ $t('pricing.plusSubtitle') }}</p>
          </div>

          <ul class="flex-1 space-y-4 mb-8">
            <li v-for="item in plusFeatures" :key="item" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-foreground">{{ item }}</span>
            </li>
          </ul>

          <button @click="handleAction" class="w-full relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-sm rounded-xl transition-all duration-300 border-0" style="background: linear-gradient(135deg, #facc15, #a16207); color: #070b14; box-shadow: 0 0 20px rgba(250, 204, 21, 0.3);">
            {{ $t('pricing.btnPlus') }}
          </button>
        </div>
      </div>

      <!-- Comparison note -->
      <div class="text-center mt-16">
        <p class="text-muted-foreground text-sm mb-2">
          {{ $t('pricing.note1') }}
        </p>
        <p class="text-muted-foreground text-xs">
          <span class="text-primary">Pro</span>{{ $t('pricing.note2_1') }}
          <span class="text-yellow-400">Plus</span>{{ $t('pricing.note2_2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isLoggedIn: Boolean,
})

const emit = defineEmits(['openAuth', 'tryDemo'])

function handleAction() {
  emit('tryDemo')
}

const { t } = useI18n()

const standardFeatures = computed(() => [
  { text: t('pricing.stdFeat1'), included: true },
  { text: t('pricing.stdFeat2'), included: true },
  { text: t('pricing.stdFeat3'), included: true },
  { text: t('pricing.stdFeat4'), included: true },
  { text: t('pricing.stdFeat5'), included: false },
  { text: t('pricing.stdFeat6'), included: false },
  { text: t('pricing.stdFeat7'), included: false },
  { text: t('pricing.stdFeat8'), included: false },
  { text: t('pricing.stdFeat9'), included: false },
  { text: t('pricing.stdFeat10'), included: false },
])

const proFeatures = computed(() => [
  { text: t('pricing.proFeat1'), included: true },
  { text: t('pricing.proFeat2'), included: true },
  { text: t('pricing.proFeat3'), included: true },
  { text: t('pricing.proFeat4'), included: true },
  { text: t('pricing.proFeat5'), included: true },
  { text: t('pricing.proFeat6'), included: true },
  { text: t('pricing.proFeat7'), included: true },
  { text: t('pricing.proFeat8'), included: false },
  { text: t('pricing.proFeat9'), included: false },
  { text: t('pricing.proFeat10'), included: false },
])

const plusFeatures = computed(() => [
  t('pricing.plusFeat1'),
  t('pricing.plusFeat2'),
  t('pricing.plusFeat3'),
  t('pricing.plusFeat4'),
  t('pricing.plusFeat5'),
  t('pricing.plusFeat6'),
  t('pricing.plusFeat7'),
  t('pricing.plusFeat8'),
  t('pricing.plusFeat9'),
  t('pricing.plusFeat10'),
])
</script>
