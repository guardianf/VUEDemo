// component中属性data必须是函数而不是一个对象
Vue.component('google-map', {
  data(){
    return {
              father: 'JSON'
            }
  },
  template: `
    <div>
      {{father}}
      <slot></slot>
      <button @click='add'>add in father</button>
    </div>
  `,
  methods: {
    add(){
      this.father+=this.father.length;
    }
  }
});
Vue.component('google-map-region', {
  props: ['shap'],
  template: `
    <div>
      {{shap}}
      <slot></slot>
    </div>
  `
});
Vue.component('google-map-markers', {
  props: ['places'],
  template: `
    <button @click='add'>get father</button>
  `,
  methods: {
    add(){
      var map = this.$parent.father||this.$parent.$parent.father
      alert('parent.father:' + map)
    }
  }
});
Vue.component('query-bar', {
  template: `
    <label>
      {{info}}
      <slot></slot>
      <button @click='query'>query</button>
      <button @click='$emit("click", this)'>query in root</button>
    </label>
  `,
  data(){
    return {
      info: '查询条件:'
    }
  },
  methods: {
    query(){
      try {
        alert(this.$refs.input.value)
      } catch (e) {
        console.warn(e.message)
      }
      
    }
  }
});
Vue.component('base-input', {
  template: `
    <input placeholder='enter a condition' v-model='value'>
  `,
  data(){
    return {
      value: ''
    }
  }
});
Vue.component('provider', {
  template: `
    <div>
      {{label}}
      <button @click='add'>add</button>
      <slot></slot>
    </div>
  `,
  data(){
    return {
      label: 'provider'
    }
  },
  provide: {
    getMap(){
      return this.label
    }
  },
  methods: {
    add(){
      this.label+='1'
    }
  }
});
Vue.component('injection', {
  template: `
    <button @click='click'>getMap from inject</button>
  `,
  inject: ['getMap'],
  data(){
    return {
      label: 'injection'
    }
  },
  methods: {
    click(){
      alert('getMap:' + this.getMap());
    }
  }
})

let app1 = new Vue({
  el: '#app-1',
  data: {
    foo: 1,
    iceCreamShops: 'CoCo',
    cityBoundaries: 'SH'
  },
  computed: {
    bar(){
      // do something
      return 'this is bar'
    }
  },
  methods: {
    baz(){
      // do something
      return 'this is baz function'
    },
    click(){
      alert(this.$refs.input.value)
    }
  },
  mounted(){
    console.log(this.$root.foo);
    this.$root.foo = 2;
    console.log(this.$root.bar);
    console.log(this.$root.baz());
  }
})

Vue.component('listener-once', {
    template: `
    <button @click='add'>{{label}}</button>
    `,
    mounted(){
        this.$once('hook:updated', function(){
            alert('click')
        })
    },
    data(){
        return {
            label: 'this is a demo about once listener.'
        }
    },
    methods:{
        add(){
            this.label += this.label.length
        }
    }
});
Vue.component('stackflow', {
    name: 'stackflow',
    props: {
        checked: [Boolean]
    },
    template: `
    <div>
        checked:{{checked}}
        <stackflow v-if='checked' :checked='check'></stackflow>
        <div v-else>done</div>
    </div>
    `,
    computed: {
        check(){
            return !this.checked;
        }
    }
});
Vue.component('tree-folder', {
    props: ['folder'],
    template: `
    <p>
        <span>{{folder.name}}</span>
        <tree-folder-contents :children='folder.children' />
    </p>
    `
})
Vue.component('tree-folder-contents', {
    props: ['children'],
    template: `
    <ul>
        <li v-for='child in children'>
            <tree-folder v-if='child.children' :folder='child' />
            <span v-else>{{child.name}}</span>
        </li>
    </ul>
    `
})
Vue.component('component-inline', {  
});
Vue.component('hello-word', {
    template: '#hello-word-template'
})
let app2 = new Vue({
    el: '#app-2',
    data: {
        stackflow: true,
        menu: [
            {id: 1, name: 'folder1', children: [
                {id: 11, name: 'son1'},
                {id: 12, name: 'son2', children: [
                    {id: 131, name: 'son121'}
                ]},
                {id: 13, name: 'folder13'}
            ]},
            {id: 2, name: 'folder2'}
        ]
    }
});


Vue.component('terms-of-service', {
    props: ['message'],
    template: `
    <div v-once>
        <h1>Terms of Service</h1>
        ... a lot of static content ...
        {{message}}
    </div>
    `
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        label: [1,2,3,4],
        message: 'This is a message.'
    },
    methods: {
        changeLabel(){
            this.label.length -= 1;
        },
        changeLabel2(){
            this.label.length -= 1;
            this.$forceUpdate();
        },
        changeOnce(){
            this.message = 'This is a changed message.'
            this.$forceUpdate();
        }
    }
})