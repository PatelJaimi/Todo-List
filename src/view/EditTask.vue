<template>
  <div>
    <Header>
      <router-link to="/" class="changeLink">Show Task</router-link>
    </Header>
    <TaskForm :task="task" :editTask="editTask" :name="name">
      <h1 slot="title">{{ name }}</h1>
      <span slot="btn">Edit task</span>
    </TaskForm>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import TaskForm from "../components/TaskForm.vue";

import taskMixins from "../mixins/taskMixins.js";

export default {
  name: "EditTask",
  props: ["tasks"],
  components: {
    Header,
    TaskForm,
  },
  mixins: [taskMixins],
  data() {
    return {
      name: "Edit Task",
      index: this.$route.params.index,
    };
  },
  computed: {
    task() {
      return this.tasks[this.index];
    },
  },
};
</script>
