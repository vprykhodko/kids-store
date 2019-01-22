<template>
	<div class="product-preview">
		<div class="product-preview__photo">
			<img src="../assets/img/example_1.jpg" alt="" width="100%">
			<div class="discount" v-if="discount"><span>{{discount}}</span></div>
		</div>

		<div class="product-preview__info">
			<div class="product-preview__info-type"><span>{{types}}</span></div>
			<div class="product-preview__info-name"><span>{{name}}</span></div>
			<div class="product-preview__info-price"><span>{{price}}</span></div>

			<div class="product-preview__action">
				<div class="link link_buy">
					<span class="icon-basket icon"></span>
					<span>Купить</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductPreview',
	props: {
		name: String,
		types: Array,
		price: String,
		image: String,
		discount: String
	}
}
</script>

<style lang="scss" scoped>
.product-preview {
	cursor: pointer;

	&:hover {
		.product-preview__photo {
			filter: opacity(70%);
		}
		.product-preview__action {
			top: 0;
		}
	}

	&__photo {
		position: relative;
		transition: 180ms ease;
	}

	&__info {
		position: relative;
		overflow: hidden;
		margin-top: 10px;
		text-align: center;
		cursor: pointer;

		&-type {
			margin-bottom: 5px;
			font-size: 12px;
			color: #999;
		}

		&-name {
			margin-bottom: 5px;
			font-size: 16px;
			text-transform: uppercase;
			color: #222;
		}

		&-price {
			font-family: 'Quicksand', sans-serif;
			font-size: 26px;
			color: #222;
		}
	}

	&__action {
		position: absolute;
		top: 100%;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: #fff;
		transition: 180ms ease;
	}
}

.link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    font-size: 16px;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 180ms ease;

    &_buy {
        width: 100%;
        color: #4763ab;

        &:hover {
            color: #ff787f;
        }

        .icon {
            margin-right: 5px;
            font-size: 20px;
        }
    }
}
</style>
