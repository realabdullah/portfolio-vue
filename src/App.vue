<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition 
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
  <DesktopNav v-if="desktopNav" />
</template>

<script>
import { desktopNav } from './components/state'
import DesktopNav from '@/components/DesktopNav.vue'

export default {
  components: {
    DesktopNav
  },
  setup() {
    return { desktopNav }
  }
}
</script>

<style>
@media(min-width: 800px) {
  .page {
      margin-right: 200px;
  }
}
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
