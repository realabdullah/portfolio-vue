<template>
  <section class="ppage">
    <div class="intro hero">
      <div class="one">
        <!--<img src="../assets/abdd.svg" class="pulse" alt="abd">-->
        <img src="../assets/abdvector.svg" alt="abdavatar">
        <p>
          <span> &lt; </span>
            Welcome!
          <span>/></span>
        </p>
      </div>
      <v-typical
        class="blink"
        :steps="['I am Abdullahi. 👋', 1000, 'I am a frontend developer. 😇', 500, 'I love writing codes. ✍️', 1000]"
        :loop="Infinity"
        :wrapper="'h2'"
      ></v-typical>
      <div class="socials">
        <li>
          <a href="https://github.com/realabdullah">
            <img src="../assets/github.svg" alt="github">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RealAbd__">
            <img src="../assets/twitter.svg" alt="twitter">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/odesanmiabdullahi">
            <img src="../assets/linkedin.svg" alt="linkedin">
          </a>
        </li>
      </div>
      <button class="explore" @click="toggleSidebar">
        Explore
      </button>
      <router-link to="/works" class="desk-explore" active-class="active">
        <button @click="onDeskbar">
          Explore
        </button>
      </router-link>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
  </section>
</template>

<script>
import VTypical from 'vue-typical'
import { collapsed, toggleSidebar, onDeskbar, sidebarWidth, desktopNav } from './state'

export default {
  components: {
    VTypical
  },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      desktopNav,
      onDeskbar
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #101011;
  color: #fff;
}

.section {
  position: relative;
}

.intro {
  padding: 0 30px;
  /*position: absolute;
  top: 50%;
  transform: translate(0, -50%)*/
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  min-height: 100vh;
  z-index: 1;
}

.one {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.one img {
  border: 3px solid #777778;
  padding: 3px;
  border-radius: 100%;
  width: 100px;  
  height: 100px;
  margin-left: 7px;
  margin-bottom: 20px;
}

.pulse {
  border: 3px solid #777778;
  padding: 3px;
  border-radius: 100%;
  width: 56px;
  margin-right: 12px;
  margin-bottom: 20px;
}
  
.one p {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8em;
  color: #fff;
}
  
span {
  color: #777778;
}

.blink {
  margin-left: 10px;
  margin-top: 20px;
  color: #fff;
}

.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

button {
  padding: 10px 20px;
  color: #fff;
  background: #2b343b;
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: 800;
}

button:hover {
  background: #777778;
  cursor: pointer;
  transition: 0.5s ease;
}

.desk-explore {
  display: none;
}

.socials {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.socials li {
  list-style-type: none;
  padding: 10px;
}

.socials li img {
  width: 30px;
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #777778;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
  z-index: -99;
}
 .cube:nth-child(2n) {
  border-color: #777778;
}
 .cube:nth-child(2) {
  animation-delay: 0.3s;
  left: 25vw;
  top: 40vh;
}
 .cube:nth-child(3) {
  animation-delay: 0.4s;
  left: 75vw;
  top: 50vh;
}
 .cube:nth-child(4) {
  animation-delay: 0.6s;
  left: 90vw;
  top: 10vh;
}
 .cube:nth-child(5) {
  animation-delay: 0.8s;
  left: 10vw;
  top: 85vh;
}
 .cube:nth-child(6) {
  animation-delay: 1s;
  left: 50vw;
  top: 10vh;
}
 @keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
	}
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
	}
}

@media(min-width: 800px) {
  .explore {
    display: none;
  }

  .intro {
    align-items: center;
    padding: 0 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .one {
    align-items:  center;
  }

  .one img {
    padding: 5px;
    width: 200px;  
    height: 200px;
    margin-left: 2px;
    margin-bottom: 40px;
  }

  .desk-explore {
    display: block;
  }
}
</style>