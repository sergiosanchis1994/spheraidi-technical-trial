<template>
  <div id="app">
    <nav class="navbar navbar-dark">
      <a class="navbar-brand">Sphera Global Health Care</a>
    </nav>
    <router-link v-if="authenticated" :to="{name:'login'}" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
  background-color: #007bff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  margin: 0;
}
</style>
