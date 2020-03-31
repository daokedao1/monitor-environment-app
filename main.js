import Vue from 'vue'
import App from './App'
import CaRequest from './common/caRequest'
import api from './api/api'
Vue.config.productionTip = false
Vue.use(CaRequest)
App.mpType = 'app'

const app = new Vue({
    ...App,
	CaRequest: api
})
app.$mount()
