<template>
  <div>
    <div class="w3-top">
      <div class="w3-bar w3-white w3-wide w3-padding w3-card">
        <router-link to="/" class="w3-bar-item w3-button"><b id="title">Strefa Klienta</b></router-link>
        <!-- Float links to the right. Hide them on small screens -->

        <div v-if="isLogged" class="w3-right w3-hide-small">
          <router-link v-if="user" to="/transactions" class="w3-bar-item w3-button" id="logged-as">
            {{ user.email }}
          </router-link>
          <router-link to="/transactions" class="w3-bar-item w3-button">Transakcje</router-link>
          <router-link to="/properties" class="w3-bar-item w3-button">Nieruchomości</router-link>
          <button @click="logout" class="w3-bar-item w3-button w3-black "> Wyloguj się</button>
        </div>

        <div v-if="!isLogged" class="w3-right w3-hide-small">
          <router-link to="/login" class="w3-bar-item w3-button">Logowanie</router-link>
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
      user: null
    }
  },
  methods: {
    async logout() {
      let result = await UserService.logout()
      if (result === true) {
        this.isLogged = false
        this.$router.go()
      }
    },
  },
  async created() {
    this.isLogged = await AccessService.TestAnyAccess('user')
    this.user = await UserService.getUserInfo()
  },
  async updated() {
    this.isLogged = await AccessService.TestAnyAccess('user')
    // this.user = await UserService.getUserInfo()
  }
}
</script>