import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import UserList from "@/components/UserList.vue";
import AboutPage from '../views/About.vue';
import UserDetails from "@/components/UserDetails.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/users",
        name: "UserList",
        component: UserList,
    },
    {
        path: "/users/:userId",
        name: "UserDetails",
        component: UserDetails,
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;