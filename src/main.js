// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(Buefy)

  ; [
    "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap",
    "https://fonts.googleapis.com/css2?family=Anton&display=swap",
  ].map((href) => {
    return head.link.push({rel: 'stylesheet', href})
  })
}
