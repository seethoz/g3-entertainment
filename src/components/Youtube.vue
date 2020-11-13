<template>
  <div class="youtube-container my-5">
    <div class="row videos">
      <div class="col-md-3 pb-2"  v-for="video in videos" :key="video">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="video" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Youtube',
    data() {
      return {
        videos: [
          'https://www.youtube.com/embed/z-OxwqzdwEY',
          'https://www.youtube.com/embed/wYHZtObkSJs',
          'https://www.youtube.com/embed/6msZhqsKV5I',
          'https://www.youtube.com/embed/3DtuAOtT57o'
        ]
      }
    },
  }
</script>

<style  scoped>
  .youtube-container {
    margin: 0px;
    padding: 0px;
  }
</style>