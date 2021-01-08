import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import fn from './public/commonJs/common.js'


// 注册全局组件
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$comFn = fn;

console.log(Vue.prototype);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
