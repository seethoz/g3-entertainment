<template>
  <div class="footer">
    <div class="contact-me-btn-wrapper d-flex flex-column justify-content-center py-5 align-items-center">
      <h3 class="pb-3">Contact Me</h3>
      <button class="contact-me-button px-5 py-2">contact me</button>
    </div>
    <div class="container py-3">
      <div class="row contact my-5">
        <div class="col-md-6 services mb-5">
          <h4 class="mb-lg-3 mb-sm-1">Services</h4>
          <div class="subscribe-wrapper d-flex flex-row">
            <div class="email-wrapper d-flex flex-column">
              <input type="text" placeholder="enter your email address">
              <p class="email-disclaimer">&#42;We will not share your email</p>
            </div>
            <button class="ml-5 subscribe-btn px-3 py-2">subscribe</button>
          </div>
        </div>
        <div class="col-md-6 contact-me-wrapper mx-sm-auto">
          <h4 class="mb-lg-3 mb-sm-1">Contact Me</h4>
          <div class="contact-me d-flex flex-column">
            <p class="mb-1">bonifaceosoro@gmail.com</p>
            <p>+254-4827-7450</p>
          </div>
          <div class="footer-social d-flex flex-row justify-content-space-between w-100 py-3">
            <a href="https://www.facebook.com/bonface.nyangau.1" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UCbJdFhlo2Po-nq76VQg4YKA/videos" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/born.hee/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="row made-by mt-5">
        <div class="col-md-6 coder">
          <small>Copyright &#169; {{year}} All rights reserved | Made with love by <a href="https://sethmwebi.netlify.app" target="_blank">seth</a></small>
        </div>
        <div class="col-md-6 d-flex w-100 flex-row nav-footer">
          <router-link :to="{name: 'Home'}" tag="a">Home</router-link>
          <router-link :to="{name: 'About'}">About</router-link>
          <router-link :to="{name: 'Tracks'}">Tracks</router-link>
          <router-link :to="{name: 'Contact'}">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
  }
</script>

<style scoped>
  * {
    margin: 0;
    box-sizing: border-box;
  }
  .footer {
    height: 150%;
    width: 100%;
    background-color: #07020D;
    color: whitesmoke;
  }
  .contact-me-button {
    background-color: #FB3640;
    color: inherit;
    border: none;
    transition: background-color .6s;
  }
  .contact-me-button:hover {
    background-color: transparent;
    color: #FB3640;
    border: 1px solid #FB3640;
  }
  .services input {
    outline: 0;
    border-width: 0 0 2px;
    background-color: inherit;
    color: whitesmoke;
  }
  .services input:focus {
    border-color: green;
  }
  .subscribe-btn {
    background-color: #FB3640;
    color: inherit;
    border: none;
  }
  .email-disclaimer {
    margin-top: -2px;
    font-size: 50%;
  }
  .contact-me>p:hover {
    cursor: pointer;
    color: #FB3640;
  }
  /* style footer social icons */
  .footer-social .fa-facebook-f,
  .footer-social .fa-youtube,
  .footer-social .fa-instagram {
    margin-right: 30px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    color: whitesmoke;
    padding: 5px;
  }

  .footer-social .fa-facebook-f {
    border: 1px solid #3b5998;
    background-color: #3b5998; 
  }
  .footer-social .fa-youtube {
    border: 1px solid #c4302b;
    background-color: #c4302b;
  }
  .footer-social .fa-instagram {
    border: 1px solid #3f729b;
    background-color: #3f729b;
  }
  .made-by .coder a {
    color: #FB3640;
  }
  /* style nav-links at the footer */
  .nav-footer a {
    color: whitesmoke;
    margin: 0 auto;
  }
  .nav-footer a:hover {
    text-decoration: none;
    color: #FB3640;
  }
  /* media screens */
  @media (max-width: 767.98px) { 
    .contact-me-wrapper,
    .services {
      margin: 0 auto;
    }
    .made-by .coder small {
      text-align: center;
      margin: 0 auto;
    }
  }
</style>