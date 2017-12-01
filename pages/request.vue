<template>
  <section class="container">
    <div class="hero-bg"></div>
    <div class="hero-gradient"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="">
          <h1>Request music to be added on the playlist</h1>
          <form id="search" v-on:submit.prevent="search">
            <input class="button" title="search" placeholder="Search by song name..." type="text" v-model="searchTerm" />
            <input class="button button--green" type="submit" value="Search" />
          </form>
          <button class="button button--white" @click="samba">Give me samba!</button>
          <div class="">
            <table class="">
              <thead>
              <tr>
                <th>Artist</th>
                <th>Song name</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="song in songs">
                <td>{{song.artists[0].name}}</td>
                <td>{{song.name}}</td>
                <td><button id="request" class="button button--green" @click="requestSong(song)">Request</button></td>
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
    data () {
      return {
        searchTerm: '',
        songs: []
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
