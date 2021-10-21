import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/components/Home.vue";
import About from "/src/components/About.vue";
import Projects from "/src/components/Projects.vue";
import Skills from "/src/components/Skills.vue";
import Resume from "/src/components/Resume.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;