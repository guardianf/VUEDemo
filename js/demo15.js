Vue.component('sample', {
    props: ['content'],
    template: `
    <ul>
        <li v-for='item in content'>{{item}}</li>
    </ul>
    `
});

let app1= new Vue({
    el: '#app-1',
    data: {
        list: [
        '在CSS过渡和动画中自动应用class',
        '可以配合使用第三方的CSS动画库，如Animate.css',
        '在过渡钩子函数中使用JavaScript直接操作DOM',
        '可以配合使用第三方JavaScript动画库，如Velocity.js'
        ]
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        show: true,
        showN: true,
        showM: true,
        showK: true,
        showJ: true,
        showH: true,
        showP: false
    },
    methods: {
        beforeEnter(el){
            console.log('beforeEnter');
            el.style.opacity = 0;
            el.style.transformOrigin = 'left';
        },
        enter(el, done){
            console.log('enter');
            Velocity(el, {opacity: 1,fontSize: '1.4em'}, {duration: 300})
            Velocity(el, {fontSize: '1em'}, {complete: done})
        },
        afterEnter(el){
            console.log('afterEnter');
        },
        enterCancelled(el){
            console.log('enterCancelled');
        },
        beforeLeave(el){
            console.log('beforeLeave');
        },
        leave(el, done){
            console.log('leave');
            Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600})
            Velocity(el, {rotateZ: '100deg'}, {loop: 2})
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, {complete: done})
//             done();
        },
        afterLeave(el){
            console.log('afterLeave');
        },
        leaveCancelled(el){
            console.log('leaveCancelled');
        }
    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        showO: true
    },
    methods: {
        customBeforeAppearHook(el){
            el.style.opacity = 0;
            el.style.transformOrigin = 'right';
        },
        customAppearHook(el, done){
            Velocity(el, {opacity: 1,fontSize: '1.4em'}, {duration: 300})
            Velocity(el, {fontSize: '1em'}, {complete: done})
        },
        customAfterAppearHook(el){
            el.style.opacity = 1;
            el.style.transformOrigin = 'left';
        },
        customAppearCancelledHook(el){}
    }
});
let app4 = new Vue({
    el: '#app-4',
    data: {
        isEditing: false,
        docState: 'saved',
        on: true
    },
    computed: {
        buttonMessage(){
            switch(this.docState){
                case 'saved': return 'Edit';break;
                case 'edited': return 'Save';break;
                case 'editing': return 'Cancel';break;
            }
        }
    },
    methods: {
        randomSwitch(){
            switch(Math.floor(Math.random()*3)){
                case 0: return 'saved';break;
                case 1: return 'edited';break;
                case 2: return 'editing';break;
            }
        }
    }
});

let app5 = new Vue({
    el: '#app-5',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>This is Component A</div>'
        },
        'v-b': {
            template: '<div>This is Component B</div>'
        }
    }
});

let app6 = new Vue({
    el: '#app-6',
    data: {
        items: [1,2,3,4,5,6,7,8],
        items2: [1,2,3,4,5,6,7,8],
        nextNum: 10,
        cells: Array.apply(null, {length: 81}).map((_, index)=>{
            return {
                id: index,
                number: index % 9 + 1
            }
        }),
        query: '',
        list: [
          {msg: 'Bruce Lee'},
          {msg: 'Jackie Chen'},
          {msg: 'Chuck Norris'},
          {msg: 'Jet Li'},
          {msg: 'Kung Fury'},
          {msg: 'Tom Cruse'},
        ]
    },
    methods: {
        randomIndex(){
            return Math.floor(Math.random() * this.items.length)
        },
        add(){
            this.items.splice(this.randomIndex(), 0, this.nextNum ++)
        },
        remove(){
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle(){
            this.items2 = _.shuffle(this.items2)
        },
        shuffleMatrix() {
            this.cells = _.shuffle(this.cells);
        },
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done){
            var delay = el.dataset.index * 150
            setTimeout(()=>{
                Velocity(el,{opacity: 1,height: '1.6em'},{complete:done})
            }, delay);
        },
        leave(el,done){
            var delay = el.dataset.index * 150
            setTimeout(()=>{
                Velocity(el,{opacity: 0,height: 0},{complete:done})
            }, delay);
        }
    },
    computed: {
        computedList(){
            return this.list.filter((item)=>{
                return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
            })
        }
    }
});

Vue.component('my-transition', {
    template: `
      <transition-group
        name='fade'
        mode='out-in'
        @before-enter='beforeEnter'
        @after-enter='afterEnter'
      >
        <slot></slot>
      </transition-group>
    `,
    methods: {
        beforeEnter(el){
            el.style.opacity = 0;
        },
        afterEnter(el){
            el.style.opacity = 1;
        }
    }
});
Vue.component('my-special-transition', {
    functional: true,
    render(createElement, context) {
        var data = {
            props: {
                name: 'fade',
                mode: 'out-in'
            },
            on: {
                beforeEnter(el){
                    el.style.opacity = 0;
                    el.style.transition = 'ease 1s'
                },
                afterEnter(el) {
                    el.style.opacity = 1;
                }
            }
        }
        return createElement('transition', data, context.children)
    }
})
let app7 = new Vue({
    el: '#app-7',
    data: {
        on: true,
        onn: true
    }
})

let app8 = new Vue({
    el: '#app-8',
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: true
    },
    mounted(){
        this.show = false
    },
    methods: {
        beforeEnter(el){
            el.style.opacity = 0;
        },
        enter(el, done){
            Velocity(el, {opacity: 1}, {duration: app8.fadeInDuration,complete(){done();if(!app8.stop){app8.show = false;}}})
        },
        leave(el, done){
            Velocity(el, {opacity: 0}, {
                duration: app8.fadeOutDuration,
                complete(){
                    done();
                    app8.show = true
                }
            })
        }
    }
})