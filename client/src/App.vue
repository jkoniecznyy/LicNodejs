<template>
  <div id="app">
    <Nav />
    <UserComponent />
    <!--    <TestComponent />-->
<!--    <TutorialComponent />-->
  </div>
</template>

<script>
import Nav from './components/Nav'
import UserComponent from './components/user.component'
// import TestComponent from './components/test.component.vue'
// import TutorialComponent from './components/Tutorial/todoapp'

export default {
  name: 'App',
  components: {
    UserComponent,
    Nav,
    // TestComponent,
    // TutorialComponent
  }
}
</script>