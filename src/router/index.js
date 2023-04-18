import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: '/',
        name: 'tansaction.index',
        component: () => import("../views/transaction/index.vue")
    },

    {
        path: '/about',
        name: 'tansaction.about',
        component: () => import("../views/transaction/about.vue")
    },

    {
        path: '/contact',
        name: 'tansaction.contact',
        component: () => import("../views/transaction/contact.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;