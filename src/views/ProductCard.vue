<template>
  <div class="card mb-4 shadow-sm">
    <img class="card-img-top" :src="product.imageUrl" loading="lazy" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <router-link
        type="button"
        class="card-link"
        :to="'/details/' + product.id"
        >Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>
