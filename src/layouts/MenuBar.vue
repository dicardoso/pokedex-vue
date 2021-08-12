<template>
  <v-app-bar
    color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-text-field
        hide-details="auto"
        v-model="search"
        placeholder="search"
        >
          <v-icon
            slot="prepend"
            color="red"
          >
            mdi-magnify
          </v-icon>
        </v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'MenuBar',
    data () {
      return {
        search: ''
      }
    },
  }
</script>