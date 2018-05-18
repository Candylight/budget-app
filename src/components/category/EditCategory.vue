<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit Category
                <router-link :to="{ name: 'ShowCategory', params: { id: category._id } }">
                    (Show Category)
                </router-link>
            </h2>
            <b-form @submit="onSubmit">
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Name">
                    <b-form-input id="name" :state="state" v-model.trim="category.name"></b-form-input>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Description">
                    <b-form-textarea id="description"
                                     v-model="category.description"
                                     placeholder="Enter Description"
                                     :rows="2"
                                     :max-rows="6">{{category.description}}</b-form-textarea>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>

import axios from 'axios';
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'EditCategory',
  data() {
    return {
      category: {},
    };
  },
  components: {
    Datepicker,
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
    onSubmit(evt) {
      evt.preventDefault();
      axios.put(`http://localhost:3000/category/${this.$route.params.id}`, this.category)
        .then(() => {
          this.$router.push({
            name: 'ShowCategory',
            params: { id: this.$route.params.id },
          });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
