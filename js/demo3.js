//以下版本watch太复杂了，重复性命令
// let app = new Vue({
//     el:"#app",
//     data: {
//         firstName:"json",
//         lastName:"Fu",
//         fullName:"json Fu"
//     },
//     watch:{
//         firstName(val){
//             this.fullName = val+' '+this.lastName
//         },
//         lastName(val){
//             this.fullName = this.firstName+' '+val
//         }
//     }
// });

//
let app = new Vue({
    el:"#app",
    data: {
        firstName:"json",
        lastName:"Fu"
    },
    computed:{
        fullName: {
            get(){
                return this.firstName+' '+this.lastName
            },
            set(newValue){
                var names = newValue.split(" ");
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
            
        }
    }
});

let app2 = new Vue({
    el: "#app-2",
    data: {
        question:'',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch:{
        question(newQuestion, oldQuestion){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer();
        }
    },
    created(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer(){
            if(this.question.indexOf("?") === -1) {
                this.answer = "Questions usually contain a question mark. ;-"
                return
            }
            this.answer = "Thinking..."
            axios.get("https://yesno.wtf/api")
                .then((response)=>{
                    this.answer = _.capitalize(response.data.answer)
                })
                .catch((error)=>{
                    this.answer = "Error!Could not reach the API." + error
                })
        }
    }
});