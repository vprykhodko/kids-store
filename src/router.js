import Vue from 'vue'
import Router from 'vue-router'

// import Subscribers from '@/views/Subscribers'
// import Subscriptions from '@/views/Subscriptions'
// import SubscriptionFilters from '@/views/SubscriptionFilters'
// import SubscriptionDefinitions from '@/views/SubscriptionDefinitions'
// import Page404 from '@/views/Page404'

Vue.use(Router)

const routes = {
	root: '/',
	subscribers: '/subscribers',
	subscriptions: '/subscriptions',
	subscriptionDefinition: '/subscription-definitions',
	subscriptionFilter: '/subscription-filters',
	page404: '/404'
}

Vue.prototype.$routes = routes

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	// routes: [
	// 	// main page
	// 	{
	// 		path: routes.root,
	// 		redirect: routes.subscriptions
	// 	},
	// 	{
	// 		path: routes.subscriptions,
	// 		component: Subscriptions
	// 	},
	// 	// other pages
	// 	{
	// 		path: routes.subscribers,
	// 		component: Subscribers
	// 	},
	// 	{
	// 		path: routes.subscriptionDefinition,
	// 		component: SubscriptionDefinitions
	// 	},
	// 	{
	// 		path: routes.subscriptionFilter,
	// 		component: SubscriptionFilters
	// 	},
	// 	// page 404
	// 	{
	// 		path: '*',
	// 		redirect: routes.page404
	// 	},
	// 	{
	// 		path: routes.page404,
	// 		component: Page404
	// 	}
	// ]
})
