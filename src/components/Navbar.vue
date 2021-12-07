<template>
  <nav>
    <div class="nav-one">
      <router-link to="/" active-class="active">
        <p>
          <span> &lt; </span>
            Abdullahi
          <span>/></span>
        </p>
      </router-link>
    </div>
    <input type="checkbox" class="menu" id="active">
    <label for="active" class="menu-btn menu">
      <div class="hamburger">
        <div class="onee"></div>
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
    <div class="navbar">
      <ul class="underline-indicators">
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
  </nav>
</template>

<script>

export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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

.underline-indicators > * {
  cursor: pointer;
  padding: var(--underline-gap, .5rem) 0;
  border: 0;
  border-bottom: .2rem solid hsl(0 0% 100% / 0);
  background-color: transparent;
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
  border-color: hsl(0 0% 100% / 0.5);
}

.underline-indicators > .active,
.underline-indicators > [aria-selected="true"] {
  color: hsl(0 0% 100%  / 1);
  border-color: hsl(0 0% 100%  / 1);
}

.navbar ul li {
  margin-right: 2rem;
  padding: var(--underline-gap, 1.5rem) 0;
}

.navbar ul li a {
  letter-spacing: .05rem;
  color: #fff;
  text-decoration: none;
}

.active {
  padding: var(--underline-gap, 1.5rem) 0;
  border: 0;
  border-bottom: .2rem solid hsl(0 0% 100% / 0);
  border-color: hsl(0 0% 100% / 0.5);
}

@media(min-width: 800px) {
  .nav-two {
    display: none;
  }

  .navbar {
    display: flex;
    gap: clamp(1.5rem, 5vw, 3.5rem);
    background: hsl(0 0% 100% / 0.05);
    backdrop-filter: blur(1.3rem);
    padding-inline: clamp(3rem, 7vw, 7rem);
    border-radius: 5px;
    animation: myAnim 1s ease 0s 1 normal forwards;
  }

  @keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateX(250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
}

@media(max-width: 799px) {
  .navbar {
    display: none;
  }
}
</style>