const toast = (options) => {
  uni.showToast(options);
};

const loading = () => {
};
function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate()) + ' ' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
function utf16toEntities(str) {
		if(str){
			var patt=/[\ud800-\udbff][\udc00-\udfff]/g;
			// 检测utf16字符正则
			str = str.replace(patt, function(char){
				var H, L, code;
				if (char.length===2) {
					H = char.charCodeAt(0);
					// 取出高位
					L = char.charCodeAt(1);
					// 取出低位
					code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
					// 转换算法
					return "&#" + code + ";";
				} else {
					return char;
				}
			});
		}         
		return str;
}
function entitiestoUtf16(str){
		// 检测出形如&#12345;形式的字符串
		var strObj=str
		if(strObj){
			var patt = /&#\d+;/g;
			var H,L,code;
			var arr = strObj.match(patt)||[];
			for (var i=0;i<arr.length;i++){
				let tar = arr[i];
				code = arr[i];
				code=code.replace('&#','').replace(';','');
				// 高位
				H = Math.floor((code-0x10000) / 0x400)+0xD800;
				// 低位
				L = (code - 0x10000) % 0x400 + 0xDC00;
				code = "&#"+code+";";
				var s = String.fromCharCode(H,L);
				console.log(code)
				console.log(s)
				strObj = strObj.replace(code,s);
			}
		}
		return strObj;
	} 
	
export {
	toast,
	loading,
	formatTime,
	formatLocation,
	dateUtils,
	utf16toEntities,
	entitiestoUtf16
};
