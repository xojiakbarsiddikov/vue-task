import{ createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home";

const routes = [
    {
      path: '/',
      component: Home
    }
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;