<template>
  <div id="landing">

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      
        <v-card-title primary-title>
            <h3>Hey you found the good stuff</h3>
        </v-card-title>

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
