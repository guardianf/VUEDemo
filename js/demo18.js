/**
* 全局注册
**/
// Vue.directive('focus', {
//     inserted(el){
//         el.focus();
//     }
// });


let app1 = new Vue({
    el: '#app-1',
    directives: {
        focus: {
            inserted(el){
                el.focus();
            }
        }
    }
});

Vue.component('list', {
    template: `
        <ul>
            <li v-for='item in items'>{{item}}</li>
        </ul>
    `,
    data(){
        return {
            items: [
            "bind: 只调用一次，可以进行初始化设置",
            "inserted: 被绑定元素插入父节点时调用（仅保证父节点存在,但不一定已被插入文档中)。",
            "",
            "",
            ""
            ]
        }
    }
})