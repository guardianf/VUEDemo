import {menu1} from "../assets/menu1.js";
Vue.component("vm-nav", {
  props: ["menu"],
  template: "<ol class='vm-nav'><li v-for='item in menu'>{{item.text}}</li></ol>"
});
Vue.component("vm-content", {
  props: ["src"],
  template: "<iframe v-bind:src='src'></iframe>"
});
let app = new Vue({
  el: "#app",
  data: {
    menu: menu1,
    src: ""
  }
})
