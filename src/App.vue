<template>
  <div>
    <!-- <router-view v-slot="{ Component, route }">
      <transition 
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
</template>

<script>

export default {
}
</script>

<style>
.page {
  position: relative;
  top: 5px;
}

.fade-leave {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
