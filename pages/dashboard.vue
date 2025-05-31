<template>
  <div class="dashboard">
    <h1>Welcome, {{ authStore.user?.name }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()

const logout = async () => {
  await authStore.logout()
  await navigateTo('/login')
}
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 50px;
}
</style>
