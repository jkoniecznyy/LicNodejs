<template>
  <div class="w3-top">
    <div class="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" class="w3-bar-item w3-button"><b id="title">Strefa Klienta</b></a>
      <!-- Float links to the right. Hide them on small screens -->
      <div class="w3-right w3-hide-small">
        <a href="#projects" class="w3-bar-item w3-button">Logowanie</a>
        <a href="#projects" class="w3-bar-item w3-button">Nieruchomości</a>
        <a href="#about" class="w3-bar-item w3-button">Saldo</a>
        <a href="#contact" class="w3-bar-item w3-button">Transakcje</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  methods: {
  }
}
</script>