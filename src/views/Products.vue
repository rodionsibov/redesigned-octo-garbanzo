<template>
  <div style="padding: 25px">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductCard from '@/views/ProductCard.vue';

export default {
  computed: {
    ...mapGetters(['products']),
  },
  components: { ProductCard },
  methods: {
    ...mapActions(['getProducts', 'addCart', 'removeCart']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

