import Vue from 'vue';
import Router from 'vue-router';
import GoalList from '@/components/GoalList';
import ShowGoal from '@/components/ShowGoal';
import CreateGoal from '@/components/CreateGoal';
import EditGoal from '@/components/EditGoal';

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
  ],
});
