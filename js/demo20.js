var MyPlugin = {};
MyPlugin.install = function(Vue, options){
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVNode){

        }
    })

    Vue.prototype.$log = function(){
        console.log('this is plugin log');
    }
};

Vue.use(MyPlugin);

new Vue({
    el: '#app-1',
    created(){
        console.log('created:')
        this.$log()
    }
})