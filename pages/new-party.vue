<template>
  <section class="container">
    <div>
      <logo></logo>
      <h1 class="title">
        samba-party-playlist
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a class="button--green" href="https://junction17-spotify-proxy.herokuapp.com/login" target="_blank">Login</a>
        <nuxt-link class="button--grey" to="/new-party">New party</nuxt-link>
      </div>
      <div class="">
        <h3>Welcome to use our Spotify API powered party music list!</h3>
        <p>
          On <b>Request</b> tab you can search songs
          by song name and then ask for the DJ to confirm
          them to be added to the playlist. Or simply search for samba.
          We recommend samba!
        </p>
        <p>
          <b>DJ</b> tab is for the DJ to see all the requested songs
          and either <b>confirm</b> or <b>decline</b> them.
        </p>
        <p>
          The <b>Playlist</b> tab is where you can see all the songs added
          to the playlist.
        </p>
      </div>
      <div class="tech">
        <p>This project was built using <b>Vue.js</b>, <b>Node.js</b>,
          <b>Firebase</b> and <b>Heroku</b>.</p>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '@/components/Logo'

  export default {
    name: 'new-party',
    components: {
      Logo
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
