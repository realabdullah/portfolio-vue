<template>
  <Navbar />
  <Sidebar />
  <WorkCard />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    WorkCard
  }
}
</script>

<style>

</style>