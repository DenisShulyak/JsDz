<template>
  <div id="app">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNlxA9K_-lXXpHCXwlnFr-Czisb1kAasQ1kDvssDr3TsgrZS9i">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
