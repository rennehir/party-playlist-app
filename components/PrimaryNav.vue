<template>
  <div class="open">
    <span class="cls"></span>
    <span>
      <ul class="sub-menu ">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/request">Request</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">DJ</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Playlist</nuxt-link>
        </li>
      </ul>
    </span>
    <span class="cls"></span>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'PrimaryNav',
    mounted () {
      $(document).ready(function () {
        $(document).delegate('.open', 'click', function (event) {
          $(this).addClass('oppenned')
          event.stopPropagation()
        })
        $(document).delegate('body', 'click', function (event) {
          $('.open').removeClass('oppenned')
        })
        $(document).delegate('.cls', 'click', function (event) {
          $('.open').removeClass('oppenned')
          event.stopPropagation()
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
