import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/HomePage.vue'
import Notes from '../pages/NotesPage.vue'
import Chords from '../pages/ChordsPage.vue'
import Scales from '../pages/ScalesPage.vue'
import About from '../pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: "home", component: Home },
    { path: '/notes', name: "notes", component: Notes },
    { path: '/chords', name: "chords", component: Chords },
    { path: '/scales', name: "scales", component: Scales },
    { path: '/about', name: "about", component: About }
  ]
})

export default router
