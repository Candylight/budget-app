import Vue from 'vue';
import Router from 'vue-router';

import GoalList from '@/components/goal/GoalList';
import ShowGoal from '@/components/goal/ShowGoal';
import CreateGoal from '@/components/goal/CreateGoal';
import EditGoal from '@/components/goal/EditGoal';

import CategoryList from '@/components/category/CategoryList';
import ShowCategory from '@/components/category/ShowCategory';
import CreateCategory from '@/components/category/CreateCategory';
import EditCategory from '@/components/category/EditCategory';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list-goal',
      name: 'GoalList',
      component: GoalList,
    },
    {
      path: '/show-goal/:id',
      name: 'ShowGoal',
      component: ShowGoal,
    },
    {
      path: '/add-goal',
      name: 'CreateGoal',
      component: CreateGoal,
    },
    {
      path: '/edit-goal/:id',
      name: 'EditGoal',
      component: EditGoal,
    },
    {
      path: '/list-category',
      name: 'CategoryList',
      component: CategoryList,
    },
    {
      path: '/show-category/:id',
      name: 'ShowCategory',
      component: ShowCategory,
    },
    {
      path: '/add-category',
      name: 'CreateCategory',
      component: CreateCategory,
    },
    {
      path: '/edit-category/:id',
      name: 'EditCategory',
      component: EditCategory,
    },
  ],
});
