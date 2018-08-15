Vue.component('blog-post-a', {
    props: ['postTitle'],
    template: `
        <div>
            <h5>{{postTitle}}</h5>
            <p>use kebab-case in dom & use CamelCase in js</p>
        </div>
    `
});
Vue.component('blog-post-b', {
    props: ['post-title'],
    template: `
        <div>
            <h5>{{post-title}}</h5>
            <p>use kebab-case both in dom & js</p>
        </div>
    `
});
Vue.component('blog-post-c', {
    props: ['post-title'],
    template: `
        <div>
            <h5>{{post-title}}</h5>
            <p>use CamelCase in dom & use kebab-case in js</p>
        </div>
    `
});
Vue.component('blog-post-d', {
    props: ['postTitle'],
    template: `
        <div>
            <h5>{{postTitle}}</h5>
            <p>use CamelCase both in dom & js</p>
        </div>
    `
});

Vue.component('component-a', {
    props: ['title', 'links', 'isPublished', 'commentIds', 'author'],
    template: `
        <div>
            <p>title:{{title}}typeof title:{{typeof title}}</p>
            <p>links:{{links}}typeof links:{{typeof links}}</p>
            <p>isPublished:{{isPublished}}typeof isPublished:{{typeof isPublished}}</p>
            <p>commentIds:{{commentIds}}typeof commentIds:{{typeof commentIds}}</p>
            <p>author:{{author}}typeof author:{{typeof author}}</p>
        </div>
    `
});
Vue.component('component-b', {
    props: {
        title: String,
        links: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object
    },
    template: `
        <div>
            <p>title:{{title}}typeof title:{{typeof title}}</p>
            <p>links:{{links}}typeof links:{{typeof links}}</p>
            <p>isPublished:{{isPublished}}typeof isPublished:{{typeof isPublished}}</p>
            <p>commentIds:{{commentIds}}typeof commentIds:{{typeof commentIds}}</p>
            <p>author:{{author}}typeof author:{{typeof author}}</p>
        </div>
    `
});

Vue.component('blog-post-static', {
    props: ['title'],
    template: `
        <p>pass a static prop title:{{title}}</p>
    `
});
Vue.component('blog-post-animite', {
    props: ['title'],
    template: `
        <p>pass a animite prop title:{{title}}</p>
    `
});
Vue.component('blog-post-animite-complex', {
    props: ['title'],
    template: `
        <p>pass a complex animite prop title:{{title}}</p>
    `
});
Vue.component('blog-post-number', {
    props: ['likes'],
    template: `
        <p>pass a number likes:{{likes}}; typeof likes is {{typeof likes}}</p>
    `
})
Vue.component('blog-post-boolean', {
    props: ['isPublished'],
    template: `
        <p>pass a boolean prop: isPublished:{{isPublished}}. typeof isPublished is {{typeof isPublished}}</p>
    `
});

Vue.component('blog-post-array', {
    props: ['commentIds'],
    template: `
        <p>pass a array prop: commentIds:{{commentIds}}. commentIds isArray {{Array.isArray(commentIds)}}</p>
    `
});

Vue.component('blog-post-obj', {
    props: ['author'],
    template: `
        <p>pass a object prop: author:{{author}}.typeof author is {{typeof author}}</p>
    `
})
Vue.component('blog-post-self', {
    props: ['id', 'title', 'name'],
    template: `
        <div>
        <p>show all the attr of a object: post.id:{{id}}; post.tittle: {{title}};Post.name: {{name}}</p>
        <p>虽然可以传入整个Post作为参数，但是templete的props直接声明Post是不可以的，只能够声明Post下的属性</p>
        </div>
    `
})

let app = new Vue({
    el: '#app-1',
    data: {
        title: 'this is title',
        links: 123,
        isPublished: true,
        commentIds: [1,2,3,4],
        author: {
            name: 'jason'
        },
        post: {
            id: 'post1',
            title: 'This is a title',
            author: {
                name: 'John'
            },
            likes: 100,
            isPublished: false,
            commentIds: [1,2,3,45],
            author: {
                name: 'Fu Yubin',
                company: 'Fu co.'
            }
        }
    }
});

Vue.component('singlestream', {
    props: ['initialCounter', 'size'],
    template: `
        <div>
            <p>counter: {{counter}};normalizedSize: {{normalizedSize}}</p>
            <p>initialCounter: {{initialCounter}};size: {{size}}</p>
            <button @click='add'>add counter</button>
            <strong>counter为初始化的值，后来的更新直接更新counter。而normalizedSize则是使用函数后被固定为某一个值，可以作为一个default或者const的常量</strong>
        </div>
    `,
    data(){
        return {
            counter: this.initialCounter
        }
    },
    computed: {
        normalizedSize(){
            return this.size.trim().toLowerCase();
        }
    },
    methods: {
        add(){
            this.counter+=1;
        }
    }
});
let app2 = new Vue({
    el: '#app-2',
    data: {
        initialCounter: 0,
        size: "12"
    }
});


function Person(firstName, secondName){
    this.firstName = firstName;
    this.secondName = secondName;
}
Vue.component('my-component', {
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
            type: [String,Number],
            required: true
        },
        propD: {
            type: Number,
            default: 100
        },
        propE: {
            type: Object,
            default: function(){
                return {message: 'hello'}
            }
        },
        propF: {
            validator: function(value){
                return ['success', 'warning', 'danger'].indexOf(value) != -1
            }
        },
        author: Person
    },
    template: `
        <div>
            <p>propA: {{propA}}</p>
            <p>propB: {{propB}}</p>
            <p>propC: {{propC}}</p>
            <p>propD: {{propD}}</p>
            <p>author: {{author}}</p>
            <strong>在prop验证值类型的时候，[]数组表示的是，支持数组中的多种值类型，而不是规定这个数组中每个值的类型。</strong>
            <strong>在prop验证值类型的时候，{}对象中type表示其支持的类型，required表示是否是必须值，default表示其默认值</strong>
        </div>
    `
});
Vue.component('no-prop', {
    template: `
        <div>
            <p>非Prop的特性</p>
            <strong>非Prop特性会绑定到跟元素的attribute中</strong>
        </div>
    `,
    mounted(){
        console.log(this.$el.getAttribute('data-date-picker'))
    }
})
Vue.component('merge-attr', {
    template: `
        <input type='date' class='form-control'>
    `
});
Vue.component('disable-attr', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
        {{label}}
        <input
            v-bind='$attrs'
            :value='value'
            @input='$emit("input", $event.target.value)'
        >
    </label>
  `,
  data() {
      return {placeholder: 'Enter your username'}
  }
})
let app3 = new Vue({
    el: '#app-3',
    data: {
        validate: {
            propA: 123,
            propB: [1.001].join(''),
            propC: 'String-propc',
            author: new Person('Fu', 'Yubin')
        },
        username: "John"
    }
})