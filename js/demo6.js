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
app.greet();