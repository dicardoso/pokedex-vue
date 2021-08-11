<template>
  <v-card elevation="3" class="bgCard" width="200">
    <v-img
      v-if="pokemon.image"
      :src="`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`"
    ></v-img>
    <v-progress-linear
      v-else
      color="deep-purple accent-4"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
    <v-card-title
      style="text-transform: capitalize !important"
    >
      {{pokemon.name}}
    </v-card-title>
    <v-card-subtitle>
      <div class="types">
        <span
          v-for="(item, index) in pokemon.types"
          :key="index"
          :class="item.type.name + ' type'"
          style="text-transform: capitalize !important"
        >
          {{item.type.name}}
        </span>
      </div>

    </v-card-subtitle>
        
  </v-card>
</template>

<script>
import api from '../services/api'

export default {
  name: 'PokemonCard',
  props: {
      name: {
          type: String,
          required: true,
          default: null
      },
      link: {
          type: String,
          required: true,
          default: ''
      }
  },

  data() {
    return{
      pokemon: {
        id: null,
        name: this.name,
        image: null,
        abilities: [],
        stats: [],
        types: [],
        sprites: [],
        height: null,
        weight: null
      },
      load: false
    }
  },
  created(){
    this.loadPokemon()
  },
  

  methods: {
    async loadPokemon() {
      await api.get(`/pokemon/${this.name}`)
        .then((res) => {
          this.load = true
          console.log(res.data)
          this.pokemon = res.data
          this.pokemon.image = `https://cdn.traction.one/pokedex/pokemon/${this.pokemon.id}.png`
        })
        .finally(() => {
          this.finally = false
        })
    }
  }
}
</script>

<style scoped>
.bgCard{
  width: 100%;
  margin: auto !important;
  margin-bottom: 25px !important;
  padding: 15px;
}

.types{
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.type {
  width: 100px;
  text-align: center;
  padding: 2px 5px;
  border-radius: 4px;
  margin: 0 3px
}
.normal{
  background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background-color: #a4acaf;
  color: #212121;
}
.electric{
  background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background-color: #eed535;
  color: #212121;
}
.ground{
  background: rgb(171,152,66);
  background: linear-gradient(to top right, rgba(171,152,66,1) 0%, rgba(171,152,66,1) 40%, rgba(247,222,63,1) 60%, rgba(247,222,63,1) 100%);
  color: #212121;
}
.fairy {
  background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background-color: #fdb9e9;
  color: #212121;
}
.grass {
  background-color: #9bcc50;
  color: black;
}
.poison {
  background-color: #b97fc9;
  color: white;
}
.fire {
  background: linear-gradient (180deg, #fd7d24 50%, #fd7d24 50%);
  background-color: #fd7d24;
  color: white;
}
.flying {
  background: rgb(61,199,239);
  background: linear-gradient(to bottom left, rgba(61,199,239,1) 0%, rgba(61,199,239,1) 40%, rgba(189,185,184,1) 60%, rgba(189,185,184,1) 100%);
  color: #212121;
}
.water {
  background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background-color: #4592c4;
  color: #fff;
}

.bug {
  background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background-color: #729f3f;
  color: #fff;
}
</style>