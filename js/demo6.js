let app = new Vue({
    el: '#app-1',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet(e){
            alert('Hello' + this.name);
            if(e) {
                alert(e.target.tagName);
            }
        }
    }
});
// app.greet();

let app2 = new Vue({
    el: '#app-2',
    methods: {
        say(message){
            alert(message)
        },
        warn(message, event){
            if(event) event.preventDefault();
            alert(message);
        }
    }
});

let app3 = new Vue({
    el: '#app-3',
    methods: {
        doThis(){
            alert('dothis')
        },
        doThat(){
            alert('dothat')
        }
    }
})