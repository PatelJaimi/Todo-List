<template>
  <div>
    <table>
      <tr>
        <th scope="col" colspan="2">Task</th>
        <th scope="col">Priority</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>
          <input
            type="checkbox"
            class="check"
            :value="task.status"
            v-model="task.status"
          />
        </td>
        <td :class="{ undone: task.status == 'Done' }">
          {{ task.name }}
        </td>
        <td v-textColor="task.priority">
          {{ task.priority }}
        </td>
        <td>
          {{ task.status | chtext }}
        </td>
        <td>
          <button class="deleteBtn" @click="deleteTask(index)">
            <!-- <i class="fa fa-trash" aria-hidden="true"></i> -->
            Delete
          </button>
          <button>
            <!-- <i class="fa fa-pencil" aria-hidden="true"></i> -->
            <router-link :to="editTaskLink(index)" class="editBtn"
              >Edit</router-link
            >
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import taskMixins from "../mixins/taskMixins";

export default {
  name: "Showtask",
  props: ["tasks"],
  mixins: [taskMixins],
  mounted() {
    let i = 0;
    while (i < this.tasks.length) {
      if (this.tasks[i].status == "Undone") {
        this.tasks[i].status = false;
      }
      i++;
    }
  },
  updated() {
    let i = 0;
    while (i < this.tasks.length) {
      if (this.tasks[i].status == true) {
        this.tasks[i].status = "Done";
      }
      i++;
    }
  },
};
</script>

<style scoped>
table {
  width: 70%;
  margin: 30px auto;
  text-align: left;
  color: #fff;
}
table tr th {
  font-weight: 900;
  padding: 20px 12px;
  font-size: 18px;
  border-bottom: 1px solid #d28eff;
}
table tr td {
  font-size: 16px;
  padding: 12px;
  font-weight: 500;
}
table tr td .check {
  height: 25px;
  width: 25px;
  color: #000;
}
table tr td .check:checked {
  background: red;
  color: white;
}
table tr td button {
  border: none;
  color: #fff;
  width: 70px;
  font-size: 13px;
  font-weight: bolder;
  border-radius: 12px;
  cursor: pointer;
  margin: 0px 10px;
}
table tr td .deleteBtn {
  background: #ff5656;
  padding: 5px 10px;
}
table tr td .editBtn {
  background: #32d400;
  text-decoration: none;
  color: #fff;
  display: block;
  border-radius: 12px;
  padding: 5px 10px;
}
table tr td .deleteBtn:hover {
  background: #ff3131;
}
table tr td .editBtn:hover {
  background: #29af00;
}
.undone {
  text-decoration: line-through;
}
</style>