<template>
  <div class="relative inline-block text-left">
    <select
      v-model="$i18n.locale"
      class="bg-transparent text-white border border-white/20 rounded-md py-1 px-2 text-sm focus:outline-none focus:border-white/50"
    >
      <option class="bg-black text-white" value="en">English</option>
      <option class="bg-black text-white" value="ru">Русский</option>
      <option class="bg-black text-white" value="uz">O'zbekcha</option>
    </select>
  </div>
</template>

<script setup>
// The component simply binds a <select> to $i18n.locale
// which is globally provided by vue-i18n instance.
</script>
