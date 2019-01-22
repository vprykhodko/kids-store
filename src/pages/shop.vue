<template>
	<div class="content">
        <div class="grid">
            <div class="filter-list">
                <div class="filter-list__item">
                    <h4>categories</h4>
                    <ul class="tag-list">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Baby Boy</a></li>
                        <li><a href="#">Baby Girl</a></li>
                        <li><a href="#">Blue Jeans</a></li>
                        <li><a href="#">Bottoms</a></li>
                        <li><a href="#">Accessories Baby Boy</a></li>
                        <li><a href="#">Baby Boy Baby Boy</a></li>
                        <li><a href="#">Baby Girl</a></li>
                        <li><a href="#">Blue Jeans Baby Girl</a></li>
                        <li><a href="#">Bottoms</a></li>
                    </ul>
                </div>

                <div class="filter-list__item">
                    <h4>filter by size</h4>
                    <ul class="tag-list">
                        <li><a href="#">S (9)</a></li>
                        <li><a href="#">M (9)</a></li>
                        <li><a href="#">L (8)</a></li>
                        <li><a href="#">XL (2)</a></li>
                    </ul>
                </div>
            </div>

            <div class="shop">
                <h1>shop</h1>

                <div class="action-panel">
                    <SelectBox :options="['Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by newness', 'Sort by price: low to high', 'Sort by price: high to low']"
                    direction="bottom" />
                    
                    <div class="text"><span>Showing 1–10 of 20 results</span></div>
                    
                    <div>
                        <div class="sorting-item sorting-item_row"><span class="icon-list icon"></span></div>
                        <div class="sorting-item sorting-item_card"><span class="icon-grid icon"></span></div>
                    </div>
                </div>

                <div class="product-list">
                    <div v-for="(item, index) in products"
                    :key="index"
                    class="product-list__item">
                        <ProductPreview :name="item.name" :price="item.price" :types="item.types" :discount="item.discount" />
                    </div>

                    <div class="pages-nav">
                        <a href="#" class="pages-nav__item"><span>Previous</span></a>
                        <a href="#" class="pages-nav__item active"><span>1</span></a>
                        <a href="#" class="pages-nav__item"><span>2</span></a>
                        <a href="#" class="pages-nav__item"><span>3</span></a>
                        <a href="#" class="pages-nav__item"><span>Next</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectBox from '../components/SelectBox.vue'
import ProductPreview from '../components/ProductPreview.vue'

export default {
    name: 'Shop',
    components: {
        SelectBox, ProductPreview
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
            },
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_3.jpg',
                discount: '-30%'
            },
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_4.jpg'
            },
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_4.jpg'
            },
            {
                name: 'cable texture sweater',
                types: 'Accessories',
                price: '49.99$',
                image: '../assets/img/example_4.jpg'
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
.grid {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 50px;
    padding: 30px 0;
    background-color: #fff;
}

.filter-list {
    box-sizing: border-box;
    min-width: 300px;
    margin-right: 50px;
    padding: 0px 30px;
    border-right: 1px solid #eee;

    &__item {
        padding-top: 50px;
    }

    h4 {
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 20px;
		text-transform: uppercase;
    }
}

.tag-list {
    padding-bottom: 45px;
    border-bottom: 1px solid #eee;

    li {
        margin: 8px 0;

        a {
            font-size: 14px;
            font-weight: 400;
            color: #999;
        }
    }
}

.shop {
    width: 100%;
    padding: 20px 0;

    h1 {
        margin-top: 20px;
        padding: 0 20px;
    }
}

.action-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0 20px;

    .sorting-item {
        display: inline-flex;
        margin: 0 7px;
        width: 40px;
        height: 40px;
        font-size: 20px;
        background-color: transparent;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 180ms ease;

        &:hover {
            border-color: #4763ab;
            color: #4763ab;
        }

        .icon {
            margin: auto;
        }
    }
}

.product-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 80px;

    &__item {
        width: 29%;
        max-width: 400px;
        margin: 20px;
    }
}

.pages-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto 0;

    &__item {
        display: flex;
        margin: 3px;
        padding: 11px 17px;
        font-family: 'Quicksand', sans-serif;
        color: #222;
        background-color: #fff;
        border: 1px solid #f9f9f9;
        cursor: pointer;
        transition: 180ms ease;

        &:hover {
            background-color: #eee!important;
            border-color: #eee;
        }

        &.active {
            background-color: #f9f9f9;
        }

        span {
            margin: auto;
        }
    }
}

.button {
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
