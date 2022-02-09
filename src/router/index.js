import VueRouter from "vue-router";
import Vue from "vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import ItemsView from "../views/ItemsView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/news" },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
    { path: "/news", component: NewsView },
    { path: "/items/:id", component: ItemsView },
    { path: "/user/:id", component: UserView },
  ],
});
