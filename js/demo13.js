// tab-posts
Vue.component('tab-posts',{
    template: `
      <div>
        <ul>
          <li 
            v-for='post in posts'
            :key='post.id'
            @click='selectPost = post'
          >
            {{post.title}}
          </li>
        </ul>
        <div v-if='selectPost'>
          <h3>
            <strong>{{selectPost.title}}</strong>
          </h3>
          <p v-html='selectPost.content'></p>
        </div>
        <strong v-else>
          Please select a post
        </strong>
      </div>
    `,
    data(){
      return {
        posts: [
          {id: 1, title: 'Cat', content: 'this is cat'},
          {id: 2, title: 'Dog', content: 'this is dog'},
          {id: 3, title: 'Egg', content: 'this is egg'}
        ],
        selectPost: null
      }
    }
});
// tab-archive
Vue.component('tab-archive', {
    template: `
      <div>this is archive pane</div>
    `
});
let app1 = new Vue({
  el: '#app-1',
  data: {
    currentTab: 'Posts',
    tabs: ['Posts', 'Archive']
  },
  computed: {
    currentTabComponent(){
      return 'tab-' + this.currentTab.toLowerCase();
    }
  }
});

Vue.component('async-example', function(resolve, reject) {
  setTimeout(function(){
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000);
});
Vue.component('async-webpack-example', function(resolve) {
  //这个特殊的reqire语法将会告诉webpack
  //自动将你的构建代码切割成多个包，这些包
  //会通过Ajax请求加载
  require(['./my-async-component'], resolve)
});
Vue.component('async-webpack-es2015-component', ()=>import('./my-async-component'))
let app2 = new Vue({
  el: '#app-2',
  component: {
    'my-component': ()=>import('./my-async-component')
  }
})

const AsyncComponent = () => ({
  //
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})