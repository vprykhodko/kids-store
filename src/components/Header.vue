<template>
	<header>
		<div class="content">
			<div class="header-contact">
				<a href="#" class="header-contact__item">
					<span class="icon-call-end icon"></span>
					<span>+38 (093) 22-187-43</span>
				</a>

				<div class="header-contact__item">
					<span class="icon-clock icon"></span>
					<span>7 days a week from 9:00 AM to 7:00 PM</span>
				</div>
			</div>
		</div>
		<div class="header">
			<div class="content flex">
				<div class="logo"><img src="../assets/img/logo.png" alt="" width="100%"></div>
				<ul class="header-nav">
					<li><a href="#">Главная</a></li>
					<li><a href="#">Младенцы</a></li>
					<li><a href="#">Мальчики</a></li>
					<li><a href="#">Девочки</a></li>
				</ul>
				<ul class="header-nav header-nav_right">
					<li>
						<a href="#">
							<span class="icon-magnifier icon"></span>
							<span>Поиск</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="icon-basket icon"></span>
							<span>Корзина</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss" scoped>
.header-contact {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
	list-style-type: none;
	font-size: 14px;

	&__item {
        color: #222;

        &:not(:last-child) {
            margin-right: 35px;
		}
		
		& >* {
			vertical-align: middle;
		}
	}

	.icon {
		font-size: 16px;
		margin-right: 6px;
	}
}

.header {
	background-color: #fff;
	
	.content {
		display: flex;
		justify-content: space-between;
	}
}

.logo {
	max-width: 240px;
	margin: auto 0;
}

.header-nav {
	display: flex;
	align-items: center;
	padding: 40px 0;
	list-style-type: none;
	font-size: 16px;

	li {
		vertical-align: middle;

		&:not(:last-child) {
			margin-right: 35px;
		}
	}

	a {
		font-weight: 400;
		text-transform: uppercase;
		color: #222;
	}

	.icon {
		font-size: 20px;
		margin-right: 10px;
	}
}
</style>
