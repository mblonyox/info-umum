<template>
  <v-toolbar
    fixed
    class='primary'
    dark>
    <v-toolbar-side-icon
      class='hidden-sm-and-up'
      @click.stop='showSidebar'></v-toolbar-side-icon>
    <v-toolbar-title>Info Umum</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      showSidebar() {
        this.$store.commit('setSidebar', true)
      }
    }
  }
</script>