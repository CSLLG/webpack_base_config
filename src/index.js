const Vue = require('vue');
const Router = require('vue-router');
//import Vue = require('vue');
//import Router = requrie('vue-router');
import App from '@/app.vue';
import HelloWorls from '@/components/helloworld.vue'

new Vue({
	el: '#app',
	router: new Router({
		routes: [
			{
				path: '/',
				name: 'Helloworld',
				component: HelloWorld
			}
		]
	}),
	components: {App},
});