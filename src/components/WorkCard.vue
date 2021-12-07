<template>
  <ul class="tilesWrap">
    <li>
      <h2>ChatAway</h2>
      <p>
        A chat room webApp developed with vueJs to connect and meet new people.
      </p>
      <div class="links">
        <a href="https://chat-away-jet.vercel.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/chat-away" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>Check-it</h2>
      <p>
        You've got couple of things to do? Use Check-it! and keep track of your todos. Created with VueJS.
      </p>
      <div class="links">
        <a href="https://check-itt.netlify.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/todo-raw-vuefolder" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>Covid Stat</h2>
      <p>
        It was really a very tough and challenging time, the pandemic. This webApp was created to keep track of
        all cases update realtime.
      </p>
      <div class="links">
        <a href="https://covidstatsbyabd.netlify.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/covid-stat" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>Shop Easy</h2>
      <p>
        An e-commerce website built with vueJs, Vuex, Composition API. The project uses an headless content management service, Supabase as backend.
      </p>
      <div class="links">
        <a href="http://shop-easy.vercel.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/shop-easy" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>URL Shortener</h2>
      <p>
        A web service that helps you shorten your elongated and messy links.
      </p>
      <div class="links">
        <a href="https://url-shortener-flax.vercel.app" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/url-shortener" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>IP Address Tracker</h2>
      <p>
        A webApp that provides you with details of your IP address such as location, Internet service provider and so on.
      </p>
      <div class="links">
        <a href="https://ip-tracker-eight-tawny.vercel.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/ip-tracker" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>Network List</h2>
      <p>
        A webapp that takes inputs; Network names, address, host number, and subnetwork number, then stores them to a firebase realtime database and displays the populated database back out in a table format.
      </p>
      <div class="links">
        <a href="https://network-registers.vercel.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/ip-tracker" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
    <li>
      <h2>Space Travel</h2>
      <p>
        A space travel website built using a custom design system. It is accessible to all, even users that uses screen reader. Built majorly with CSS and HTML with a sprinkle of JavaScript.
      </p>
      <div class="links">
        <a href="http://space-tourism-beta.vercel.app/" target="_blank" rel="noopener">
          <ion-icon name="link"></ion-icon>
        </a>
        <a href="https://github.com/realabdullah/space-tourism" target="_blank" rel="noopener">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
.tilesWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  animation: myAnim 1s ease 0s 1 normal forwards;
}

@keyframes myAnim {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

.tilesWrap li {
	display: inline-block;
  width: 100%;
  padding: 60px 40px;
  padding-bottom: 40px;
  margin: 15px;
  background: #262a2b;
  border: 1px solid #252727;
  text-align: left;
  border-radius: 3px;
  box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.3);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.tilesWrap li:hover {
  background: #1c1e1f;
  border-radius: 10px;
  transition: .3s all ease-in-out;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.tilesWrap p {
  margin: 20px 0;
}

.links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}

.links a {
  text-decoration: none;
  color: #fff;
  margin-right: 35px;
}

.links a ion-icon {
  font-size: 1.8em;
}

@media(min-width: 700px) {
  .tilesWrap {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
  }

  .tilesWrap li {
    flex: 1;
  }
}  
</style>