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
]

const app = new Vue({
    el: "#app",
    data: {
        todos: data,
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1)
        },
        changeDone(index) {
            this.todos[index].done = !this.todos[index].done
        }
    },

})