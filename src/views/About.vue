<template>
  <div class="page">
    <Navbar />
    <AboutCard />
    <Sidebar />
  </div>
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
