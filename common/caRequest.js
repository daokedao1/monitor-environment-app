const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class CaRequest {

  [config] = {
    baseURL: '',
    header: {
      //'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
  }

  interceptors = {
    request: (func) => {
      if (func) {
        CaRequest[requestBefore] = func
      } else {
        CaRequest[requestBefore] = (request) => request
      }
    },
    response: (func) => {
      if (func) {
        CaRequest[requestAfter] = func
      } else {
        CaRequest[requestAfter] = (response) => response
      }
    }
  }

  static[requestBefore](config) {
    return config
  }

  static[requestAfter](response) {
    return response
  }

  static[isCompleteURL](url) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  setConfig(func) {
    this[config] = func(this[config])
  }

  request(options = {}) {
    options.baseURL = options.baseURL || this[config].baseURL
    options.dataType = options.dataType || this[config].dataType
    options.url = CaRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
    if (options.data === undefined) {
      delete options['data']
    } else {
      options.data = options.data
    }
    options.header = { ...options.header,
      ...this[config].header
    }
    options.method = options.method || this[config].method

    options = { ...options,
      ...CaRequest[requestBefore](options)
    }

    return new Promise((resolve, reject) => {
      options.success = function(res) {
		
        resolve(CaRequest[requestAfter](res))
      }
      options.fail = function(err) {
        reject(CaRequest[requestAfter](err))
      }
	  uni.req
      uni.request(options)
    })
  }

  get(url, data, options = {}) {
	// console.log('请求地址：'+url);
	// console.log('参数：'+ JSON.stringify(data));
    options.url = url
    options.data = data
    options.method = 'GET'
	    let headers = {
	        'content-type': 'application/json'
	    };
		options.headers = headers;
		console.log(options)
    return this.request(options)
  }

  post(url, data, options = {}) {
	  // console.log('请求地址：'+url);
	  // console.log('参数：'+ JSON.stringify(data));
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
  put(url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'PUT'
    return this.request(options)
  }
  delete(url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  }
}

CaRequest.install = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      if (this.$options.CaRequest) {
        Vue._CaRequest = this.$options.CaRequest
      }
    }
  })
  Object.defineProperty(Vue.prototype, '$api', {
    get: function() {
      return Vue._CaRequest.apis
    }
  })
}

export default CaRequest
