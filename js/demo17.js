var myMixin = {
    created(){
        this.hello();
    },
    methods: {
        hello(){
            console.log('hello from myMixin')
        }
    }
};

var Component = Vue.extend({
    mixins: [myMixin]
});

var component = new Component();

var mixin = {
    data(){
        return {
            message: 'hello',
            abc: 'abc'
        }
    }
}
var mixin2 = {
    created(){
        console.info('混入对象的钩子被调用')
    },
    methods: {
        foo(){
            console.info('foo')
        },
        conflicting(){
            console.info('from mixin')
        }
    }
}
let app2 = new Vue({
    el: '#app-2',
    mixins: [mixin2, mixin],
    data(){
        return {
            message: 'goodbye',
            def: 'def'
        }
    },
    created(){
        console.info(this.$data)
        console.info('组件钩子被调用')
    },
    methods: {
        bar(){
            console.info('bar')
        },
        conflicting(){
            console.info('from self')
        }
    }
});

Vue.mixin({
    created(){
        var hello = this.$options.hello;
        if(hello) {
            console.info(hello)
        }
    }
});
Vue.component('my-button', {
    template: '<button><slot></slot></button>',
    hello: 'from my-button'
})

let app3 = new Vue({
    el: '#app-3',
    hello: '你好'
})