<template>
  <nav>
    <div class="nav-one">
      <img src="../assets/avatar.svg" alt="avatar">
      <p>
        <span> &lt; </span>
          Abdullahi
        <span>/></span>
      </p>
    </div>
    <div @click="toggleSidebar" class="nav-two">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from '../components/state'

export default {
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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}

.nav-one {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-one img {
  border: 3px solid #6c63ff;
  padding: 3px;
  border-radius: 100%;
  width: 40px;  
  margin-right: 9px;
}

.nav-one p {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8em;
  color: #fff;
}
  
.nav-one span {
  color: #6c63ff;
}

.nav-two {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.nav-two div {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 3px 0;
}
</style>