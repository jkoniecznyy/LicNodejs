<template>
  <div class="w3-content w3-padding">
    <div class="w3-container w3-padding-32">
    <h1 v-if="!isLogged" class="w3-border-bottom w3-border-light-grey w3-padding-16" >
      W celu korzystania z usług aplikacji proszę się zalogować
    </h1>
    <h1 v-if="isLogged" class="w3-border-bottom w3-border-light-grey w3-padding-16" >
      Pomyślnie zalogowano, teraz można korzystać z usług aplikacji
    </h1>
    </div>
  </div>
</template>
<script>
import AccessService from '../vueServices/access.vueservice';

export default {
  name: 'WelcomeView',
  data () {
    return {
      isLogged: false,
    }
  },
  async mounted() {
  },
  async created(){
    this.isLogged = await AccessService.TestAnyAccess('user')
  },
  async updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>