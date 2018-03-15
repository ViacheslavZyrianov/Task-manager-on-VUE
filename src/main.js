import Vue from 'vue'
import App from './App.vue'
import ToDo from './ToDo'
import Done from './Done'
import EditTask from './EditTask'
import FullTask from './FullTask'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'


Vue.component('to-do', ToDo);
Vue.component('done', Done);
Vue.component('icon', Icon);
Vue.component('edit-task', EditTask);
Vue.component('full-task', FullTask);

new Vue({
  el: '#task-manager',
  render: h => h(App)
});