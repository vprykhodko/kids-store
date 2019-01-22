<template>
	<div class="dropdown" :class="getDirection" @blur="dropdown = false" tabindex="0">
		<div class="dropdown-button" @click="dropdown = !dropdown">
			<div class="dropdown-button__input" :class="{focus: dropdown, hasItem: activeItemIndex === ''}">{{selectedOption}}</div>
			<div class="icon-arrow-down" :class="{rotate: dropdown}"></div>
		</div>
		<transition name="dropdown">
			<div v-show="dropdown" class="dropdown-selectbox">
				<div class="arrow-decorate"></div>
				<ul class="dropdown-selectbox__nav">
					<li
						v-for="(item, index) in options"
						:key="index"
						:class="{active: activeItemIndex === index}"
						@click="toggleMemu(item, index)">
						{{item}}
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'SelectBox',
	props: {
		options: {
			type: Array,
			required: true
		},
		direction: {
			type: String
		}
	},
	data: () => ({
		dropdown: false,
		selectedOption: 'Default',
		activeItemIndex: ''
	}),
    methods: {
		toggleMemu (item, index) {
			this.selectedOption = item
			this.dropdown = !this.dropdown
			this.activeItemIndex = index
		}
    },
    computed: {
		getDirection () {
			switch (this.direction) {
				case "top":
					return {dropdown_top: true}
				case 'right':
					return {dropdown_right: true}
				case 'bottom':
					return {dropdown_bottom: true}
				case 'left':
					return {dropdown_left: true}
				default:
					return {dropdown_bottom: true}
			}
		}
    }
}
</script>

<style lang="scss">
.dropdown-enter-active, .dropdown-leave-active {
	transform: scaleY(1);
	opacity: 1;
}

.dropdown-enter, .dropdown-leave-to {
	transform: scaleY(0);
	opacity: 0;
}

.dropdown {
	width: 100%;
	max-width: 240px;
	position: relative;
	outline: none!important;
	z-index: 100;
	
	&_top {
		.dropdown-selectbox {
			transform-origin: center bottom 0px;
			bottom: 50px;
			left: 0;

			.arrow-decorate {
				bottom: -5px;
				left: 40px;
				transform: rotate(-135deg);
			}
		}
	}

	&_bottom {
		.dropdown-selectbox {
			transform-origin: center top 0px;
			top: 40px;
			left: 0;

			.arrow-decorate {
				top: 5px;
				left: 40px;
			}
		}
	}

	&_right {
		.dropdown-selectbox {
			transform-origin: center left 0px;
			top: -10px;
			left: calc(100% + 15px);

			.arrow-decorate {
				top: 25px;
				left: -5px;
				transform: rotate(-45deg);
			}
		}

		.dropdown-enter-active, .dropdown-leave-active {
			transform: scaleX(1);
		}

		.dropdown-enter, .dropdown-leave-to {
			transform: scaleX(0);
		}
	}

	&_left {
		.dropdown-selectbox {
			transform-origin: center right 0px;
			top: -10px;
			right: calc(100% + 15px);
			direction: rtl;

			.arrow-decorate {
				top: 25px;
				right: -5px;
				transform: rotate(135deg);
			}
		}

		.dropdown-enter-active, .dropdown-leave-active {
			transform: scaleX(1);
		}

		.dropdown-enter, .dropdown-leave-to {
			transform: scaleX(0);
		}
	}
}

.dropdown-selectbox {
	width: 100%;
	position: absolute;
	transition: ease 180ms;

	&__nav {
		max-height: 202px;
		overflow-y: auto;
		list-style: none;
		padding: 6px 0;
		margin: 10px 0 0 0;
		border: 1px solid #eee;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0 ,0, .1);
		z-index: 1;

		li {
			text-align: left;
			font-size: 14px;
			padding: 0 20px;
			position: relative;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #999;
			height: 34px;
			line-height: 34px;
			box-sizing: border-box;
			cursor: pointer;
			z-index: 3;

			&:hover {
				background-color: #f5f7fa;
			}
		}

		.active {
			color: #4763ab;
		}
	}
}

.arrow-decorate {
	position: absolute;
	width: 10px;
	height: 10px;
	transform: rotate(45deg);
	border-top: 1px solid #e4e7ed;
	border-left: 1px solid #e4e7ed;
	background-color: #fff;
	z-index: 2;
}

.dropdown-button {
	position: relative;

	.icon-arrow-down {
		cursor: pointer;
		transform: rotate(90deg);
		transition: ease 180ms;
		position: absolute;
		top: 50%;
		margin-top: -8px;
		right: 5px;
		height: 20px;
		width: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		font-size: 20px;
		color: #222;

		&:before {
			content: '>';
			display: block;
			transform: scaleX(0.4);
		}
	}

	&__input {
		cursor: pointer;
		background-color: #fff;
		background-image: none;
		border: 1px solid #eee;
		box-sizing: border-box;
		height: 40px;
		line-height: 40px;
		outline: none;
		padding: 0 28px 0 15px;
		width: 100%;
		user-select: none;
		font-size: 14px;
		text-align: left;
		color: #222;

		&:hover {
			border-color: #c0c4cc;
		}
	}
}

.focus {
	border-color: #4763ab!important;
}

.hasItem {
	color: #a7a7a7!important;
}

.rotate {
	transform: rotate(270deg)!important;
}
</style>
