<template>
  <div class="container-fluid my-3">
    <header>
      <div class="hero mw-100">
        <img width="100%" src="https://i.imgur.com/cycWqny.jpg" title="source: imgur.com" />
        <div class="hero-text">
          <div class="display-4 header-text text-center text-red">{{artist}}</div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Header',
  data () {
    return {
      artist: 'Bee Gee Borne'
    }
  }
}
</script>

<style scoped>
  * {
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
  }
</style>
