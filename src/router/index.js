import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/view/Home.vue";
import About from "/src/view/About.vue";
import Projects from "/src/view/Projects.vue";
import Skills from "/src/view/Skills.vue";
import Resume from "/src/view/Resume.vue";

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