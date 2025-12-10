"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("@ionic/vue-router");
const HomePage_vue_1 = require("../views/HomePage.vue");
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage_vue_1.default
    }
];
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes
});
exports.default = router;
