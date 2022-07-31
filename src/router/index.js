import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Booking from "@/views/Booking.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
