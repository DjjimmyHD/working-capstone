<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
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
