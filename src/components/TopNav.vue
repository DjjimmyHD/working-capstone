  <template>

<nav>
    <div class="nav-wrapper">

      <h1 class="brand-logo center">The Good Stuff</h1>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/GoodStuff" exact>Good Stuff</router-link></li>
        <li><router-link to="/About" exact>About the Projcet</router-link></li>
        <li><router-link to="/DB" exact>DataBase Testing</router-link></li>
      </ul>
    </div>
  </nav>

  <!-- <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar> -->

  </template>

<script>
export default {
  name: 'top-nav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.nav-wrapper{
  background-color: #FF8A65;
}


</style>
