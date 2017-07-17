<template>
  <div id="landing">

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3>Hey you found the good stuff</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">Share</v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>



  </div>
</template>

<script>
export default {
name: 'landing',
data () {
  return {

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landing {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}


</style>
