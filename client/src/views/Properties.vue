<template>
  <div>
    <div class="w3-content w3-padding">
      <div class="w3-container w3-padding-32">

        <h1 v-if="!isLogged" class="w3-border-bottom w3-border-light-grey w3-padding-16">
          W celu korzystania z usług aplikacji proszę się zalogować
        </h1>

        <div v-if="isLogged">
          <h1 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Twoje nieruchomości:
          </h1>
        </div>
      </div>
    </div>

    <div v-if="isLogged !== false && propertiesData !==[]" class="w3-padding-16 transaction-table">
      <b-table striped hover :items="propertiesData" :fields="fields"></b-table>
    </div>

  </div>
</template>
<script>
import AccessService from '../vueServices/access.vueservice';
import PropertiesVueservice from '@/vueServices/properties.vueservice'

export default {
  name: 'PropertiesView',
  data() {
    return {
      isLogged: false,
      propertiesData: [],
      fields: [
        {
          key: 'description',
          sortable: true,
          label: 'Opis nieruchomości'
        },
        {
          key: 'type',
          sortable: true,
          label: 'Rodzaj nieruchomości'
        },
        {
          key: 'rent',
          sortable: true,
          label: 'Miesięczna wysokość czynszu (w zł)'
        }]
    }
  },
  async mounted() {
  },
  async created() {
    this.isLogged = await AccessService.TestAnyAccess('user')
    this.propertiesData = await PropertiesVueservice.getUserProperties()
  },
  async updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>