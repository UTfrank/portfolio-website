import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Projects from '@/pages/Projects.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'

const routes = [
  { path: "/", component: Home},
  { path: "/about", component: About},
  { path: "/contact", component: Contact},
  { path: "/projects", component: Projects},
  { path: "/project/:id", component: ProjectDetail}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
