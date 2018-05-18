<template>
    <b-row>
        <b-col cols="12">
            <h2 style="text-align: center">
                Goal List
            </h2>
            <b-card-group columns>
                <b-card v-for="goal of goals"
                        :title="goal.name"
                        class="text-center">
                    <p class="card-text" v-if="goal.percent_done === 100">
                        Done !
                        <b-progress :value="goal.percent_done"
                                    variant="success"
                                    max=100 show-progress>
                        </b-progress>
                    </p>
                    <p class="card-text" v-else>
                        {{goal.description}}
                        <b-progress :value="goal.percent_done"
                                    variant="primary"
                                    max=100 show-progress>
                        </b-progress>
                    </p>
                    <b-btn size="sm" variant="primary" @click.stop="details(goal)">Details</b-btn>
                </b-card>
                <b-button href="#/add-goal"
                          size="lg"
                          variant="success"
                >
                    New Goal
                </b-button>
            </b-card-group>
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
