<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Goal List
                <b-link href="#/add-goal">(Add Goal)</b-link>
            </h2>
            <div>
                <info-card v-for="goal of goals"
                               :frontTitle= "goal.name"
                               :frontData="goal.description"
                               :backTitle="goal.name"
                               :backData="goal.description"/>
            </div>
            <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                    {{error.message}}
                </li>
            </ul>
        </b-col>
    </b-row>
</template>

<script>

import axios from 'axios';
import InfoCard from 'vue-info-card';

export default {
  name: 'GoalList',
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true, class: 'text-center' },
        description: { label: 'Description', sortable: true },
        actions: { label: 'Action', class: 'text-center' },
      },
      goals: [],
      errors: [],
    };
  },
  components: { InfoCard },
  created() {
    axios.get('http://localhost:3000/goal')
      .then((response) => {
        this.goals = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    details(goal) {
      this.$router.push({
        name: 'ShowGoal',
        params: { id: goal._id },
      });
    },
  },
};
</script>
