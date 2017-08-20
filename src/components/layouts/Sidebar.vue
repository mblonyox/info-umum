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
      show() {
        return this.$store.state.layout.sidebar;
      }
    }
  }
</script>