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
                        <div class="tag-list">
                            <span class="icon-tag icon"></span>
                            <span>Accessories, Baby Boy, Baby Girl, Blue Jeans, Bottoms</span>
                        </div>
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

            <div class="cart-panel">
                <div class="cart-panel_border">
                    <div class="cart-panel__item cart-panel__item_center">
                        <div class="cart-panel__item-subtitle"><span>Сумма заказа:</span></div>
                        <div class="cart-panel__item-total"><span>49.9$</span></div>
                    </div>

                    <div class="cart-panel__item">
                        <div class="cart-panel__item-subtitle"><span>Способ оплаты:</span></div>
                        <div class="cart-panel__item-selectbox">
                            <SelectBox :options="['Приват Банк', 'Sort by popularity']"
                            direction="bottom" />
                        </div>
                    </div>

                    <div class="cart-panel__item">
                        <div class="cart-panel__item-subtitle"><span>Способ доставки:</span></div>
                        <div class="cart-panel__item-selectbox">
                            <SelectBox :options="['Новая почта', 'Sort by popularity']"
                            direction="bottom" />
                        </div>
                    </div>

                    <div class="cart-panel__item cart-panel__item_center cart-panel__item_action">
                        <button class="button button_blue">
                            <span class="icon-wallet icon"></span>
                            <span>Оформить заказ</span>
                        </button>

                        <button class="button button_yellow">
                            <span class="icon-question icon"></span>
                            <span>Задать вопрос</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectBox from '../components/SelectBox.vue'

export default {
    name: 'Cart',
    components: {
        SelectBox
    },
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
.cart {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 50px;
}

.cart-list {
    width: 100%;
    min-width: 800px;
    margin-right: 50px;
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
            height: 160px;
            width: 130px;
            margin-right: 20px;

            img {
                height: 100%;
                width: auto;
            }
        }

        &-info {
            .tag-list {
                display: flex;
                align-items: center;
                color: #999;

                .icon {
                    margin-right: 10px;
                    font-size: 20px;
                }
            }

            .name {
                margin: 10px 0 50px 0;
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

.cart-panel {
    width: 100%;
    padding: 20px;
    background-color: #fff;

    &_border {
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid #eee;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        &_action {
            margin-top: 50px;

            .button {
                margin: 0 10px;
            }
        }

        &_center {
            justify-content: center;
        }

        &-subtitle {
            margin-right: 30px;
            font-size: 16px;
        }

        &-total {
            font-family: 'Quicksand', sans-serif;
            font-size: 40px;
        }

        &-selectbox {
            display: flex;
            justify-content: flex-end;
            width: 300px;
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
