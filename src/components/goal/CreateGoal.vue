<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Add Goal
                <b-link href="#/list-goal">(Goal List)</b-link>
            </h2>
            <b-form @submit="onSubmit">
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Name">
                    <b-form-input id="name" v-model.trim="goal.name"></b-form-input>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Description">
                    <b-form-textarea id="description"
                                     v-model="goal.description"
                                     placeholder="Enter Description"
                                     :rows="2"
                                     :max-rows="6">{{goal.description}}</b-form-textarea>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Cost">
                    <b-form-input id="cost" v-model.number="goal.cost">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Category">
                    <b-form-select id="category" v-model="goal.category">
                        <option v-for="category in categories"
                                value="category._id">{{category.name}}
                        </option>
                    </b-form-select>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Limit Date">
                    <datepicker  id="limit_date" v-model.trim="goal.limit_date">
                    </datepicker>
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
  name: 'CreateGoal',
  data() {
    return {
      goal: {},
      categories: [],
    };
  },
  components: {
    Datepicker,
  },
  created() {
    axios.get('http://localhost:3000/category')
      .then((response) => {
        this.categories = response.data;
      },
      )
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.post('http://localhost:3000/goal', this.goal)
        .then((response) => {
          this.$router.push({
            name: 'ShowGoal',
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
