<template>
  <div id="app">
    <TestComponent />
    <TutorialComponent />
  </div>
</template>

<script>
import TestComponent from './components/test.component.vue'
import TutorialComponent from './components/Tutorial/todoapp'

export default {
  name: 'App',
  components: {
    TestComponent,
    TutorialComponent
  }
}
</script>
<style>
body {
  font-size: 22px;
}
</style>