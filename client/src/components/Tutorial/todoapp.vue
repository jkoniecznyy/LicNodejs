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
div.postDone {
  position: relative;
  border: 1px solid #58d6d6;
  background-color: #76d2e0;
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
