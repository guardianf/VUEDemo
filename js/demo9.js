Vue.component('my-component-name', {
    template: `
        <div>
            <h3>kebab-case component</h3>
            <p>could used in any situation</p>
        </div>
    `
});
Vue.component('MyComponentName', {
    template: `
        <div>
            <h3>PascalCase component</h3>
            <p>couldn't used in dom environment.could be used in 'is=xxx'</p>
        </div>
    `
});
Vue.component('component-a', {
    template: `
        <p>This is component-a which is registed in Global Environment</p>
    `
});
let ComponentB = {
    template: `
        <p>This is ComponentB which is registed in a specific scope</p>
    `
}
let ComponentC = {
    template: `
        <div>
            <p>This is a component-c, include a component-b</p>
            <component-b></component-b>
        </div>
    `,
    components: {
        'component-b': ComponentB
    }
}
let app = new Vue({
    el: '#app-1',
    components: {
        'component-b': ComponentB,
        'component-c': ComponentC
    }
})