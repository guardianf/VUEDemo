let app1 = new Vue({
    el: "#app-1",
    data: {
        ok: true,
        type: 'D',
        loginType: 'username'
    },
    methods: {
        toggle(){
            this.loginType = this.loginType === 'username'?'':'username'
        }
    }
})

let app2 = new Vue({
  el: "#app-2",
  data: {
      ok: true
  }  
})

let app3 = new Vue({
    el: "#app-3",
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

let app4 = new Vue({
    el: "#app-4",
    data: {
        parentMessage: 'App-4',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})

let app5 = new Vue({
    el: "#app-5",
    data: {
        parentMessage: 'App-5',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
});

let app6 = new Vue({
    el: "#app-6",
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

let app7 = new Vue({
    el: "#app-7",
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

let app8 = new Vue({
    el: "#app-8",
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

let app9 = new Vue({
    el: "#app-9",
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

let app10 = new Vue({
    el: "#app-10",
    data: {
        items: ['val1', 'val2','val3'],
        index: '',
        val:''
    },
    methods: {
        replace_1(){
            Vue.set(this.items, this.index, this.val)
        },
        replace_2(){
            this.items.splice(this.index, 1, this.val)
        },
        replace_3(){
            this.$set(this.items, this.index, this.val)
        },
        cut(){
            this.items.splice(this.index)
        }       
    }
});

let app11 = new Vue({
    el: '#app-11',
    data: {
        items: {
            a:1   
        },
        key: null,
        value: null
    },
    methods: {
        add_1() {
            this.items[this.key] = this.value;
        },
        add_2() {
            Vue.set(this.items, this.key, this.value)
        },
        add_3() {
            this.$set(this.items, this.key, this.value)
        }
    }
});

let app12 = new Vue({
    el: '#app-12',
    data: {
        userProfile: {
            name: 'Anika'
        }
    },
    methods: {
        change_1() {
            Object.assign(this.userProfile, {
                age: 27,
                favoriteColor: 'Vue Green'
            })
        },
        change_2() {
            this.userProfile = Object.assign({},this.userProfile, {
                age: 27,
                favoriteColor: 'Vue Green'
            })
        }
    }
})