<template>
  <div class="home">
    <Intro />
    <Sidebar />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Sidebar
  }
}
</script>
