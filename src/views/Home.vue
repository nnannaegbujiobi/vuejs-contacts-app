<template>
  <div class="home">
    <div class="container">
    <h1>All Contacts</h1>
      
      <div v-for="contact in contacts">
        <h2>{{ contact.first_name }}</h2>
        <h3>{{ contact.last_name }}</h3>
        <h4>{{ contact.email }}</h4>
        <h5>{{ contact.phone_number }}</h5>
      </div>
      <input v-model="nameFilter" list="names" class="form-control" placeholder="Search contacts" type="text">
      </div>
      <div>
          <button v-on:click="setSortAttribute('first_name')" class="btn btn-primary">Sort by name</button>
          <button v-on:click="setSortAttribute('last_name')" class="btn btn-primary">Sort by phone_number</button>
        </div>
      
      <datalist id="names">
      <option v-for="contact in contacts">{{contact.first_name}}</option>
    </datalist>
    
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
      currentContact: {},
      nameFilter: "",
      sortAttribute: "name"
    };
  },

  created: function() {
    axios.get("http://localhost:3000/api/contacts").then(response => {
      console.log(response.data);
      this.contacts = response.data;
    });
  },
  setSortAttribute: function(attribute) {
    this.sortAttribute = attribute;
  }
};
</script>
