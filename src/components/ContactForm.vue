<template>
  <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>ME</span>
          </div>
          <div class="app-contact">SEND AN <a href="mailto:abdulodesanmi@gmailcom"> EMAIL</a> INSTEAD</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <form @submit.prevent="sendMessage">
              <div class="app-form-group">
                <input name="name" type="text" class="app-form-control" v-model="name" placeholder="NAME" required>
              </div>
              <div class="app-form-group">
                <input name="email" type="email" class="app-form-control" v-model="email" placeholder="EMAIL" required>
              </div>
              <div class="app-form-group message">
                <input name="message" type="text" class="app-form-control" v-model="message" placeholder="MESSAGE" required>
              </div>
              <div class="app-form-group buttons">
                <button v-if="sent" class="app-form-button">SENT!</button>
                <button type="submit" class="app-form-button">SEND</button>
              </div>
            </form>
          </div>          
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com'
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const sent = ref(false)

    const sendMessage = (e) => {
      try {
        emailjs.sendForm('default_service', 'template_bsg36as', e.target,
        'user_oEXcnOFMlOUu07GMCbX3x', {
          name: name.value,
          email: email.value,
          message: message.value
        })
        sent.value = true
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      name.value = '',
      email.value = '',
      message.value = ''
    }

    return {
      name,
      email,
      message,
      sent,
      sendMessage
    }
  }
}
</script>

<style>
.background {
  display: flex;
  min-height: 100vh;
  justify-content: flex-start;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  margin-top: 25px;
  padding: 10px;
}

.screen {
  position: relative;
  background: #101011;
  border-radius: 5px;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ffffff;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ffffff;
}

.app-contact {
  margin-top: auto;
  font-size: 13px;
  color: #ffffff;
}

.app-contact a {
  text-decoration: none;
  color: #777778;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #777778;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #777778;
}

.app-form-control:focus {
  border-bottom-color: #ffffff;
}

.app-form-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #777778;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>