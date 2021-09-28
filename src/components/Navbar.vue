<template>
  <nav>
    <div class="nav-one">
      <router-link @click="toggledeskbar" to="/" active-class="active">
        <img src="../assets/abdvector.svg" alt="avatar">
        <p>
          <span> &lt; </span>
            Abdullahi
          <span>/></span>
        </p>
      </router-link>
    </div>
    <div @click="toggleSidebar" class="nav-two">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/" active-class="active" @click="toggleSidebar">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" active-class="active" @click="toggleSidebar">
            About Me
          </router-link>
        </li>
        <li>
          <router-link to="/works" active-class="active" @click="toggleSidebar">
            My Works
          </router-link>
        </li>
        <li>
          <router-link to="/contact-me" active-class="active" @click="toggleSidebar">
            Contact Me
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth, toggledeskbar, desktopNav } from '../components/state'

export default {
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      toggledeskbar,
      desktopNav
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
  padding: 30px 60px;
}

.nav-one a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-one a img {
  border: 3px solid #777778;
  padding: 3px;
  border-radius: 100%;
  width: 40px;  
  margin-right: 9px;
}

.nav-one a p {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8em;
  color: #fff;
}
  
.nav-one a span {
  color: #777778;
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

.navbar ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar ul li {
  margin-right: 15px;
}

.navbar ul li a {
  color: #fff;
  text-decoration: none;
}

.active {
  color: #777778;
  border-bottom: 3px solid #777778;
}

@media(min-width: 800px) {
  .nav-two {
    display: none;
  }

  .navbar {
    display: flex;
  }
}

@media(max-width: 799px) {
  .navbar {
    display: none;
  }
}
</style>