Vue.filter('filterB', (value)=>value.split('').reverse().join(''))
let app = new Vue({
    el: '#app-1',
    data: {
        value: 'this is a value'
    },
    filters: {
        filterA(value){
            return value.split('')[0].toUpperCase().concat(value.slice(1))
        },
        filterC(value, arg1, arg2){
            return [arg1.toUpperCase(), value, arg2.toUpperCase()].join(' ')
        }
    }
});