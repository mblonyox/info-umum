<template>
  <div id="home">
    <v-container>
      <v-layout row wrap pt-5>
        <v-flex sm12 md4 class="text-xs-center text-md-right">
          <img src="../assets/logo-small.png" id="logo-utama">
        </v-flex>
        <v-flex sm12 md8 class="text-xs-center text-md-left">
          <h1 class="indigo--text text--darken-4">Info Umum</h1>
          <h3 class="blue--text text--darken-4">Informasi umum dari dan untuk Pegawai Kementerian Keuangan.</h3>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap mt-5>
        <v-flex xs3 v-for="mod in mods" :key="mod.name">
          <v-card>
            <v-card-title>
              <div class="text-xs-center green--text">
                <v-icon x-large>{{ mod.icon }}</v-icon>
                <p>{{ mod.name }}</p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mods: [
        {
          name: 'Organisasi',
          path: '/organisasi',
          icon: 'fa-sitemap'
        },
        {
          name: 'Pegawai',
          path: '/pegawai',
          icon: 'fa-vcard'
        }
      ]
    }
  }
}
</script>

<style>
#logo-utama {
  max-width: 100%;
  max-height: 100%;
}
</style>
