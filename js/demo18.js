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
            "update: 所有组件的VNode更新时调用,但是可能发生在其子VNode更新之前",
            "componentUpdated:指令所在组件的VNode及其子VNode全部更新后调用。",
            "unbind:只调用一次"
            ]
        }
    }
});

let app2 = new Vue({
    el: '#app-2'
})

Vue.component('list3', {
    name: 'list3',
    props: ['children'],
    template: `
        <ul>
            <li v-for='child in children' :key='child.id'>
                <div v-if='!child.children' >
                    {{child.text}}
                </div>
                <div v-else>
                    <div>{{child.text}}</div>
                    <list3 :children='child.children'></list3>
                </div>
            </li>
        </ul>
    `
});
Vue.directive('demo', {
    bind(el, binding, vnode){
        var s = JSON.stringify
        el.innerHTML = 
            'name:' + s(binding.name) + '<br>' + 
            'value:' + s(binding.value) + '<br>' + 
            'expression:' + s(binding.expression) + '<br>' + 
            'argument:' + s(binding.arg) + '<br>' + 
            'modifiers:' + s(binding.modifiers) + '<br>' + 
            'vnode keys:' + Object.keys(vnode).join(', ')

    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        children: [
            {id: '1', text: 'el:指令所绑定的元素，可以直接用来操作dom'},
            {id: '2', text: 'binding:一个对象，包含以下属性：',children:[
                {id: '21', text: 'name: 指令名，不包括v-前缀'},
                {id: '22', text: 'value: 指令的绑定值，例如：v-my-directive=“1+1”中，绑定值为2'},
                {id: '23', text: 'oldValue: 指令绑定的前一个值，仅在update和componentUpdated钩子中可用。无论值是否改变都可用。'},
                {id: '24', text: 'expression：字符串形式的指令表达式。例如v-my-direction=“1+1”中，表达式为“1+1”'},
                {id: '25', text: 'arg: 传指令的参数，可选。例如v-mu-directive:foo'},
                {id: '26', text: 'modifiers：一个包含修饰符的对象。列入：v-my-directive.foo.bar中，修饰符对象为{foo:true,bar:true}'},
            ]},
            {id: '3', text: 'vnode: Vue编译生成的虚拟节点。移步：VNode API来了解更多详情'},
            {id: '4', text: 'oldVnode: 上一个虚拟节点，仅在update和componentUpdated钩子中可用'}
        ],
        message: 'hello'
    }
});

Vue.directive('color-swatch', function(el, binding){
    el.style.backgroundColor = binding.value
});
let app4 = new Vue({
    el: '#app-4',
    data: {
        color: 'red'
    }
});

Vue.directive('demo2', function(el, binding){
    console.log('color:',binding.value.color)
    console.log('text:',binding.value.text)
    alert('color:',binding.value.color)
    alert('text:',binding.value.text)
});
let app5 = new Vue({
    el: '#app-5'
})
