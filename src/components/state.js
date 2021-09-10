import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const desktopNav = ref(false)
export const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}

export const toggledeskbar = () => {
  desktopNav.value = false
}

export const onDeskbar = () => {
  desktopNav.value = true
}

export const SIDEBAR_WIDTH = 200
export const SIDEBAR_WIDTH_COLLAPSED = 0
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
