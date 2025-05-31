<template>
  <div>
    <header class="app-header">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink v-if="!authStore.user" to="/login">Login</NuxtLink>
      <NuxtLink v-if="authStore.user" to="/dashboard">Dashboard</NuxtLink>
      <button v-if="authStore.user" @click="logout">Logout</button>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

function logout() {
  authStore.logout()
}
</script>

<style scoped>
.app-header {
  background: #222;
  color: #fff;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
a {
  color: #fff;
  text-decoration: none;
}
main {
  padding: 2rem;
}
button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>
