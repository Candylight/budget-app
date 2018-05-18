<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit Category
                <b-link href="#/list-category">(Category List)</b-link>
            </h2>
            <b-jumbotron>
                <template slot="header">
                    {{category.name}}
                </template>
                <template slot="lead">
                    Name: {{category.name}}<br>
                    Description: {{category.description}}<br>
                </template>
                <hr class="my-4">
                <b-btn variant="success" @click.stop="editcategory()">Edit</b-btn>
                <b-btn variant="danger" @click.stop="deletecategory()">Delete</b-btn>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ShowCategory',
  data() {
    return {
      category: [],
    };
  },
  created() {
    axios.get(`http://localhost:3000/category/${this.$route.params.id}`)
      .then((response) => {
        this.category = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    editcategory() {
      this.$router.push({
        name: 'EditCategory',
        params: { id: this.$route.params.id },
      });
    },
    deletecategory() {
      axios.delete(`http://localhost:3000/category/${this.$route.params.id}`)
        .then(() => {
          this.$router.push({
            name: 'CategoryList',
          });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style>
    .jumbotron {
        padding: 2rem;
    }
</style>
