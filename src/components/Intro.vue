<template>
  <input type="checkbox" class="menu" id="active">
  <label for="active" class="menu-btn menu">
    <div class="hamburger">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
    </div>
  </label>
  <div class="wrapper">
    <ul>
      <li>
        <router-link to="/" active-class="active">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about" active-class="active">
          About Me
        </router-link>
      </li>
      <li>
        <router-link to="/works" active-class="active">
          My Works
        </router-link>
      </li>
      <li>
        <router-link to="/contact-me" active-class="active">
          Contact Me
        </router-link>
      </li>
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
        :steps="['Abdullahi here. 👋', 1000, 'I am a frontend developer. 😇', 500, 'I love writing codes. ✍️', 1000]"
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
          <a href="https://twitter.com/_devabd">
            <img src="../assets/twitter.svg" alt="twitter">
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/odesanmiabdullahi">
            <img src="../assets/linkedin.svg" alt="linkedin">
          </a>
        </li>
      </div>
      <router-link to="/works" class="desk-explore" active-class="active">
        <button>
          Explore
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
import VTypical from 'vue-typical'

export default {
  components: {
    VTypical
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
  z-index: -1;
}

.intro {
  padding: 0 30px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  animation: myAnim 2s ease 0s 1 normal forwards;
  /* display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  min-height: 100vh; */
}

@keyframes myAnim {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
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
  filter: drop-shadow(5px 5px 10px rgba(151, 147, 147, 0.178));
  animation: imgrotate 1s ease 0s 1 normal forwards;
}

@keyframes imgrotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
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
  background: hsl(0 0% 100% / 0.05);
  backdrop-filter: blur(1.3rem);
  clip-path: circle(0px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
  z-index: 2;
  text-align: center;
}

#active:checked ~ .wrapper{
  clip-path: circle(75%);
  text-align: center;
}

.hamburger {
  /* margin-left: auto; 
  margin-right: 0; */
  margin: 25px 23px 0 auto;
  width: 30px;
  height: 30px;
  position: relative;
}

.hamburger div {
  padding: 0;
  height: 4px;
  background-color: #ffffff;
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute; 
}

.one {
  width: 1.8rem;
  top: 0;
}

.two { 
  width: 1.3rem; 
  top: 13.5px;
}

.three { 
  width: 1.3rem; 
  top: 13.5px;
  left: 0;
}

.four {
  width: 1.8rem;
  bottom: 0;
}

.menu-btn:hover div { 
  width: 2.3rem;
}

.menu:checked + label > .hamburger > .one{
  transform: rotate(45deg);
  transform-origin: 5%;
  width: 41px;
  z-index: 333;
}

.menu:checked + label > .hamburger > .two {
  transform: translateX(-40px);
  background-color: transparent;
  z-index: 333;
}

.menu:checked + label > .hamburger > .three {
  transform: translateX(20px);
  background-color: transparent;
  z-index: 333;
}

.menu:checked + label > .hamburger > .four {
  transform-origin: 5%;
  transform: rotate(-45deg);
  width: 41px;
  z-index: 333;
}

#active:checked ~ .menu-btn{
  color: #fff;
  z-index: 3;
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
  text-align: center;
}

.wrapper ul li a{
  color: none;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  /* position: relative; */
  line-height: 3rem;
  transition: all 0.3s ease;
  text-align: center;
}

.wrapper ul li a:after{
  position: absolute;
  content: "";
  background: #fff;
  width: 104%;
  height: 110%;
  left: -2%;
  top: -5%;
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

@keyframes rotate {
  0%{
    filter: hue-rotate(0deg);
  }
  100%{
    filter: hue-rotate(360deg);
  }
}

@media(min-width: 800px) {
  .menu {
    display: none;
  }

  .explore {
    display: none;
  }

  .intro {
    height: 100vh;
    padding: 0 70px;
    position: unset;
    margin: auto;
    transform: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
