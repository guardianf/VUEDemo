    let app = new Vue({
      el: "#app",
      data: {
        message: "hello vue"
      }
    });
    let changeContent = ()=>{
      app.$data.message = "hello again"
    }
    let app3 = new Vue({
      el: "#app-3",
      data: {
        seen: true
      }
    })
    let hide_seen = ()=>{
      app3.seen = false;
    }
    let app4=new Vue({
      el: "#app-4",
      data: {
        todos: [
          {text:"learnning JavaScript"},
          {text:"learnning Vue"},
          {text:"learnning the whole project"}
        ]
      }
    });
    let app5=new Vue({
      el: "#app-5",
      data: {
        message: "Hello Vue.js!"
      },
      methods: {
        reverseMessage: function() {
          this.message = this.message.split("").reverse().join("")
        }
      }
    });
    let app6 = new Vue({
      el: "#app-6",
      data: {
        message: "Hello Vue.js!"
      }
    })
    Vue.component("todo-item", {
      template: "<li>这个是待办事项</li>"
    });
    Vue.component("todo-item", {
      props: ["todo"],
      template: "<li>{{todo.text}}</li>"
    });

    let app7 = new Vue({
      el: "#app-7",
      data: {
        groceryList: [
          {id: 0, text: "蔬菜"},
          {id: 1, text: "奶酪"},
          {id: 2, text: "随便其它什么人吃的东西"}
        ]
      }
    });
    let app8_obj = {
      foo: "bar"
    };
//     Object.freeze(app8_obj)
    let app8 = new Vue({
      el: "#app-8",
      data: app8_obj
    });
    let app9 = new Vue({
        el: "#app-9",
        data:{a:1},
        created(){
            console.log('a is: ' + this.a)
        }
    })