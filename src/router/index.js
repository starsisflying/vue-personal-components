import Vue from 'vue';
import VueRouter from "vue-router";
import MyLoginButton1 from "../components/myLoginButton1/index"
Vue.use(VueRouter);
export default new VueRouter({
    routes:[{
        path:'/test',
        component:MyLoginButton1
    }]
})