import Vue from 'vue'
import App from './App'
 import moment from 'moment'//导入文件 
import CaRequest from './common/caRequest'
import api from './api/api'
import {UtilMethod} from './utils/index.js'
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.use(CaRequest)
App.mpType = 'app'
let util = new UtilMethod();
Vue.prototype.util = util;

const app = new Vue({
    ...App,
	CaRequest: api
})
app.$mount()
