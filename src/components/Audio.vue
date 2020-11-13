<template>
  <div class="container my-sm-2 my-5">
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
  </div> 
</template>

<script>
export default {
  name: 'Audio',
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
        },
        {
          title: "Ice Party",
          artist: "ft Eco Gang",
          type: "audio/mp3",
          src: require('../assets/music/iceparty.mp3'),
          image: "https://img.youtube.com/vi/wYHZtObkSJs/default.jpg"
        },
        {
          title: "Hip Hop Cypher",
          artist: "ft Sapro",
          type: "audio/mp3",
          src: require("../assets/music/hip-hop-cypher.mp3"),
          image: "https://img.youtube.com/vi/3DtuAOtT57o/default.jpg"
        },
        {
          title: "Just Smile For Me",
          artist: "ft Mojo",
          type: "audio/mp3",
          src: require("../assets/music/just-smile.mp3"),
          image: "https://img.youtube.com/vi/5AgMxet4M3M/default.jpg"
        }
      ],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
@media (max-width: 767.98px) { 
  .audio-pic {
    display: none;
  }
  .audio {
    display: flex;
    justify-content: center;
  }
}
</style>
