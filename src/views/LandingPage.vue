<template>
  <div>
    <NavBar
      :is-logged-in="isLoggedIn"
      :user-email="userEmail"
      @open-auth="showAuth = true"
      @logout="handleLogout"
      @try-demo="handleTryDemo"
    />
    <HeroSection :is-logged-in="isLoggedIn" @open-auth="showAuth = true" @try-demo="handleTryDemo" />
    <WhyBetterSection />
    <FeaturesSection />
    <PricingSection :is-logged-in="isLoggedIn" @open-auth="showAuth = true" @try-demo="handleTryDemo" />
    <DemoSection :is-logged-in="isLoggedIn" @open-auth="showAuth = true" @try-demo="handleTryDemo" />
    <FooterSection />
    <AuthModal
      :show="showAuth"
      @close="showAuth = false"
      @authenticated="onAuthenticated"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import WhyBetterSection from '@/components/WhyBetterSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import DemoSection from '@/components/DemoSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import AuthModal from '@/components/AuthModal.vue'

const showAuth = ref(false)
const isLoggedIn = ref(false)
const userEmail = ref('')

function checkAuth() {
  try {
    const user = JSON.parse(localStorage.getItem('quantum_current_user') || 'null')
    if (user && user.email) {
      isLoggedIn.value = true
      userEmail.value = user.email
    }
  } catch {
    isLoggedIn.value = false
  }
}

function onAuthenticated() {
  showAuth.value = false
  checkAuth()
}

function handleLogout() {
  localStorage.removeItem('quantum_current_user')
  isLoggedIn.value = false
  userEmail.value = ''
}

function handleTryDemo() {
  if (!isLoggedIn.value) {
    showAuth.value = true
    return
  }
  const appUrl = import.meta.env.VITE_APP_URL || 'https://aichat-tau-two.vercel.app/'
  window.open(appUrl, '_blank')
}

onMounted(checkAuth)
</script>
