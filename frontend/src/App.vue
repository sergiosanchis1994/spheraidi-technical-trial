<template>
  <div id="app">
    <nav class="navbar navbar-dark">
      <a class="navbar-brand">Sphera Global Health Care</a>
    </nav>
    <div class="row main-container">
      <div class="col-md-2 menu"></div>
      <router-view class="col-md-10 menu" :to="{name:'chat'}"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
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

.menu {
  border: 5px solid #007bff;
  background-color: #e3f2fd;
}

.main-container {
  flex: 1;
  margin: 0;
}
</style>
