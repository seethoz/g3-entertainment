<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <a class="navbar-brand text-red" href="#">{{brand}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li v-for="routes in links" v-bind:key="routes.id" class="nav-item">
        <router-link class="nav-link" tag="a" :to="`${routes.page}`">{{routes.text}}</router-link>
      </li>
    </ul>
  </div>
  <div class="nav-social-media">
    <a href="https://www.facebook.com/bonface.nyangau.1" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.youtube.com/channel/UCbJdFhlo2Po-nq76VQg4YKA/videos" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="https://www.instagram.com/born.hee/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      brand: 'g3entertainment',
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/home'
        },
        {
          id: 1,
          text: 'About',
          page: '/about'
        },
        {
          id: 2,
          text: 'Tracks',
          page: '/tracks'
        },
        {
          id: 3,
          text: 'Contact',
          page: '/contact'
        }
      ]
    }
  }
}
</script>
<style scoped>
  * {
    overflow-x: hidden;
  }
  /* style navbar */
  .navbar {
    background-color: #07020D;
  }
  .navbar .nav-item a {
    color: #FB3640;
    text-transform: capitalize;
  }
  .navbar .nav-item a:hover,
  .navbar .nav-item a:visited {
    color: #FB3640;
    opacity: .7;
  }
  .navbar .navbar-brand {
    color: #FB3640;
    text-transform: uppercase;
  }
  .navbar-nav {
    margin: 0 auto;
  }

  .navbar .nav-item {
    margin-right: 30px;
  }
  /* end style navbar */

  /* style navbar social media icons */
  .nav-social-media .fa-facebook-f,
  .nav-social-media .fa-youtube,
  .nav-social-media .fa-instagram {
    color: #FB3640!important;
    margin-left: 15px;
    border: 1px solid #FB3640;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 5px;
  }

  .nav-social-media:hover {
    cursor: pointer;
  }
  /* end navbar social media icons */
  @media (max-width: 768px) {
  .navbar-brand {
      position: absolute;
      width: 100%;
      left: 0;
      text-align: center;
    }
    .nav-social-media {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {

    ul.navbar-nav > li.nav-item:first-child:active > a, 
    ul.navbar-nav > li.nav-item:first-child:hover > a {
      padding-left: 5px;
      /* padding-right: 0px; */
    }
  }

</style>
