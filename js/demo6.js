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
        },
        onScroll(){
            console.log('onscroll')
        },
        submit(e){
            let key = e.keyCode||e.which
            alert(key+':'+e.target.value)
        },
        changeModified(){
            Vue.config.keyCodes.f1 = 112;
        },
        onPageDown(){
            alert('pagedown')
        },
        clear(){
            console.clear();
        },
        onClick(){
            alert('on click')
        },
        onCtrlClick(){
            alert('on ctrl click')
        },
        onLeftClick(){
            alert('on mouse left click')
        },
        onRightClick(){
            alert('on mouse right click')
        },
        onMiddleClick(){
            alert('on mouse middle click')
        }
    }
})