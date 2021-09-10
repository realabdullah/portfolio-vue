<template>
  <ul class="desk-tiles">
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
  </ul>
</template>

<script>
export default {

}
</script>

<style>
@media(max-width: 799px) {
  .desk-tiles {
    display: none;
  }
}
.desk-tiles {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  padding: 20px 50px;
}

.desk-tiles li {
  display: inline-block;
  width: 100%;
  padding: 60px 40px;
  padding-bottom: 40px;
  margin: 15px;
  background: #262a2b;
  border: 1px solid #252727;
  text-align: left;
  border-radius: 3px;
  flex: 1;
}

.desk-tiles p {
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
</style>