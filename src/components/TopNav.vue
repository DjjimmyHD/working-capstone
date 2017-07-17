  <template>

<nav>
    <div class="nav-wrapper #311b92 deep-purple darken-4">
      <!-- <a href="#" class="brand-logo center">Logo</a> -->
      <h1 class="brand-logo center">The Good Stuff</h1>
      <ul>
        <li><router-link to="/" exact>Landing Page</router-link></li>
        <li><router-link to="/GoodStuff" exact>Good Stuff</router-link></li>
      </ul>
    </div>
  </nav>
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
<style scoped>


</style>
