<template>
  <div class="home">
    <Intro />
    <Sidebar />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import Sidebar from '@/components/Sidebar.vue'
import About from '@/views/About.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Sidebar,
    About
  }
}
</script>
