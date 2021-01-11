import Vue from 'vue'
import App from './App'
import router from "./router";
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
export default app;
