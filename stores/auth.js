import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),

  actions: {
    async login(credentials) {
      const { $axios } = useNuxtApp()
      const { data } = await $axios.post('/auth/login', credentials)

      this.token = data.token
      this.user = data.user
      localStorage.setItem('token', data.token)
    },

    async fetchUser() {
      const { $axios } = useNuxtApp()
      const { data } = await $axios.get('/auth/me')
      this.user = data
    },

    async logout() {
      const { $axios } = useNuxtApp()
      await $axios.post('/auth/logout')
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
