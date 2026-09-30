import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }),

  getters: {},

  actions: {
    async fetchMe() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get('/api/auth/me', {
          withCredentials: true,
        })

        this.user = response.data
        this.isAuthenticated = true
      } catch (error) {
        console.error('Erreur fetchMe:', error)

        this.user = null
        this.isAuthenticated = false

        this.error = error.response?.data?.message || 'Impossible de récupérer votre session'
      } finally {
        this.loading = false
      }
    },

    async login(email, password) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.post(
          '/api/auth/login',
          {
            email,
            password,
          },
          {
            withCredentials: true,
          },
        )

        this.user = response.data
        this.isAuthenticated = true

        return true
      } catch (error) {
        console.error('Erreur login:', error)

        this.user = null
        this.isAuthenticated = false

        this.error = error.response?.data?.message || 'Une erreur est survenue lors de la connexion'

        return false
      } finally {
        this.loading = false
      }
    },

    async register(firstName, lastName, email, password, phone) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.post('/api/auth/register', {
          firstName,
          lastName,
          email,
          password,
          phone,
        })

        this.user = response.data

        return true
      } catch (error) {
        console.error('Erreur register:', error)

        this.user = null
        this.isAuthenticated = false

        this.error =
          error.response?.data?.message || "Une erreur est survenue lors de l'inscription"

        return false
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.loading = true
      this.error = null

      try {
        await axios.post('/api/auth/logout', {}, { withCredentials: true })
        this.user = null
        this.isAuthenticated = false

        return true
      } catch (error) {
        console.error('Erreur logout:', error)

        this.error =
          error.response?.data?.message || 'Une erreur est survenue lors de la déconnexion'
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
