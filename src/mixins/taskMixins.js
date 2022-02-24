export default {
    methods: {
        //add task
        addTask: function() {
            if (this.task.name != '') {
                this.tasks.push(this.task)
                this.task = {
                    name: "",
                    priority: "",
                    status: "Undone",
                }
                alert("Task is Added.")
                this.$router.push('/')
            } else {
                alert("Please write a task name")
            }
        },
        //update task
        editTask() {
            this.tasks[this.index] = this.task
            alert("Your data is updated");
            this.$router.push('/')
        },
        //deletetask
        deleteTask(index) {
            if (confirm("do you want to detele task")) {
                this.tasks.splice(index, 1)
            }
        },
        //edit task link
        editTaskLink(index) {
            return '/edittask/' + index
        }
    }
}