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
        done: false,
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
    }


})