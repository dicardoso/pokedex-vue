<template>
  <div id="app">
    <menu-bar/>
    <pokemon-list/>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList.vue'
import MenuBar from './layouts/MenuBar.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    PokemonList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/bg.jpg") repeat fixed;
  background-size: 300px;
}
</style>
