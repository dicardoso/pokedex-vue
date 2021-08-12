<template>
  <v-app-bar
    color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Pokedex</v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-text-field
        height=10
        hide-details="auto"
        v-model="search"
        placeholder="search"
        prepend-inner-icon="mdi-magnify"
        outlined
        clearable
        rounded
        @keyup.enter="searchPokemon"
        >
        </v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
import {actions} from '@/store'
  export default {
    name: 'MenuBar',
    data () {
      return {
        search: ''
      }
    },
    methods: {
      async searchPokemon() {
				await actions.searchPokemon(this.search);
			},
    }
  }
</script>