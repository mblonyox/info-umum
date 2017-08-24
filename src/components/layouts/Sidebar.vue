<template>
  <v-navigation-drawer 
    temporary
    absolut
    v-model="show">
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      show: {
        get: function() {
          return this.$store.state.layout.sidebar
        },
        set: function(s) {
          this.$store.commit('setSidebar', s)
        }
      }
    }
  }
</script>