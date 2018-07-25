Vue.component("vm-nav",{
    props: ["menu"],
    template: "<ol class='vm-nav'><li v-for='item in menu' @click='loadMenu'>{{item.text}}</li></ol>",
    methods:{
        loadMenu(){
            console.log(this.parent)
        }
    }
});
Vue.component("vm-content", {
    props: ["src"],
    template: "<iframe v-bind:src='src'></iframe>"
});
let app = new Vue({
    el: "#app",
    data: {
        menu: [
        {text:"menu1"},
        {text:"menu2"}
        ],
        src: ""
    },
    methods: {
        loadMenu(){
            console.log("loadmenu")
            let sina = "http://www.sina.com";
            let baidu = "http://www.baidu.com";
            this.src = this.src == sina?baidu:sina;
        }
    }
})