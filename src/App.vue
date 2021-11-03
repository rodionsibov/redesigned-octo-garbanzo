<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <router-link class="navbar-brand" to="/">CS-eCommerce</router-link>
      <div class="ml-auto">
        <div v-if="user.photoURL">
          <img :src="user.photoURL" class="img-thumbnail profile-image" alt />
          <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
            <img
              src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
              width="50"
              alt
            />
            <span class="badge badge-danger badge-pill">
              {{ cart.length }}
            </span>
          </router-link>
        </div>
        <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">
          Login
        </router-link>
      </div>
    </nav>
    <div class="page-container" style="margin: 80px 0 0 0">
      <router-view />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user", "cart"]),
  },
};
</script>
