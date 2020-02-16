import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/profile/profile.vue')
const Recommand = () => import('views/recommand/Recommand.vue')
const Video = () => import('views/video/Video.vue')
const Dj = () => import('views/dj/Dj.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'recommand'
      },
      {
        path: 'recommand',
        name: 'Recommand',
        component: Recommand
      },
      {
        path: 'video',
        name: 'Video',
        component: Video
      },
      {
        path: 'dj',
        name: 'Dj',
        component: Dj
      },
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
