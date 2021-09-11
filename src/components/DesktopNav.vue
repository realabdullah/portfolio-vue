<template>
  <div class="desk-nav">
    <ul>
      <li class="list">
        <router-link @click="toggledeskbar" to="/" active-class="active">
          <span class="icon">
            <ion-icon name="home-outline"></ion-icon>
          </span>
          <span class="title">Home</span>
        </router-link>
      </li>
      <li class="list">
        <router-link to="/about" active-class="active">
          <span class="icon">
            <ion-icon name="reader-outline"></ion-icon>
          </span>
          <span class="title">About Me</span>
        </router-link>
      </li>
      <li class="list">
        <router-link to="/works" active-class="active">
          <span class="icon">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
          <span class="title">My Works</span>
        </router-link>
      </li>
      <li class="list">
        <router-link to="/contact-me" active-class="active">
          <span class="icon">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </span>
          <span class="title">Contact Me</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { toggledeskbar, desktopNav } from './state'

export default {
  setup() {
    return {
      desktopNav,
      toggledeskbar
    }
  }
}
</script>

<style>
@media(max-width: 799px) {
  .desk-nav {
    display: none;
  }
}

@media(min-width: 800px) {
  .desk-nav {
    color: #fff;
    background-color: #101011;
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 40px;
  }

  .desk-nav ul li {
    position: relative;
    list-style: none;
    width: 100%;
  }

  .desk-nav ul .active {
    background: #777778;
    border-radius: 20px;
  }

  .desk-nav ul .list span {
    color: #fff;
  }

  .desk-nav ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }

  .desk-nav ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
  }

  .desk-nav ul li a .icon ion-icon {
    position: relative;
    font-size: 1.5em;
    z-index: 1;
  }

  .desk-nav ul li a .title {
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
  }
}
</style>