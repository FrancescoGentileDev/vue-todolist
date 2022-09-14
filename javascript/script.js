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
    errorString: false,
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
      let checkDuplicated = this.todos.find((value, index) => value.action === stringClean);

      if (stringClean && !checkDuplicated) {
        this.errorString = false;
        this.todos.push(new Todo(stringClean));
        this.valueInput = "";
      } else {
        this.errorString = true;
        console.error("PASSAGGIO STRINGA VUOTA O DUPLICATO");
      }
    },

    goUpTodo(index) {
      let tempTodoElement = this.todos[index];

      if (index > 0) {
        this.todos.splice(index, 1);
        this.todos.splice(index - 1, 0, tempTodoElement);
      }
    },

    goDownTodo(index) {
      let tempTodoElement = this.todos[index];

      if (index < this.todos.length) {
        this.todos.splice(index, 1);
        this.todos.splice(index + 1, 0, tempTodoElement);
      }
    },
  },
});
