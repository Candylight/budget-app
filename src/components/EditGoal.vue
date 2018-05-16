<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit Goal
                <router-link :to="{ name: 'ShowGoal', params: { id: goal._id } }">
                    (Show Goal)
                </router-link>
            </h2>
            <b-form @submit="onSubmit">
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Name">
                    <b-form-input id="name" :state="state" v-model.trim="goal.name"></b-form-input>
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
                    <b-form-input id="cost" :state="state" v-model.number="goal.cost">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="fieldsetHorizontal"
                              horizontal
                              :label-cols="4"
                              breakpoint="md"
                              label="Enter Limit Date">
                    <datepicker  id="limit_date" :state="state" v-model.trim="goal.limit_date">
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
  name: 'EditGoal',
  data() {
    return {
      goal: {},
    };
  },
  components: {
    Datepicker,
  },
  created() {
    axios.get(`http://localhost:3000/goal/${this.$route.params.id}`)
      .then((response) => {
        this.goal = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios.put(`http://localhost:3000/goal/${this.$route.params.id}`, this.goal)
        .then(() => {
          this.$router.push({
            name: 'ShowGoal',
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
