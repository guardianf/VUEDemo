let app = new Vue({
    el: "#app",
    data: {
        msg: "app"
    }
});
let app2 = new Vue({
    el: "#app-2",
    data: {
        msg: "app2"
    }
});
let app3 = new Vue({
    el: "#app-3",
    data: {
        rawHtml:"<span style='color:red;'>This should be red.</span>",
        dynamicId: "id1",
        isButtonDisabled: "true"
    }
});
let app4 = new Vue({
    el: "#app-4",
    data: {
        number: 2,
        ok: true,
        message: "This is a message",
        id: "id1",
        seen: false
    } 
});
let app5 = new Vue({
    el: "#app-5",
    data: {
        url: "http://www.baidu.com"
    },
    methods: {
        dosomething(){
            console.log("do some thing")
        }
    }
});
let app6 = new Vue({
    el: "#app-6",
    methods: {
        onSubmit(){
            console.log("onSubmit");
        }
    }
});
let app7 = new Vue({
    el: "#app-7",
    data: {
        message: "Hello"
    },
    computed: {
        reversedMessage(){
            return this.message.split("").reverse().join("")
        }
    }
});
let app8 = new Vue({
    el: "#app-8",
    data:{
        message: "this is a message"
    },
    methods:{
        reversedMessage(){
            return this.message.split('').reverse().join('')
        }
    },
    computed:{
        now(){
            return Date.now();
        }
    }
})