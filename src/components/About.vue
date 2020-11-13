<template>
  <div>
    <div class="container-fluid my-3">
      <div class="row hero mx-auto">
        <img src="https://i.imgur.com/cycWqny.jpg" width="100%">
        <div class="hero-text">
            <div class="display-4 header-text text-center text-red">{{aboutMe}}</div>
          </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row d-flex align-items-center h-60 mx-auto">
        <div class="col-md-4 pr-2">
          <a href="https://imgur.com/ZDDHO3r"><img src="https://i.imgur.com/ZDDHO3r.jpg" title="source: imgur.com" /></a>
        </div>
        <div class="col-md-8">
          <div class="display-4 text-center artist-name text-red">Bornhee Bee Gee</div>
          <p>Bornee is an artist who does kapuka, genge and rap. Together with Patrick, they've done a number of collabos and are in for a long partnership. For this duo, music is life and have sworn to give you nothing but the best. They urge you regularly check out this website to find their latest tracks.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        aboutMe: 'About Me'
      }
    },
  }
</script>

<style scoped>
* {
  overflow-x: hidden;
}
img {
  max-width: 100%;
}
@media (max-width: 575.98px) {
  .artist-name {
    font-size: 32px;
  }
}
</style>