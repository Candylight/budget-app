<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit Goal
                <b-link href="#/list-goal">(Goal List)</b-link>
            </h2>
            <b-jumbotron>
                <template slot="header">
                    {{goal.name}}
                </template>
                <template slot="lead">
                    Name: {{goal.name}}<br>
                    Description: {{goal.description}}<br>
                    Cost: {{goal.cost}}<br>
                    Category: {{category.name}}<br>
                    Limit Date: {{goal.limit_date}}<br>
                </template>
                <hr class="my-4">
                <b-btn variant="success" @click.stop="editgoal()">Edit</b-btn>
                <b-btn variant="danger" @click.stop="deletegoal()">Delete</b-btn>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ShowGoal',
  data() {
    return {
      goal: [],
      category: '',
    };
  },
  created() {
    axios.get(`http://localhost:3000/goal/${this.$route.params.id}`)
      .then((response) => {
        this.goal = response.data;
        axios.get(`http://localhost:3000/category/${this.goal.category}`)
          .then((res) => {
            this.category = res.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    editgoal() {
      this.$router.push({
        name: 'EditGoal',
        params: { id: this.$route.params.id },
      });
    },
    deletegoal() {
      axios.delete(`http://localhost:3000/goal/${this.$route.params.id}`)
        .then(() => {
          this.$router.push({
            name: 'GoalList',
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
