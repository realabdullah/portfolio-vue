<template>
  <Navbar />
  <AboutCard />
  <Sidebar />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AboutCard from '@/components/AboutCard.vue'

export default {
  components: {
    Navbar,
    AboutCard,
    Sidebar
  }
}
</script>

<style>

</style>
