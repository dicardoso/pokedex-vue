<template>
  <v-container fluid class="d-flex ma-0">
    <v-row>
      <v-col class="d-flex md-6">
          <pokemon-card
            v-for="(item, index) in pokemonsList"
            :key="index"
            class="card"
            :name="item.name"
            link=""/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCard from './PokemonCard.vue'
import api from '../services/api'

export default {
  name: 'PokemonList',
  components: {
    PokemonCard
  },

  data() {
    return {
      pokemonsList: [],
      next: null,
      previous: null
    } 
  },

  created(){
    this.loadPokemonList()
  },

  methods: {
    loadPokemonList() {
      api.get('/pokemon?limit=50&offset=0')
        .then((res) => {
          this.pokemonsList = res.data.results
          console.log(this.pokemonsList)
          this.next = res.data.next
          this.previous = res.data.previous
        })
    }
  }
}
</script>
<style scoped>
.d-flex{
  display: flex;
  flex-wrap: wrap;
}
</style>