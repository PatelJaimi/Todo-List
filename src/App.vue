<template>
  <div id="app">
    <router-view :tasks="tasks"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tasks: [
        {
          name: "Give gift",
          priority: "Low",
          status: "Done",
        },
        {
          name: "Mail jaimi",
          priority: "Medium",
          status: "Done",
        },
        {
          name: "message Dhruvi",
          priority: "Medium",
          status: "Undone",
        },
        {
          name: "Call mom",
          priority: "High",
          status: "Undone",
        },
      ],
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
