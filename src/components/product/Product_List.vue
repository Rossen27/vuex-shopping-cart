<template>
    <div class="container is-fluid">
        <div class="tile is-ancestor row row-cols-1 row-cols-md-3 g-4">
            <div class="tile is-parent col" v-for="productItem in productItems" :key="productItem.id">
                <ProductListItem :productItem="productItem" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Product_List_Item from './Product_List_Item'
export default {
    name: "ProductList",
    components: {
        ProductListItem: Product_List_Item
    },
    computed: {
        ...mapGetters([
            'productItems'
        ])
    },
    created() {
        this.$store.dispatch('getProductItems');
    }
};
</script>
