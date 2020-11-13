<template>
  <div>
    <div class="container-fluid my-3 pb-lg-5 pb-sm-2">
      <div class="row hero mx-auto">
        <img src="https://i.imgur.com/cycWqny.jpg" width="100%">
        <div class="hero-text">
            <div class="display-4 header-text text-center text-red">{{contact}}</div>
          </div>
      </div>
    </div>

    <div class="container-fluid contact">
      <div class="col-md-8">
        <h3>Get in Touch</h3>
        
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        contact: 'Contact'
      }
    },
  }
</script>

<style scoped>

</style>