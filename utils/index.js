  class UtilMethod {
	 constructor() {
		 
	  }
	  numFormat(v,dfix=0,fix=1,ut = 'w') {
	      try {
	          const value = Number.parseFloat((v || 0));
	          if( !isFinite(value) || isNaN(value)){
	              return '--';
	          }
	          return value.toFixed(fix);
	          // if(value > 1000){
	          //     return getThousandNum((value / 10000).toFixed(fix)) + ut;
	          // }else{
	          //     return getThousandNum((value / 10000).toFixed(dfix)) + ut;
	          // }
	  
	  
	  
	      } catch (e) {
	          console.log(e);
	          return '--';
	      }
	  }
	   getThousandNum (num) {
	      return num.toString().replace(/\d+/, function (n) { // 先提取整数部分
	          return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) { // 对整数部分添加分隔符
	              return $1 + ',';
	          });
	      });
	  };
    type(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }
  	clone(target) {
  	  //判断拷贝的数据类型
  	  //初始化变量result 成为最终克隆的数据
  	  let result,
  	    targetType = this.type(target);
  	  if (targetType === "Object") {
  	    result = {};
  	  } else if (targetType === "Array") {
  	    result = [];
  	  } else {
  	    return target;
  	  }
  	  //遍历目标数据
  	  for (let i in target) {
  	    //获取遍历数据结构的每一项值。
  	    let value = target[i];
  	    //判断目标结构里的每一值是否存在对象/数组
  	    if (this.type(value) === "Object" || this.type(value) === "Array") {
  	      //对象/数组里嵌套了对象/数组
  	      //继续遍历获取到value值
  	      result[i] = this.clone(value);
  	    } else {
  	      //获取到value值是基本的数据类型或者是函数。
  	      result[i] = value;
  	    }
  	  }
  	  return result;
  	}
  }
  export {UtilMethod}