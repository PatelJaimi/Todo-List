<template>
  <div>
    <Header>
      <router-link to="/" class="changeLink">Show Task</router-link>
    </Header>
    <!-- add task form -->
    <TaskForm :addTask="addTask" :task="task" :name="name">
      <h1 slot="title">{{ name }}</h1>
      <span slot="btn">Add task</span>
    </TaskForm>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TaskForm from "../components/TaskForm.vue";

import taskMixins from "../mixins/taskMixins.js";

export default {
  name: "AddTask",
  props: ["tasks"],
  components: {
    Header,
    TaskForm,
  },
  data() {
    return {
      name: "Add Task",
      task: {
        name: "",
        priority: "Low",
        status: "Undone",
      },
    };
  },
  mixins: [taskMixins],
};
</script>
