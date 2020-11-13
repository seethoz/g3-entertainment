<template>
  <div>
    <Header />
    <div class="container my-5">
      <div class="row d-flex align-items-center h-60">
        <div class="col-md-4 pr-2">
          <a href="https://imgur.com/ZDDHO3r"><img src="https://i.imgur.com/ZDDHO3r.jpg" title="source: imgur.com" /></a>
        </div>
        <div class="col-md-8">
          <div class="display-4 text-center artist-name text-red">Bornhee Bee Gee</div>
          <p>Bornee is an artist who does kapuka, genge and rap. Together with Patrick, they've done a number of collabos and are in for a long partnership. For this duo, music is life and have sworn to give you nothing but the best. They urge you regularly check out this website to find their latest tracks.</p>
        </div>
      </div>
    </div>
    <Youtube />

    <div class="display-4 text-center mb-3 text-red">Latest Tracks</div>
  
    <div class="row music justify-content-center d-flex align-items-center h-60" v-for="song in songs" :key="song.title">
      <div class="col-md-2"></div>
      <div class="col-md-2 pb-3">
        <div class="audio-pic">
          <img :src="song.image" />
        </div>
      </div>
      <div class="col-md-6 audio">
        <span class="audio-inner d-flex flex-column align-items-center">
          <small class="mb-2 text-muted">{{song.title}} - {{song.artist}}</small>
          <audio :src="song.src" controls controlsList="nodownload" :type="song.type"></audio>
        </span>
      </div>
    </div>

    <hr class="my-5">
    <div class="container-fluid my-5">
      <div class="display-4 text-center text-red mb-5">Image Gallery</div>
      <div class="row image-galleries">
        <div class="image-galleries-inner mb-lg-4 mb-sm-1"  v-for="image in images" :key="image.title">
          <img :src="image.src" :alt="image.title">
        </div>
      </div>
    </div>
    <hr class="my-5">
  </div>
</template>

<script>
import Header from './Header.vue'
import Youtube from "./Youtube.vue";
import Audio from "./Audio.vue";
  export default {
    name: 'Home',
    data() {
      return {
        songs: [
          {
            title: "Utafika Ligi",
            artist: "Borne Bee Gee",
            type: "audio/mp3",
            src: require("../assets/music/utafika-ligi.mp3"),
            image: "https://img.youtube.com/vi/5OyJPcjHMn0/default.jpg"
          },
          {
            title: 'Nayo Nayo',
            artist: 'ft sapro, pattohriffle, lewiser',
            src: require('../assets/music/nayo-nayo.mp3'),
            type: "audio/mp3",
            image: "https://img.youtube.com/vi/z-OxwqzdwEY/default.jpg"
          },
          {
            title: 'D.C',
            artist: 'ft Eco Gang',
            type: "audio/webm",
            src: require('../assets/music/dc.webm'),
            image: "https://img.youtube.com/vi/6msZhqsKV5I/default.jpg"
          }
        ],
        images: [
          {
            title: "Bee Gee",
            src: 'https://imgur.com/Dy9hgI7.jpg'
          },
          {
            title: "ding ding dong",
            src: 'https://imgur.com/RTeRg0O.jpg'
          },
          {
            title: "kenya peace",
            src: 'https://imgur.com/LAiLIbs.jpg'
          },
          {
            title: "Team D.C",
            src: 'https://imgur.com/Nd0DEWz.jpg'
          },
          {
            title: "natambua God",
            src: 'https://imgur.com/BwqzWeD.jpg'
          }
        ]
      }
    },
    components: {
      Header,
      Youtube,
      Audio
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
  .image-galleries img {
    height: 357.66px;
    margin: 0 auto
  }
  .image-galleries {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto!important;
  }
  .image-galleries-inner {
    width: 33.3333%;
  }
  
  @media (max-width: 767.98px) { 
    img {
      margin: 0 auto;
    }
    .image-galleries img {
      height: 250px;
    }
    .audio-pic {
      display: none;
    }
    .audio {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 575.98px) {
    .artist-name {
      font-size: 32px;
    }
    .image-galleries img {
      height: 150px;
      padding-right: 3px;
    }
  }
</style>