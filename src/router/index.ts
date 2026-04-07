import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Projects from '@/pages/Projects.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'
import Login from '@/pages/auth/Login.vue'
import AdminDashboard from '@/layouts/dashboard/AdminDashboard.vue'
import DashboardOverview from '@/pages/dashboard/DashboardOverview.vue'
import AdminProjects from '@/pages/dashboard/AdminProjects.vue'
import AdminSkills from '@/pages/dashboard/AdminSkills.vue'
import AdminWorkHistory from '@/pages/dashboard/AdminWorkHistory.vue'
import AdminSettings from '@/pages/dashboard/AdminSettings.vue'
import { supabase } from '@/libs/supabaseClient'

const routes = [
  { path: "/", component: Home},
  { path: "/about", component: About},
  { path: "/contact", component: Contact},
  { path: "/projects", component: Projects},
  { path: "/project/:id", component: ProjectDetail},
  { path: "/login", component: Login },
  { 
    path: "/admin", 
    component: AdminDashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: DashboardOverview
      },
      {
        path: 'projects',
        component: AdminProjects
      },
      {
        path: 'skills',
        component: AdminSkills
      },
      {
        path: 'work-history',
        component: AdminWorkHistory
      },
      {
        path: 'settings',
        component: AdminSettings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return next('/login')
    }
  }
  next()
})

export default router
