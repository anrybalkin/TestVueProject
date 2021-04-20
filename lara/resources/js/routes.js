import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter);

import NewsPageComponent from "./pages/News.vue";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: NewsPageComponent,
            meta: {
                titleKey: 'main',
            },
        },
    ]
});

export default router;