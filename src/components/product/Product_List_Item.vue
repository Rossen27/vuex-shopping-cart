<template>
    <div class="card" style="width: 18rem;">
        <div class="card-content card-body">
            <div class="content">
                <div class="media-content">
                    <img class="card-img-top" :src="parseImgPath(productItem.pic)" alt />
                    <!-- 照片 -->
                </div>
                <br>
                <h4 class="card-title">{{ productItem.title }}</h4>
                <p class="card-text">{{ productItem.description }}</p>
            </div>
            <div class="media">
                <div class="media-right card-text d-flex bd-highlight mb-3">
                    <button class="button is-rounded is-pulled-left me-auto p-2 bd-highlight" @click="addCartItem(productItem)">
                        <strong>加入購物車</strong>
                    </button>
                    <br />
                    <a class="button is-primary is-light p-2 bd-highlight">
                        <strong>$ {{ productItem.price }}</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: "ProductListItem",
    props: ["productItem"],
    methods: {
        ...mapActions(["addCartItem"]),
        parseImgPath(path) {
            return `http://localhost:8080${path}`;
        }
    },
};
</script>
