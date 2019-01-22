<template>
	<div class="content">
        <div class="cart">
            <div class="cart-list">
                <div v-for="(item, index) in products"
                :key="index"
                class="cart-list__item">
                    <div class="cart-list__item-photo">
                        <img src="../assets/img/example_1.jpg" alt="">
                    </div>
                    <div class="cart-list__item-info">
                        <div class="tag-list"><span>Accessories, Baby Boy, Baby Girl, Blue Jeans, Bottoms</span></div>
                        <div class="name"><span>contrast embroidered top</span></div>

                        <div class="action">
                            <div class="count">
                                <div class="count__item count__item_minus">-</div>
                                <div class="count__item count__item_number">1</div>
                                <div class="count__item count__item_plus">+</div>
                            </div>
                            <div class="price"><span>49.99$</span></div>
                        </div>
                    </div>

                    <div class="delete">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data: () => ({
        products: [
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_1.jpg',
                discount: '-25%'
            },
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_2.jpg'
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
.cart-list {
    width: 100%;
    max-width: 800px;
    margin-top: 50px;
    padding: 20px;
    background-color: #fff;

    &__item {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 20px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #eee;

        &:last-child {
            margin-bottom: 0;
        }

        &-photo {
            position: relative;
            overflow: hidden;
            height: 200px;
            width: 170px;
            margin-right: 20px;

            img {
                height: 100%;
                width: auto;
            }
        }

        &-info {
            .tag-list {
                color: #999;
            }

            .name {
                margin: 10px 0 20px 0;
                text-transform: uppercase;
                font-size: 24px;
            }

            .action {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }

            .price {
                margin-left: 40px;
                font-family: 'Quicksand', sans-serif;
                font-size: 40px;
            }
        }

        .delete {
            position: absolute;
            right: 15px;
            top: 0px;
            font-size: 40px;
            color: #999;
            cursor: pointer;
            transform: rotate(45deg);
            transition: 180ms ease;

            &:hover {
                color: #222;
            }
        }
    }
}

.count {
    display: flex;
    align-items: center;

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 11px 17px;
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
        color: #222;
        background-color: #fff;
        border: 1px solid #f9f9f9;
        border-right-color: transparent;
        cursor: pointer;
        transition: 180ms ease;

        &:hover {
            border-color: #4763ab;
        }

        &_plus {
            border-right-color: #f9f9f9;
        }
    }
}
</style>
