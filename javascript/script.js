const data = [
  {
    action: "fare spesa",
    done: false,
  },
  {
    action: "tagliare il prato",
    done: false,
  },
  {
    action: "lavare la macchina",
    done: true,
  },
  {
    action: "ordinare paperelle su amazon",
    done: false,
  },
];

function Todo(action) {
  this.action = action;
  this.done = false;
}

const app = new Vue({
  el: "#app",
  data: {
    todos: data,
    valueInput: "",
  },
    methods: {
      

        
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    changeDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    addTodo() {
      let stringClean = this.valueInput.trim();
      if (stringClean) {
        this.todos.push(new Todo(stringClean));
        this.valueInput = "";
        }
      else {
          console.error("PASSAGGIO STRINGA VUOTA");
        }
    },
  },
});
