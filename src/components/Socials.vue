<template>
	<div class="social-list">
		<a href="#" class="social-list__item social-list__item_facebook">
			<span class="icon-social-facebook icon"></span>
		</a>
		<a href="#" class="social-list__item social-list__item_twitter">
			<span class="icon-social-twitter icon"></span>
		</a>
		<a href="#" class="social-list__item social-list__item_plane">
			<span class="icon-paper-plane icon"></span>
		</a>
	</div>
</template>

<script>
export default {
	name: 'Socials'
}
</script>

<style lang="scss" scoped>
	.social-list {
		position: fixed;
		left: 0;
		top: 150px;

		&__item {
			display: flex;
			width: 40px;
			height: 40px;
			border-width: 1px;
			border-left: 0;
			border-style: solid;
			font-size: 18px;
			transition: 180ms ease;

			&:hover {
				background-color: #fff;
			}

			&:not(:last-child) {
				border-bottom: none;
			}

			&_facebook {
				color: #fff;
				border-color: #3b5998;
				background-color: #3b5998;
			}

			&_twitter {
				color: #fff;
				border-color: #1da1f2;
				background-color: #1da1f2;
			}

			&_plane {
				color: #fff;
				border-color: #0088cc;
				background-color: #0088cc;
			}

			.icon {
				margin: auto;
			}
		}
	}
</style>
