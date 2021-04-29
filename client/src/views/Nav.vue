<template>
  <div>
    <div class="w3-top">
      <div class="w3-bar w3-white w3-wide w3-padding w3-card">
        <router-link to="/" class="w3-bar-item w3-button"><b id="title">Strefa Klienta</b></router-link>
        <!-- Float links to the right. Hide them on small screens -->
        <div class="w3-right w3-hide-small">
          <a href="#projects" class="w3-bar-item w3-button">Nieruchomości</a>
          <a href="#about" class="w3-bar-item w3-button">Saldo</a>
          <a href="#contact" class="w3-bar-item w3-button">Transakcje</a>
          <router-link v-if="!isLogged" to="/login" class="w3-bar-item w3-button">Logowanie</router-link>
          <button v-if="isLogged" @click="logout" class="w3-button w3-black w3-section"> Wyloguj się</button>
        </div>
      </div>
    </div>

    <br>
    <router-view/>

  </div>
</template>
<script>
import AccessService from "@/vueServices/access.vueservice";
import UserService from "@/vueServices/user.vueservice";

export default {
  name: 'Nav',
  data() {
    return {
      isLogged: false,
    }
  },
  methods: {
    async logout() {
      let result = await UserService.logout()
      if(result === true){
        this.isLogged = false
        this.$router.go()
      }
    },
  },
  async created(){
    this.isLogged = await AccessService.TestAnyAccess('user')
  },
  async updated() {
    this.isLogged = await AccessService.TestAnyAccess('user')
  }
}
</script>