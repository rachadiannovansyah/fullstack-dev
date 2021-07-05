require('./bootstrap');
import Vue from 'vue';
import router from "./route";
import Index from "./Index";
import VueRouter from 'vue-router';

window.Vue = require('vue');
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index": Index,
    }
});
