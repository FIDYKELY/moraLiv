<template>
  <div>
    <header>
      <h1>MoraLiv</h1>

      <nav>
        <RouterLink to="/dashboard">Accueil</RouterLink>
        <button @click="handleLogout">Se déconnecter</button>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const handleLogout = async () => {
  const success = await auth.logout()
  if (success) {
    router.push('/login')
  }
}
</script>
