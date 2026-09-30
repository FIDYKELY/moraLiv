<template>
  <div>
    <h2>Bienvenue sur MoraLiv</h2>

    <p v-if="auth.user">Bonjour {{ auth.user.email }}</p>
    <p>Vous êtes connecté en tant que : {{ auth.user?.role }}</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>
