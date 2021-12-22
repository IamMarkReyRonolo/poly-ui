import Vue from "vue";
import VueRouter from "vue-router";

import AccessDenied from "../components/ErrorComponents/AccessDenied.vue";
import NotFound from "../components/ErrorComponents/404.vue";

import Landing from "../views/Landing.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Developers from "../views/Developers.vue";
import Dashboard from "../views/Dashboard.vue";
import Lessons from "../views/Lessons.vue";
import Chapters from "../views/Chapters.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Landing,
	},
	{ path: "/signin", component: SignIn },
	{ path: "/signup", component: SignUp },
	{ path: "/developers", component: Developers },
	{ path: "/dashboard", component: Dashboard },
	{ path: "/lessons", component: Lessons },
	{ path: "/:lessonName/chapters", component: Chapters },

	{ path: "*", component: NotFound },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;