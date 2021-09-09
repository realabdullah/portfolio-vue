<template>
  <div v-if="!collapsed" class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar">
      open
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth
    }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: #1e1c1c;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}

.sidebar {
  color: #fff;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0.53em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
</style>