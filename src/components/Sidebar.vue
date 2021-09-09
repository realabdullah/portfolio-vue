<template>
  <div v-if="!collapsed" class="sidebar" :style="{ width: sidebarWidth }">
    <!--<span v-if="!collapsed" class="collapse-icon" @click="toggleSidebar">
      open
    </span> -->
    <ul>
      <li class="list active">
        <a href="#">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="title">Home</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="reader-outline"></ion-icon>
          </span>
          <span class="title">About Me</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
          <span class="title">My Works</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </span>
          <span class="title">Contact Me</span>
        </a>
      </li>
    </ul>
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
.sidebar {
  color: #fff;
  background-color: #2b343b;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 0 10px #4187f6;
  border-right: 10px solid #2b343b;
}

.sidebar:hover {
  width: 300px;
}

.sidebar ul li {
  position: relative;
  list-style: none;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.sidebar ul .active {
  background: #4187f6;
}

.sidebar ul .list span {
  color: #fff;
}

.sidebar ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}

.sidebar ul .active a::before {
  content: '';
  position: absolute;
  top: -30px;
  left: 0;
  width: 30px;
  height: 30px;
  background: #2b343b;
  border-radius: 50%;
  box-shadow: -10px 15px 0 #4187f6;
}

.sidebar ul .active a::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 30px;
  height: 30px;
  background: #2b343b;
  border-radius: 50%;
  box-shadow: -10px -15px 0 #4187f6;
}

.sidebar ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
}

.sidebar ul li a .icon ion-icon {
  position: relative;
  font-size: 1.5em;
  z-index: 1;
}

.sidebar ul li a .title {
  position: relative;
  display: block;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}
</style>