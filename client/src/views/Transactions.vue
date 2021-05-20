<template>
  <div>
    <div class="w3-content w3-padding">
      <div class="w3-container w3-padding-32">

        <h1 v-if="!isLogged" class="w3-border-bottom w3-border-light-grey w3-padding-16 center">
          W celu korzystania z usług aplikacji proszę się zalogować
        </h1>

        <div v-if="isLogged">
          <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Twoje transakcje:
          </h1>
        </div>
      </div>
    </div>

    <div v-if="isLogged !== false && transactionData !==[]" class="w3-padding-16 transaction-table">
      <ul id="example-1">
        <li v-for="property in propertyIds" :key="property">
          {{ property }}, *opis nieruchomości z linkiem*
        </li>
      </ul>
      <b-table striped hover :items="transactionData" :fields="fields"></b-table>
    </div>

  </div>

</template>
<script>
import AccessService from '@/vueServices/access.vueservice';
import TransactionVueservice from "@/vueServices/transaction.vueservice";
import PropertiesVueservice from "@/vueServices/properties.vueservice"
import UserService from "@/vueServices/user.vueservice";

export default {
  name: 'TransactionsView',
  data() {
    return {
      isLogged: false,
      user: null,
      propertyIds: [],
      transactionData: [],
      fields: [
        {
          key: 'propertyId',
          sortable: true,
          label: 'Identyfikator nieruchomości'
        },
        {
          key: 'description',
          sortable: true,
          label: 'Opis transakcji'
        },
        {
          key: 'value',
          sortable: true,
          label: 'Wartośc transakcji (w zł)'
        },
        {
          key: 'date',
          sortable: true,
          label: 'Data wykonania transakcji'
        }]
    }
  },
  async mounted() {
  },
  async created() {
    this.isLogged = await AccessService.TestAnyAccess('user')
    this.user = await UserService.getUserInfo()
    this.propertyIds = await PropertiesVueservice.getUserPropertyIds()
    this.transactionData = await TransactionVueservice.getUserTransactions()
  },
  async updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>