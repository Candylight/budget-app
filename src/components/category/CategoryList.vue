<template>
    <b-row>
        <b-col cols="12">
            <h2 style="text-align: center">
                Category List
            </h2>
            <b-card-group columns>
                <b-card v-for="category of categories"
                        :title="category.name"
                        class="text-center">
                    <p class="card-text">
                        {{category.description}}
                    </p>
                    <b-btn size="sm" variant="primary" @click.stop="details(category)">
                        Details
                    </b-btn>
                </b-card>
                <b-button href="#/add-category"
                          size="lg"
                          variant="success"
                >
                    New Category
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
  name: 'CategoryList',
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true, class: 'text-center' },
        description: { label: 'Description', sortable: true },
        actions: { label: 'Action', class: 'text-center' },
      },
      categories: [],
      errors: [],
    };
  },
  components: { InfoCard },
  created() {
    axios.get('http://localhost:3000/category')
      .then((response) => {
        this.categories = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    details(category) {
      this.$router.push({
        name: 'ShowCategory',
        params: { id: category._id },
      });
    },
  },
};
</script>
