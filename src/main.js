import Vue from 'vue'
import App from './App'
import router from "./router";
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';
import Echarts from 'echarts';
// let Echarts=require('echarts');

Vue.config.productionTip = false;
Vue.use(ElementUI);
Object.defineProperty(Vue.prototype, '$echarts', { value: Echarts });

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
export default app;
