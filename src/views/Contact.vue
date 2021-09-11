<template>
  <div class="page">
    <Navbar />
    <Sidebar />
    <ContactForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AboutCard from '@/components/AboutCard.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    Navbar,
    AboutCard,
    Sidebar,
    ContactForm
  }
}
</script>

<style>

</style>