<template>
  <button @click="login" class="button button--green">Login</button>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {}
    },
    methods: {
      login () {
        window.open('popup.html', 'name', 'height=585,width=400')
      }
    }
  }
</script>
