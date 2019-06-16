<template>
  <div>
    <button
      class="”Search__button”"
      @click="callRestService()"
    >CALL Spring Boot REST backend service</button>
    <h3>{{ response }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "service",
  data() {
    return {
      response: [],
      errors: []
    };
  },
  methods: {
    // Fetches posts when the component is created.
    callRestService() {
      axios
        .get(`/api/hello`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>