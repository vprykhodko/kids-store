<template>
	<div id="app">
		<Header />
		<Cart />
		<Footer />
		<Socials />

		<a href="#" class="arrow-top"><span class="icon-arrow-up icon"></span></a>
	</div>
</template>

<script>
import Header from './components/Header.vue'
// import Shop from './pages/Shop.vue'
import Cart from './pages/Cart.vue'
// import Product from './pages/Product.vue'
import Footer from './components/Footer.vue'
import Socials from './components/Socials.vue'

export default {
	name: 'app',
	components: {
		Header, Footer, Socials, Cart
	}
}
</script>

<style>

</style>
