<template>
  <div>
    <h1>Connexion</h1>

    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input id="password" v-model="password" type="password" required />
      </div>

      <button type="submit" :disabled="auth.loading">
        {{ auth.loading ? 'Connexion...' : 'Se connecter' }}
      </button>
    </form>

    <p v-if="auth.error">
      {{ auth.error }}
    </p>
    <p>
      Pas encore de compte ?
      <RouterLink to="/register">Créer un compte</RouterLink>
    </p>

    <p v-if="auth.isAuthenticated">Connecté en tant que {{ auth.user.email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'
import router from '@/router'

const auth = useAuthStore()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  const success = await auth.login(email.value, password.value)

  if (success) {
    router.push('/dashboard')
  }
}
</script>
