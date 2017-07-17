<template>

<!--
  <footer class="page-footer #ff8a65 deep-orange lighten-2">

          <div class="footer-copyright">
            <div class="container">
            <p>© 2014 Copyright Text</p>

            </div>
          </div>
        </footer> -->
        <v-card height="200px">
    <v-bottom-nav absolute value="true" class="transparent #ff8a65 deep-orange lighten-2">
      <v-btn flat dark class="white--text" >
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat dark class="white--text">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat dark class="white--text">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>


</template>


<script>
export default {
  name: 'btm-nav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
