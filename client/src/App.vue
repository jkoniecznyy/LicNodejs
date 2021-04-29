<template>
  <div id="app">
    <Nav />
<!--    <UserComponent />-->
    <!--    <TestComponent />-->
<!--    <TutorialComponent />-->
<!--    <router-view />-->
  </div>
</template>

<script>
import Nav from './views/Nav'
// import UserComponent from './components/login.component'
// import TestComponent from './components/test.component.vue'
// import TutorialComponent from './components/Tutorial/todoapp'

export default {
  name: 'App',
  components: {
    Nav,
    // UserComponent,
    // TestComponent,
    // TutorialComponent
  }
}
</script>