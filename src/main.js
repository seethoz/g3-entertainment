import Vue from 'vue'
import App from './App.vue'

import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

require('./assets/css/main.css')

window.$ = require('jquery')
window.JQuery = require('jquery')

import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
