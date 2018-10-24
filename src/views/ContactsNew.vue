<template>
  <div class="contacts-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New Contact</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="first_name">
        </div>
        <div class="form-group">
          <label>LastName:</label>
          <input type="text" class="form-control" v-model="last_name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="text" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>PhoneNumber:</label>
          <input type="text" class="form-control" v-model="phone_number">
        </div>
                
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number:"",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last: this.last_name,
        email: this.email,
        phone_number: this.phone_number
      };
      axios
        .post("http://localhost:3000/api/products", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>