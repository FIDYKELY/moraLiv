<template>
  <div>
    <h1>Créer un compte</h1>

    <form @submit.prevent="handleRegister">
      <div>
        <label for="firstName">Prénom</label>
        <input id="firstName" v-model="firstName" type="text" required />
      </div>

      <div>
        <label for="lastName">Nom</label>
        <input id="lastName" v-model="lastName" type="text" required />
      </div>

      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input id="password" v-model="password" type="password" required />
      </div>

      <div>
        <label for="phone">Téléphone</label>
        <input id="phone" v-model="phone" type="tel" required />
      </div>

      <button type="submit" :disabled="auth.loading">
        {{ auth.loading ? 'Création...' : 'Créer mon compte' }}
      </button>
    </form>

    <p>
      Déjà un compte ?
      <RouterLink to="/login">Se connecter</RouterLink>
    </p>
    <p v-if="auth.error">
      {{ auth.error }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

const auth = useAuthStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')

const handleRegister = async () => {
  const success = await auth.register(
    firstName.value,
    lastName.value,
    email.value,
    password.value,
    phone.value,
  )

  if (success) {
    router.push('/login')
  }
}
</script>
