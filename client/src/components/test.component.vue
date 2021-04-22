<template>
  <div id="app">
    {{ publicRes }} <br>
    {{ user }}<br>
    {{ admin }}<br>
    {{ error }}<br>
  </div>
</template>

<script>
import axios from 'axios'
const url = '/api/test/'

export default {
  name: 'TestComponent',
  data () {
    return {
      publicRes: null,
      user: null,
      admin: null,
      error: null
    }
  },
  mounted () {
    axios
        .get(url+'public')
        .then(response => (this.publicRes = response.data.message))
        .catch(() => (this.publicRes = 'Something went wrong'))
    axios
        .get(url+'user')
        .then(response => (this.user = response.data.message))
        .catch(() => (this.user = 'Your not logged as user'))
    axios
        .get(url+'admin')
        .then(response => (this.admin = response))
        .catch(() => (this.admin = 'Your not logged as admin'))
    axios
        .get(url+'error')
        .then(response => (this.error = response))
        .catch(() => (this.error = 'Error throws correctly'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-size: 22px;
}
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

</style>
