<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      @click.self="$emit('close')"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      <!-- Modal -->
      <div class="relative w-full max-w-md glass-card neon-border p-8 animate-fade-up">
        <!-- Close -->
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-foreground">
            {{ isLogin ? $t('auth.welcome') : $t('auth.createTitle') }}
          </h2>
          <p class="text-muted-foreground text-sm mt-2">
            {{ isLogin ? $t('auth.descLogin') : $t('auth.descReg') }}
          </p>
        </div>

        <!-- Error message -->
        <div
          v-if="errorMsg"
          class="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
        >
          {{ errorMsg }}
        </div>

        <!-- Success message -->
        <div
          v-if="successMsg"
          class="mb-6 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
        >
          {{ successMsg }}
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-foreground mb-2">{{ $t('auth.emailLabel') }}</label>
            <div class="relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                :placeholder="$t('auth.emailPlaceholder')"
                class="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-foreground mb-2">{{ $t('auth.passLabel') }}</label>
            <div class="relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                minlength="6"
                :placeholder="$t('auth.passPlaceholder')"
                class="w-full pl-11 pr-12 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full flex items-center justify-center gap-2"
          >
            <svg v-if="loading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {{ loading ? $t('auth.processing') : (isLogin ? $t('auth.btnSign') : $t('auth.btnCreate')) }}
          </button>
        </form>

        <!-- Toggle mode -->
        <div class="text-center mt-6 pt-6 border-t border-border">
          <p class="text-muted-foreground text-sm">
            {{ isLogin ? $t('auth.noAccount') : $t('auth.hasAccount') }}
            <button
              @click="toggleMode"
              class="text-primary font-medium hover:underline ml-1"
            >
              {{ isLogin ? $t('auth.btnReg') : $t('auth.btnSign') }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close', 'authenticated'])

const { t } = useI18n()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

function toggleMode() {
  isLogin.value = !isLogin.value
  errorMsg.value = ''
  successMsg.value = ''
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('quantum_users') || '[]')
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem('quantum_users', JSON.stringify(users))
}

function setCurrentUser(user) {
  localStorage.setItem('quantum_current_user', JSON.stringify(user))
}

async function handleSubmit() {
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true

  // Simulate a brief delay
  await new Promise(resolve => setTimeout(resolve, 800))

  const users = getUsers()
  const existingUser = users.find(u => u.email === email.value)

  if (isLogin.value) {
    // Login
    if (!existingUser) {
      errorMsg.value = t('auth.errNoAccount')
      loading.value = false
      return
    }
    if (existingUser.password !== password.value) {
      errorMsg.value = t('auth.errPass')
      loading.value = false
      return
    }
    setCurrentUser({ email: existingUser.email, registered: true })
    successMsg.value = t('auth.succLogin')
    setTimeout(() => {
      email.value = ''
      password.value = ''
      emit('authenticated')
    }, 1000)
  } else {
    // Register
    if (existingUser) {
      errorMsg.value = t('auth.errExists')
      loading.value = false
      return
    }
    users.push({ email: email.value, password: password.value, registered: true, createdAt: new Date().toISOString() })
    saveUsers(users)
    setCurrentUser({ email: email.value, registered: true })
    successMsg.value = t('auth.succReg')
    setTimeout(() => {
      email.value = ''
      password.value = ''
      emit('authenticated')
    }, 1000)
  }

  loading.value = false
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
