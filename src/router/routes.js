import Home from '../view/Home.vue';
import AddTask from '../view/AddTask.vue';
import EditTask from '../view/EditTask.vue';

export default [
    { path: '/', component: Home },
    { path: '/addtask', component: AddTask },
    { path: '/edittask/:index', component: EditTask },
    { path: '*', component: Home }
]