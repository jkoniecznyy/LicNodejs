<template>
  <div
    class="post"
    v-bind:class="{postDone: item.completed}"
  >
      <h2>{{item.title}}</h2>
      <button v-if="!item.completed" @click="removeItem()"> Usun</button>
  </div>
</template>

<script>
export default {
  props:['item'],
  methods: {
    removeItem(){
      this.$emit('removeClicked', this.item.id)
    }
  }
}
</script>