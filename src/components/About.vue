<template>

  <div id="about">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark class="primary">

        <v-card-text>
          <p class="text-xs-center">Stuff about me here</p>
        </v-card-text>

        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text>My Journey</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text>About the Project</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text>Technologies used</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text>The Future</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>


</template>


<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #AEB9B5;

}




</style>
