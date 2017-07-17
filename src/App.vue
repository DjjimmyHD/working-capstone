<template>
  <div id="app">

    <top-nav></top-nav>
    <v-layout>
    <router-view></router-view>
    </v-layout>
    <btm-nav></btm-nav>

  </div>
</template>

<script>
import BtmNav from './components/BtmNav'
import TopNav from './components/TopNav'

export default {
  name: 'app',
  components: {
    BtmNav,TopNav
  }
}
</script>

<style>


</style>
