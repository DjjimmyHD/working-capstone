<template>

<!--
  <footer class="page-footer #ff8a65 deep-orange lighten-2">

          <div class="footer-copyright">
            <div class="container">
            <p>© 2014 Copyright Text</p>

            </div>
          </div>
        </footer> -->
        <div >
      <v-card id="btm-nav" height="100px">
    <v-bottom-nav absolute value="true" class="transparent">
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


</div>


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
<style>
#btm-nav{
  background-color: #FF8A65;
}




</style>
