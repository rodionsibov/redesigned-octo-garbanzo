<template>
    <div class="container" style="margin: 150px auto">
      <div class="row d-flex justify-content-center">
        <div class="text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img
              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
              width="100"
              alt=""
            />
          </div>
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <button
              @click="login()"
              type="submit"
              class="btn btn-primary btn-block"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(['login']),
  },
};
</script>

