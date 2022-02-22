<template>
  <div>
    <Header>
      <router-link to="/addtask" class="changeLink">Add Task</router-link>
    </Header>
    <ShowTasks :tasks="tasks" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ShowTasks from "../components/ShowTasks.vue";

export default {
  name: "Home",
  props: ["tasks"],
  components: {
    Header,
    ShowTasks,
  },
};
</script>
