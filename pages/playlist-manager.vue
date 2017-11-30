<template>
  <section class="container">
    <div class="hero-bg"></div>
    <div class="hero-gradient"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="">
          <h1>Manage your Party Playlist here!</h1>
          <div class="">
            <table class="">
              <thead>
              <tr>
                <th>Artist</th>
                <th>Song name</th>
                <th></th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="song in songs">
                <td>{{song.artists[0].name}}</td>
                <td>{{song.name}}</td>
                <td><button class="button button--green">Confirm</button></td>
                <td><button class="button button--red">Decline</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PlaylistManager',
    data () {
      return {
        songs: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
