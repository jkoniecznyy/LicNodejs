<template>
  <div id="TestComponent">
    Public access test: {{ testPublicResult }} <br>
    User access test: {{ testUserResult }}<br>
    Admin access test: {{ testAdminResult }}<br>
  </div>
</template>

<script>
import TestService from '../vueServices/test.vueservice';

export default {
  name: 'TestComponent',
  data () {
    return {
      testPublicResult: null,
      testUserResult: null,
      testAdminResult: null
    }
  },
  async mounted() {
  },
  async created(){
    this.testPublicResult = await TestService.TestAnyAccess('public')
    this.testUserResult = await TestService.TestAnyAccess('user')
    this.testAdminResult = await TestService.TestAnyAccess('admin')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
