<template>
	<div id="app">
		<Header />
		<Shop />
		<Footer />
		<Socials />

		<a href="#" class="arrow-top"><span class="icon-arrow-up icon"></span></a>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Shop from './pages/shop.vue'
import Product from './pages/product.vue'
import Footer from './components/Footer.vue'
import Socials from './components/Socials.vue'

export default {
	name: 'app',
	components: {
		Header, Footer, Socials, Product, Shop
	}
}
</script>

<style>

</style>
