<template>
  <div class="about-card">
    <div class="experience">
      <svg width="98" height="4" viewBox="0 0 98 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2L98 2" stroke="#fff" stroke-width="3"/>
      </svg>
      <p>2+ Years of experience</p>
      <svg width="98" height="4" viewBox="0 0 98 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2L98 2" stroke="#fff" stroke-width="3"/>
      </svg>
    </div>
    <div class="about">
      I enjoy solving problems with clean, scalable solutions. I have a genuine passion
      for creating Apps and websites users will interact with and use for a long time.
    </div>
    <div class="objective">
      I have a strong foundation in frontend development and creation of software
      solutions with attention to details. I also enjoy working in a driven and focused
      team towards achieving a goal.
    </div>
    <div class="stacks">
      <div class="stack-head">
        <svg width="98" height="4" viewBox="0 0 98 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2L98 2" stroke="#fff" stroke-width="3"/>
        </svg>
        <p>Tools/Stacks</p>
        <svg width="98" height="4" viewBox="0 0 98 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2L98 2" stroke="#fff" stroke-width="3"/>
        </svg>
      </div>
      <ul class="stack">
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>VueJs</li>
        <li>Git</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Firebase</li>
        <li>Adobe XD</li>
        <li>Figma</li>
        <li>VS Code</li>
      </ul>
    </div>
  </div>
</template>

<style>
.about-card {
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.experience {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.experience p {
  font-size: 1.2em;
  font-weight: bold;
  padding: 0 10px;
}

.about {
  padding-top: 50px;
}

.objective {
  padding: 50px 0;
}

.stack-head {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stack-head p {
  font-size: 1.2em;
  font-weight: bold;
  padding: 0 15px;
}

.stack {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.stack li {
  list-style: none;
  margin: 8px;
}
</style>