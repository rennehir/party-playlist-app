<template>
  <div>
    <primary-nav></primary-nav>
    <nuxt/>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import PrimaryNav from '@/components/PrimaryNav.vue'

  export default {
    components: {
      Logo,
      PrimaryNav
    }
  }
</script>

<style>

</style>
