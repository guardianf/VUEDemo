let app = new Vue({
    el: '#app-1',
    data: {
        message_1: '',
        multimessage:'',
        checked: true,
        checkedNames: [],
        picked: '',
        selected: '',
        multiselected: [],
        selected_2: 'A',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ]
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        picked: 'a',
        toggle: true,
        selected:'abc',
        toggle_2: 'yes',
        a:'this is a',
        pick:''
    }
})