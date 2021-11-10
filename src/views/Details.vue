<template>
  <div class="container" style="margin: 100px auto">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <img class="img-fluid" :src="product.imageUrl" alt />
      </div>
      <div class="col-md-6">
        <div class="display-3 mb-3">{{ product.name }}</div>
        <p class="">{{ product.content }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ product.price }}</p>
        </div>
        <AddToCart :product="product" v-if="user.uid" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "@/components/AddToCart.vue";

export default {
  data() {
    return {
      isInCardProp: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["product"]),
  },
  components: { AddToCart },
  methods: {
    ...mapActions(["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  },
};
</script>
