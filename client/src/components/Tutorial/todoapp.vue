<template>
  <div class="container">
    <h1>Todo App</h1>
    <div class="container">
      <input type="text" placeholder="todo" v-model="newItem">
      <button @click="addItem"> Dodaj</button>
    </div>

    <TodoItem
        v-for="item in items"
        :key="item.id"
        :item = "item"
        @removeClicked="removeItem(item.id)"
    />

  </div>
</template>

<script>
import TodoItem from './todoitem'
export default {
  name: 'TodoApp',
  components: {
    TodoItem
  },
  data(){
    return {
      newItem: '',
      items: [
        {title:'Napisać licencjat', completed: false, id:'asdw'},
        {title:'Obronić licencjat', completed: false, id:'asdww'}
      ]
    }
  },
  methods: {
    addItem(){
      this.items.push({
        title: this.newItem,
        completed: false,
        id: Math.random()
      })
      this.newItem=''
    },
    removeItem(id){
      const index = this.items.findIndex(el => el.id === id)
      this.items[index].completed=true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
