<template>
  <div class="sambaPartyLogo">
    <img id="logo" src="../assets/images/logo-spotify.png">
  </div>
</template>

<script>
  export default {
    name: 'Logo'
  }
</script>

<style>
  #logo {
    border-radius: 50%;
    max-width: 10rem;
    margin-bottom: 2rem;
  }

  #logo:hover {
    animation: pulse 5s infinite;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
    }
    25% {
      -webkit-box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
    }
    50% {
      -webkit-box-shadow: 0 0 50px 0 rgba(124, 252, 0, 0.2);
    }
    75% {
      -webkit-box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
    }
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
      box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
    }
    25% {
      -moz-box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
      box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
    }
    50% {
      -moz-box-shadow: 0 0 50px 0 rgba(124, 252, 0, 0.2);
      box-shadow: 0 0 50px 0 rgba(124, 252, 0, 0.2);
    }
    75% {
      -moz-box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
      box-shadow: 0 0 20px 10px rgba(124, 252, 0, 0.4);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
      box-shadow: 0 0 0 0 rgba(124, 252, 0, 0.4);
    }
  }
</style>
