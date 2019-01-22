<template>
	<footer class="footer">
		<div class="content footer-content">
			<div class="footer-content__item footer-content__item_about">
				<h3>about</h3>
				<span>With all of our team members being happy parents themselves, we have the experience and the caring it takes to run the best clothing e-store for happy kids and happy parents. Our store has a real range of both the clothing and shoes, diverse enough in its styleing and size to fit for kids of all ages - starting with toddlers and infants, and finishing with middle schoolers and teens!</span>
			</div>

			<div class="footer-content__item">
				<h3>categories</h3>
				<ul class="tag-list">
					<div class="tag-list__column">
						<li><a href="#">Accessories</a></li>
						<li><a href="#">Baby Boy</a></li>
						<li><a href="#">Baby Girl</a></li>
						<li><a href="#">Blue Jeans</a></li>
						<li><a href="#">Bottoms</a></li>
					</div>
					<div class="tag-list__column">
						<li><a href="#">Accessories Baby Boy</a></li>
						<li><a href="#">Baby Boy Baby Boy</a></li>
						<li><a href="#">Baby Girl</a></li>
						<li><a href="#">Blue Jeans Baby Girl</a></li>
						<li><a href="#">Bottoms</a></li>
					</div>
				</ul>
			</div>

			<div class="footer-content__item footer-content__item_contacts">
				<h3>contacts</h3>

				<a href="#" class="contact">
					<span class="icon-call-end icon"></span>
					<span>+38 (093) 22-187-43</span>
				</a>

				<div class="contact">
					<span class="icon-clock icon"></span>
					<span>7 days a week from 9:00 AM to 7:00 PM</span>
				</div>

				<a href="#" class="contact">
					<span class="icon-envelope icon"></span>
					<span>info@demolink.org</span>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
	margin-top: 50px;
	background-color: #fff;
}

.footer-content {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 70px 0;
	
	&__item {
		width: 100%;
		max-width: 400px;

		&_about {
			span {
				font-size: 15px;
				color: #999;
			}
		}

		&_contacts {
			.contact {
				display: block;
				margin-bottom: 8px;
				font-size: 15px;

				& >* {
					vertical-align: middle;
				}
			}

			a {
				font-weight: 400;
				color: #222;
			}

			.icon {
				font-size: 20px;
				margin-right: 10px;
			}
		}
	}

	h3 {
		margin-bottom: 20px;
	}
}

.tag-list {
	display: flex;
	justify-content: space-between;

    li {
        margin-bottom: 8px;

        a {
            font-size: 14px;
            font-weight: 400;
            color: #999;
        }
    }
}
</style>
