require('./bootstrap');
//window.Vue = require('vue');
import Vue from 'vue'
import App from './components/App'

import AppNews from "./pages/News.vue";
import NewsSource from "./pages/NewsSource.vue";
import ExploreNews from "./pages/ReadNews.vue";
import SeeAllPage from "./pages/SeeAllPage.vue";
import CategorysPage from "./pages/CategorysPage.vue";


import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: AppNews,
        name: "home"
    },
    {
        path: "*",
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    },
    {
        path: "/explore",
        component: CategorysPage,
        name: "explore",
    },
    {
        path: "/explore/:source",
        component: NewsSource,
        props: true,
        name: "newssource",
    },
    {
        path: "/singlepage/:idPost",
        component: ExploreNews,
        props: true,
        name: "singlepage",
    },
    {
        path: "/seeall/:typeNews",
        component: SeeAllPage,
        props: true,
        name: "seeall",
    },

];

const router = new VueRouter({
    routes,
    mode: "history",
});

// window.onload = function () {
const app = new Vue({
    // router: Routes,
    router,
    render: h => h(App),
}).$mount('#app')
// }