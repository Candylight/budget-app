<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Add Category
                <b-link href="#/list-category">(Category List)</b-link>
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
  name: 'CreateCategory',
  data() {
    return {
      category: {},
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.post('http://localhost:3000/category', this.category)
        .then((response) => {
          this.$router.push({
            name: 'ShowCategory',
            params: { id: response.data._id },
          });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
