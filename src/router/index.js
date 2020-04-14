import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
