import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      binding.value(evt, el);
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
