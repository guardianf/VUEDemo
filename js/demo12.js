Vue.component('navigation-link', {
    props: ['url'],
    template: `
    <a
      v-bind:href='url'
      class='nav-link'
    >
      <slot></slot>
    </a>
    `
});
Vue.component('base-layout', {
  template: `
  <div class='container'>
    <header>
      <slot name='header'></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name='footer'></slot>
    </footer>
  </div>
  `
});
Vue.component('submit-button', {
  template:`
    <button>
      <slot>Submit</slot>
    </button>
  ` 
});
let app1 = new Vue({
    el: '#app-1',
    data: {
        user: {
            name: 'John Doe'
        }
    }
});

Vue.component('todo-list', {
  props: ['todos'],
  template: `
  <ul>
    <li
      v-for='todo in todos'
      v-bind:key='todo.id'
    >
      <!-- 我们为每个 todo 准备了一个插槽， -->
      <!-- 将'todo'对象作为一个插槽的prop传入 -->
      <slot v-bind:todo='todo'>
        <!-- 回退的内容 -->
        {{todo.text}}
      </slot>
    </li>
  </ul>
  `
});

let app2 = new Vue({
  el: '#app-2',
  data: {
    todos: [
      {id: 1, text: 'feed the cat'},
      {id: 2, text: 'mop the floor'}
    ]
  }
})
