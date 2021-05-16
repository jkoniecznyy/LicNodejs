<template>
  <div class="w3-content w3-padding">
    <div class="w3-container w3-padding-32">

      <h1 v-if="!isLogged" class="w3-border-bottom w3-border-light-grey w3-padding-16">
        W celu korzystania z usług aplikacji proszę się zalogować
      </h1>

      <div v-if="isLogged">
        <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">
          Twoje transakcje:
        </h1>
<!--        <p> {{ transactionData }} </p>-->
      </div>

    </div>
  </div>
</template>
<script>
import AccessService from '@/vueServices/access.vueservice';
// import TransactionVueservice from "@/vueServices/transaction.vueservice";

export default {
  name: 'TransactionsView',
  data() {
    return {
      isLogged: false,
      transactionData: {},
    }
  },
  async mounted() {
  },
  async created() {
    this.isLogged = await AccessService.TestAnyAccess('user')
    // this.transactionData = await TransactionVueservice.getUserTransactions()
  },
  async updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>