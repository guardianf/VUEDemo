let app1 = new Vue({
    el: '#app-1',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter((number) => {
                return number % 2 == 0;
            })
        }
    },
    methods: {
        even(numbers) {
            return numbers.filter((number) => {
                return number % 2 === 0;
            })
        }
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        items: [
            {msg: 'this is the 1st message'},
            {msg: 'this is the 2nd message'}
        ]
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [1, 2, 3, 4]
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [1, 2, 3, 4, 5, 6]
    }
})
