import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ContactsNew from "./views/ContactsNew.vue";
import ContactsShow from "./views/ContactsShow.vue";
Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: "/Signup", name: "Signup", component: Signup },
    { path: "/Login", name: "Login", component: Login },
    { path: "/Logout", name: "Logout", component: Logout },
    { path: "/contacts/new", name: "contacts-new", component: ContactsNew },
    { path: "/contacts/:id", name: "contacts-show", component: ContactsShow },
  ]
});