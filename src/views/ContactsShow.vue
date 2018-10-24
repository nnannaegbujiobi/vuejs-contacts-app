<template>
  <div class="Contacts-show">
    <div class="container">
      <h2>{{ contact.first_name }}</h2>
      <h3>{{ contact.last_name }}</h3>
      <h4>{{ contact.email }}</h4>
      <h5>{{ contact.phone_number }}</h5>

      <router-link to="/">Back to index</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var axios = require("axios");
export default {
  data: function() {
    return {
      contacts: [],
      newContact: {first_name:"",last_name:"",email:"",phone_number:""},
    };
  },

  created: function() {
    axios.get("http://localhost:3000/api/products" + this.$route.params.id).then(response => {
      this.products = response.data;
    });
  }
};

</script>