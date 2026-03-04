<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <div class="text-center">
      <div class="inline-flex items-center gap-2 mb-4">
        <div class="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        <span class="text-muted-foreground font-mono text-sm">{{ $t('redirect.status') }}</span>
      </div>
      <h1 class="text-2xl font-bold text-foreground mb-2">{{ $t('redirect.heading') }}</h1>
      <p class="text-muted-foreground">{{ $t('redirect.desc') }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  const appUrl = import.meta.env.VITE_APP_URL || 'https://aichat-tau-two.vercel.app/'
  setTimeout(() => {
    window.location.href = appUrl
  }, 1500)
})
</script>
