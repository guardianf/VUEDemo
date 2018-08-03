Vue.component('button-counter', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button @click="count++">You clicked me {{count}} times.</button>'
});

/**
 * 简单的组建
 */
// Vue.component('blog-post', {
//     props: ['title'],
//     template: '<h3>{{title}}</h3>'
// });

/*
 * 单个跟元素
 */
// Vue.component('blog-post-2', {
//     props: ['post'],
//     template: `
//         <div class='blog-post'>
//             <h3>{{post.title}}</h3>
//             <div v-html='post.content'></div>
//         </div>
//         `
// });

// /*
//  * 通过事件向父组件传递消息
//  */
// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//         <div class='blog-post'>
//             <h3>{{post.title}}</h3>
//             <button v-on:click="$emit('enlarge-text')">
//                 Enlarge text
//             </button>
//             <div v-html='post.content'></div>
//         </div>
//     `
// });


/*
 * 使用事件抛出一个值
 */
Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class='blog-post'>
            <h3>{{post.title}}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
            <div v-html='post.content'></div>
        </div>
    `
});

let app1 = new Vue({
    el: '#app-1',
    data: {
        posts: [
            {id: 1, title: 'My journey with Vue?!', content: '12'},
            {id: 2, title: 'Blogging with Vue', content: '23'},
            {id: 3, title: 'Why Vue is so fun!', content: '34'}
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText(enlargeAmount){
            this.postFontSize+=enlargeAmount
        }
    }
});

Vue.component('custom-input', {
   props: ['value'] ,
   template: `
    <input
        :value='value'
        @input='$emit("input", $event.target.value)'
    >
   `
});
Vue.component('custon-input2', {
    props: ['value'],
    template: `
        <input
            :value='value'
            @input='$emit("input", $event.target.value)'
        >
    `
})
let app2 = new Vue({
    el: '#app-2',
    data: {
        searchText: 'search'
    }
})

Vue.component('alert-box', {
    template: `
        <div class='demo-alert-box'>
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
});

let app3 = new Vue({
    el: '#app-3'
})
