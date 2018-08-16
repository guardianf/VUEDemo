Vue.component('my-component', {
    template: `
        <div>
            <button @click='$emit("my-event")'>click</button>
            <strong>emit监听的事件名会被转化成全小写</strong>
        </div>
    `
});
Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
        <input
            type='checkbox'
            :checked='checked'
            @click='$emit("change", $event.target.checked)'
        >
    `
});
Vue.component('base-input', {
    props: ['label'],
    template: `
    <label>
        {{label}}
        <input>
    </label>
    `
});
Vue.component('text-document', {
    props: ['title'],
    template: `
        <label>
            <p>below is a component value: {{title}}</p>
            <input type='button' value='add' @click='add'>
        </label>
    `,
    methods: {
        add(){
            var change = this.title+1
            this.$emit('update:title', change);
        }
    }
})
let app1 = new Vue({
    el: '#app-1',
    data: {
        lovingVue: true,
        doc: {
            title: 'this is a title.'
        }
    },
    methods: {
        doSomething(){
            alert('do something')
        },
        onFocus(){
            console.log('focus')
        }
    }
})