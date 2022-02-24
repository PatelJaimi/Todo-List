<template>
  <div class="container">
    <slot name="title"></slot>
    <div class="form">
      <label for="taskName">Task Name</label>
      <input type="text" id="taskName" v-model="task.name" />

      <label>Priority </label>
      <div class="radioBtn">
        <input
          type="radio"
          name="priority"
          id="high"
          value="High"
          v-model="task.priority"
        />
        <label for="high">High</label>
        <input
          type="radio"
          name="priority"
          id="medium"
          value="Medium"
          v-model="task.priority"
        />
        <label for="medium">Medium</label>
        <input
          type="radio"
          name="priority"
          id="low"
          value="Low"
          v-model="task.priority"
        />
        <label for="low">Low</label>
      </div>
      <button id="btn" @click="takeAction()">
        <slot name="btn"></slot>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: ["addTask", "task", "editTask", "name"],
  data() {
    return {};
  },
  methods: {
    //on submit method
    takeAction() {
      //submit foe update task
      if (this.name == "Edit Task") {
        this.editTask();
      }
      //submit for add task
      else if (this.name == "Add Task") {
        this.addTask();
      }
      //error
      else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
div.container {
  color: #fff;
  margin-top: 40px;
}
.form {
  box-shadow: 0px 0px 3px 1px #d7beff;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  background: #fbf8ff;
  width: 600px;
  padding: 40px;
  margin: 0px auto;
}
.form label {
  color: blueviolet;
}
.form input#taskName {
  width: 90%;
  padding: 8px 10px;
  margin: 8px 0px 30px 0px;
  border: none;
  box-shadow: 0px 0px 1px 1px #c5a2ff;
  outline: none;
  font-size: 15px;
  color: darkblue;
}
.form .radioBtn input {
  margin: 12px 10px 40px 40px;
  width: 15px;
  height: 15px;
}
.form #btn {
  border: none;
}
.form #btn span {
  padding: 10px;
  display: block;
  border-radius: 14px;
  width: 150px;
  font-size: 15px;
  font-weight: bolder;
  color: #fff;
  background: #2cbd00;
  cursor: pointer;
}
.form #btn span:hover {
  background: #259e00;
}
</style>