<template>
  <div>
    <div class="container-fluid my-3 pb-lg-5 pb-sm-2">
      <div class="row hero mx-auto">
        <img src="https://i.imgur.com/cycWqny.jpg" width="100%">
        <div class="hero-text">
            <div class="display-4 header-text text-center text-red">{{tracks}}</div>
          </div>
      </div>
    </div>
    <Audio />
  </div>
</template>

<script>
import Audio from './Audio.vue'
  export default {
    name: 'Tracks',
    data() {
      return {
        tracks: 'My Tracks'
      }
    },
    components: {
      Audio
    }
  }
</script>

<style scoped>

</style>