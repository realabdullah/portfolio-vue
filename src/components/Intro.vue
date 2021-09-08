<template>
  <section>
    <div class="intro">
      <div class="one">
        <img src="../assets/abdd.svg" class="pulse" alt="abd">
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
          <a href="https://twitter.com/RealAbd__">
            <img src="../assets/linkedin.svg" alt="linkedin">
          </a>
        </li>
      </div>
      <button>
        Explore
      </button>
    </div>
  </section>
</template>

<script>
import VTypical from 'vue-typical';

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
  background-color: #02030d;
  color: #fff;
}

.section {
  position: relative;
}

.intro {
  padding: 0 30px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%)
}

.one {
  display: flex;
  align-items: center;
}
  
.pulse {
  border: 3px solid #ffb800;
  padding: 3px;
  border-radius: 100%;
  width: 56px;
  margin-right: 12px;
}
  
p {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8em;
  color: #fff;
}
  
span {
  color: #ffb800;
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
  background: #1e1c1c;
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: 800;
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
</style>