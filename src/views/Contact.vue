<template>
  <div class="page">
    <Navbar />
    <ContactForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AboutCard from '@/components/AboutCard.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    Navbar,
    AboutCard,
    ContactForm
  }
}
</script>

<style>

</style>