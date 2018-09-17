Vue.component('anchored-heading', {
    template: '#anchored-heading-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});
Vue.component('anchored-heading2', {
    render(createElement){
        return createElement('h' + this.level,this.$slots.default)
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})
let app1 = new Vue({
    el: '#app-1',
    data: {
        level: 1
    }
});

var vertualDemo = Vue.component('vertual-dom',{
    props:['blogTitle'],
    render(createElement){
        let vnode = createElement('div', this.blogTitle);
        console.info('vnode type:',vnode.constructor.name)
        return vnode;
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        title: ''
    }
});

Vue.component('create-element-demo', {
    render(createElement){
        return createElement('div', {},[
            '先写一些文字',
            createElement('h1', '一则头条'),
            createElement(vertualDemo, {
                props: {
                    blogTitle: 'foobar'
                }
            })
        ])
    }
});
Vue.directive('my-custom-directive', {
    bind(el, binding, vnode){
        for(item in binding)
        {
            console.log(item,':',binding[item])
        }
    }
})
Vue.component('create-element-data', {
    render(createElement){
        return createElement('div', {
            'class': {
                foo: true,
                bar: false
            },
            style: {
                color: 'red',
                fontSize: '14px'
            },
            attrs: {
                id: 'foo'
            },
            props: {
                myProp: 'bar'
            },
            domProps: {
                innerHTML: 'this is a innerHTML'
            },
            slot: 'name-of-slot',
            key: 'myKey',
            ref: 'myRef',
            on: {
                click(){
                    console.log('this is click')
                }
            },
            nativeOn:{
                click(){
                    console.log('this is native click')
                }
            },
            directives: [{
                name: 'my-custom-directive',
                value: '2',
                expression: '1+1',
                arg: 'foo',
                modifiers: {
                    bar: true
                }
            }],
            scopedSlots: {
                default: props=>createElement('span', props.text)
            }
        })
    }
});
var getChildrenTextContent = function(children) {
    return children.map((node)=>{
        return node.children?getChildrenTextContent(node.children): node.text
    }).join('')
}
Vue.component('anchored-heading3', {
    render(createElement){
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '');
            console.log(headingId)
        return createElement(
        'h'+this.level, 
        [
        createElement('a', {
            attrs: {
                name: headingId,
                href: '#' + headingId
            }
        }, this.$slots.default)
        ])
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});
Vue.component('multi-child', {
    render(createElement) {
        var myParentVNode=createElement('p', 'hi');
        return createElement('div', [myParentVNode,myParentVNode]);
    }
});
Vue.component('multi-child-2', {
    render(createElement){
        return createElement('div', 
            Array.apply(null, {length: 2}).map(()=>{
                return createElement('p', 'hi')
            })
        )
    }
})
let app3 = new Vue({
    el: '#app-3',
    methods: {
        clickHandler(){
            console.log('click is running')
        },
        nativeClickHandler(){
            console.log('native click is running')
        }
    }
});

Vue.component('demo-js-instead', {
    props: ['items'],
    render(createElement){
        if(this.items.length) {
            return createElement('ul', this.items.map((item)=>{
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    }
});
Vue.component('model-js-instead', {
    props: ['value'],
    render(createElement){
        var self = this;
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input(event){
                    self.$emit('input', event.target.value)
                }
            }
        })
    }
});
Vue.component('modifier-js-instead', {
    render(createElement){
        return createElement('p', {
            domProps: {
                innerHTML: 'this is a modifier js instead component'
            },
            on: {
                '!click'(){
                    console.log('capture')
                },
                '~!click'(){
                    console.log('capture & once')
                },
                '~click'(){
                    console.log('once')
                },
                '&click'(){
                    console.log('passive')
                }
            }
        })
    }
});
Vue.component('slot-js-instead', {
    render(createElement) {
        return createElement('div', this.$slots.default)
    }
});
/**
* 目前不知道为什么报错
**/
Vue.component('slot-js-instead-2', {
    props: ['message'],
    render(createElement) {
        return createElement('div', [
            this.$scopedSlots.default({
                text: this.message
            })
        ])
    }
});
Vue.component('child', {
    props: ['message'],
    template: `
    <div class='child'>
        <slot :text='message'></slot>
    </div>
    `,
    created(){
        console.log(this.message)
    }
})
Vue.component('slot-js-instead-3', {
    props: ['message'],
    render(createElement) {
        var slot = createElement('child', {
                scopedSlots: {
                    default(props) {
                        return createElement('span', props.text)
                    }
                },
                props: {
                    message: this.message.text
                }
            })
        return createElement('div', [
            slot
        ])
    }
});
let app4 = new Vue({
    el: '#app-4',
    data: {
        items: [
            {name: 'list1'},
            {name: 'list2'},
            {name: 'list3'},
            {name: 'list4'}
        ],
        value: 'test',
        message: {
            text: 'this is a message'
        }
    }
});

Vue.component('functional-demo', {
    functional: true,
    props: ['message'],
    render(createElement, context) {
        return createElement('div', context.props.message)
    }
});
    Vue.component('functional-demo2', {
        functional: true,
        props: ['message'],
        template: '<div>{{message}}</div>',
        render(createElement,context) {
            return createElement('input', {
                domProps: {
                    value: context.props.message
                    }
            })
        }
    });
Vue.component('functional-button', {
    functional: true,
    render(createElement, context) {
        return createElement('button', context.data, context.children);
    }
});
let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'This is a message for functional component',
        message2: 'This is a message for functional component which has a template.'
    },
    methods: {
        alert(context){
            alert(context)
        }
    }
})