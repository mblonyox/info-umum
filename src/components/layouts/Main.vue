<template>
  <div id="main">
    <Sidebar></Sidebar>
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

export default {
  components: {
    Sidebar,
    Navbar,
    Footer
  }
}
</script>