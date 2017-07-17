<template>


      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-toolbar class="cyan" dark>
              <v-toolbar-title>Say What You Feel</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <template v-for="item in items">
                <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                <v-list-tile avatar v-else v-bind:key="item.title" href="javascript:;" download target="_blank">
                  <v-list-tile-avatar>
                    <img v-bind:src="item.avatar"></v-list-tile-avatar>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>





</template>

<script>
export default {
name: 'message',
data () {
  return {
    items:[{title:'james', header:'Hey graduation on the 28th'},{title:'peaches', header:'meow', subtitle:'yoyoyo'},{title:'jules', header:'sup', subtitle:'o oo'}]

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
