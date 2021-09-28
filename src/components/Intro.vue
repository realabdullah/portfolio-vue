<template>
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn">
    <i class="fas fa-bars"></i>
  </label>
  <div class="wrapper">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </div>
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

.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
 /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
  /* clip-path: circle(25px at calc(0% + 45px) 45px); */
  background: #000;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper{
  clip-path: circle(75%);
}
.menu-btn{
  position: absolute;
  z-index: 2;
  right: 20px;
  /* left: 20px; */
  top: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  /*background: linear-gradient(-135deg, #c850c0, #4158d0);*/
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
 /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
  background: #000;
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .menu-btn{
  color: #fff;
}
#active:checked ~ .menu-btn i:before{
  content: "\f00d";
}
.wrapper ul{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li{
  margin: 15px 0;
}
.wrapper ul li a{
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
}
.wrapper ul li a:after{
  position: absolute;
  content: "";
  background: #fff;
   background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  /*background: linear-gradient(375deg, #1cc7d0, #2ede98);*/
  width: 104%;
  height: 110%;
  left: -2%;
  top: -5%; /* if the font is 'Oswald'*/
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  animation: rotate 1.5s linear infinite;
  transition: transform 0.3s ease;
}
.wrapper ul li a:hover:after{
  transform: scaleY(1);
}
.wrapper ul li a:hover{
  color: #fff;
}
input[type="checkbox"]{
  display: none;
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