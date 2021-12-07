<template>
  <div class="about-card">
    <div class="dp">
      <img src="../assets/abdvector.svg" alt="abdavatar">
      <div class="name-flex">
        <div class="name">
          Abdullahi Odesanmi
        </div>
        <div class="titles">
          <p>
            <span>Frontend Web Developer</span> - <span>JavaScript</span> , <span>VueJs</span> , <span>CSS Design System</span> , <span>Firebase</span> , <span>Supabse</span>.
          </p>
        </div>
      </div>
    </div>
    <div class="fflex">
      <div class="iflex">
        <div class="open">
          <h5>Open to work:</h5>
          <p>Frontend Jobs</p>
        </div>
        <div class="service">
          <h4>Providing Services</h4>
          <p>Web Design and Web Development</p>
        </div>
      </div>
      <div class="siflex">
        <div class="about">
          <h5>About</h5>
          <p class="s">I'm a <span>frontend web developer</span> with over 3 years experience. Skilled in using <span>JavaScript</span>, <span>VueJs</span>, <span>CSS3</span>, <span>Firebase</span>, <span>Supabase</span>, and other required technologies to deliver an amazing result.</p>
          <p>I'm always delighted to take up a challenge and also to build softwares that actually solve problems and will be of use to people.</p>
        </div>
      </div>
    </div>
    <div class="ed-sk">
      <div class="education">
        <h4>Education</h4>
        <div class="ed-s">
          <img src="../assets/lasu.png" alt="lasu">
          <div class="school">
            <p>Lagos State University</p>
            <span>Bachelor of Science - BS, Computer Science</span>
            <span>2017 - 2021</span>
          </div>
        </div>
        <div class="ed-s">
          <img src="../assets/techvarsity.png" alt="techvarsity">
          <div class="school">
            <p>Techvarsity</p>
            <span>Frontend Web Development Bootcamp</span>
          </div>
        </div>
      </div>
      <div class="skills">
        <h4>Skills and Tools</h4>
        <div class="skills-img">
          <img src="../assets/vue.png" alt="vue">
          <img src="../assets/js.png" alt="js">
          <img src="../assets/html.png" alt="html">
          <img src="../assets/css.png" alt="css">
          <img src="../assets/git.png" alt="git">
          <img src="../assets/sass.png" alt="sass">
          <img src="../assets/bootstrap.png" alt="bootstrap">
          <img src="../assets/tailwind.png" alt="tailwind">
          <img src="../assets/firebase.png" alt="firebase">
          <img src="../assets/supabase.svg" alt="supabase">
          <img src="../assets/xd.png" alt="xd">
          <img src="../assets/figma.png" alt="figma">
          <img src="../assets/vscode.png" alt="vscode">
        </div>
      </div>
    </div>
    <div class="contact">
      <h4>Contact</h4>
      <div class="ed-s">
        <img src="../assets/li.svg" alt="linkedin">
        <div class="link">
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/odesanmiabdullahi/">https://www.linkedin.com/in/odesanmiabdullahi</a>
        </div>
      </div>
      <div class="ed-s">
        <img src="../assets/email.svg" alt="email">
        <div class="link">
          <p>Email</p>
          <a href="#">abdulodesanmi@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="featured">
      <h4>Featured</h4>
      <div class="images">
        <div class="img-card">
          <img src="../assets/aaa.jpg" alt="abd">
        </div>
        <div class="img-card">
          <img src="../assets/ddd.jpg" alt="abd">
        </div>
        <div class="img-card">
          <img src="../assets/pxl.jpg" alt="abd">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  padding: 20px;
}

.dp img {
  border: 3px solid #777778;
  padding: 3px;
  border-radius: 100%;
  width: 100px;  
  height: 100px;
}

.name {
  margin: 7px 0;
  font-size: 1.4rem;
}

.titles {
  margin: 7px 0;
  letter-spacing: 0.04rem;
}

.open {
  margin: 11px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.open h5 {
  margin-bottom: 4px;
}

.open p {
  font-size: .8rem;
}

.service {
  margin: 11px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.service h5 {
  margin-bottom: 4px;
}

.service p {
  font-size: .8rem;
}

.about {
  margin: 11px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.about h5 {
  margin-bottom: 10px;
}

.about .s {
  margin-bottom: 9px;
}

.featured {
  margin: 10px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.featured .images {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vmin;
  overflow: hidden;
  transform: skew(5deg);
}

.featured .images .img-card {
  flex: 1;
  transition: all 1s ease-in-out;
  height: 75vmin;
  position: relative;
}

.featured .images .img-card:hover {
  flex-grow: 10;
}

.featured .images .img-card:hover img {
  filter: grayscale(0);
}

.featured .images .img-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-in-out;
  filter: grayscale(100%);
}

.featured .images .img-card:not(:nth-child(3)) {
  margin-right: 1em;
}

.education {
  margin: 10px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.education .ed-s {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 13px;
}

.education .ed-s img {
  width: 50px;
  margin-right: 10px;
}

.school {
  display: flex;
  flex-direction: column;
}

.school p {
  margin-bottom: 5px;
}

.school span {
  margin: 1px 0;
  font-size: 0.85rem;
}

.skills {
  margin: 10px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.skills h4 {
  margin-bottom: 8px;
}

.skills-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.skills-img img {
  width: 50px;
  margin: 10px;
}

.contact {
  margin: 10px 0;
  background-color: #242425;
  padding: 10px;
  border-radius: 7px;
}

.contact .ed-s {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 13px;
  overflow: auto;
}

.contact .ed-s img {
  width: 20px;
  margin-right: 10px;
}

.link a {
  color: #777778;
  font-size: 0.9rem;
}

@media (min-width: 45rem) {
  .dp {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .dp .name-flex {
    margin-left: 10px;
  }

  .fflex {
    display: flex;
  }

  .iflex {
    /* width: 40%; */
    margin-inline: 0px 10px;
    flex: 1;
  }

  .siflex {
    /* width: 60%; */
    flex: 1;
  }

  .ed-sk {
    display: flex;
  }

  .education {
    margin-inline: 0px 10px;
    flex: 1;
  }

  .skills {
    flex: 1;
  }
}
</style>