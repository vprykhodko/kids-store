<template>
	<div class="content">
        <div class="product">
            <div class="grid">
                <div class="product__image">
                    <img src="../assets/img/example_1.jpg" alt="" width="100%">
                    <div class="discount"><span>-25%</span></div>
                </div>

                <div class="product__info">
                    <div class="product__info_presence color-red"><span>Есть в наличии</span></div>
                    <div class="product__info_code"><span>874182413</span></div>

                    <div class="product__info_name"><span>contrast embroidered top</span></div>
                    
                    <div class="product__info_type">
                        <span>Теги:</span>
                        <span>Accessories, Baby Boy, Baby Girl, Blue Jeans, Bottoms</span>
                    </div>
                    <div class="product__info_brand">
                        <span>Торговая марка:</span>
                        <span>Carter’s</span>
                        <span>Украина</span>
                    </div>
                    <div class="product__info_sex">
                        <span>Пол:</span>
                        <span>Мальчики</span>
                        <span>3-6 лет</span>
                    </div>
                    <div class="product__info_consist">
                        <span>Состав:</span>
                        <span>Water</span>
                    </div>
                    
                    <div class="buy-grid">
                        <div class="product__info_price"><span>49.00$</span></div>
                        <button class="button button_blue">
                            <span class="icon-basket icon"></span>
                            <span>Купить</span>
                        </button>
                    </div>

                    <div class="product__info_color">
                        <span>Цвет:</span>
                        <SelectBox :options="['Blue', 'Red', 'Green']"
                        direction="bottom" />
                    </div>
                    <div class="product__info_size">
                        <span>Размер:</span>
                        <div class="size-list">
                            <a href="#" class="size-list__item"><span>S</span></a>
                            <a href="#" class="size-list__item"><span>M</span></a>
                            <a href="#" class="size-list__item"><span>L</span></a>
                        </div>
                    </div>

                    <div class="product__info_description">
                        <h3>Описание:</h3>
                        <span>This dress, initially meant for girls 8 to 11 is a perfect garment for both school hours and going out with parents or meeting friends anywhere. The coloring scheme is available in 5 options, with this one being sun-rich, Halloween-like orange. With the materials being primarily cotton and spandex, this one will be both comfortable and allergy-free.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectBox from '../components/SelectBox.vue'

export default {
    name: 'Product',
    components: {
        SelectBox
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.product {
    margin-top: 50px;
    padding: 50px;
    background-color: #fff;

    &__image {
        position: relative;
        width: 100%;
        max-width: 500px;
    }

    &__info {
        width: 100%;
        padding-left: 50px;

        &_code {
            margin: 5px 0;
            color: #999;
        }

        &_name {
            margin: 20px 0;
            text-transform: uppercase;
            font-size: 34px;
        }

        &_type, &_brand, &_sex, &_consist {
            margin: 5px 0;

            span {
                margin-right: 5px;
            }
        }

        .buy-grid {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 20px 0;
        }

        &_price {
            margin-right: 30px;
            font-family: 'Quicksand', sans-serif;
			font-size: 60px;
        }

        &_color {
            margin: 20px 0;
            
            span {
                display: block;
                margin-bottom: 10px;
            }
        }

        &_description {
            margin-top: 30px;
            line-height: 1.5;

            h3 {
                margin-bottom: 10px;
            }
        }
    }
}

.size-list {
    display: flex;
    align-items: center;
    padding-top: 10px;

    &__item {
        display: flex;
        margin-right: 6px;
        padding: 11px 17px;
        font-family: 'Quicksand', sans-serif;
        color: #222;
        background-color: #fff;
        border: 1px solid #f9f9f9;
        cursor: pointer;
        transition: 180ms ease;

        &:hover {
            border-color: #4763ab;
        }

        span {
            margin: auto;
        }
    }
}
</style>
