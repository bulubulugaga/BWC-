// 封装一些常用的简单方法

// 判断对象有否有空属性
export function isObjHasNull(obj) {
	let is = false;
	for(let key in obj) {
		if(typeof(obj[key]) == 'object') {
			//对象属性为对象时
			if(Object.keys(obj[key]).length == 0) {
				is = true;
				break;
			}
		}
		else {
			if(obj[key] === '' || obj[key] === null || obj[key] === undefined) {  //用!和==会排出参数为0的情况
				is = true;
				break;
			}
		}
	}
	return is;
}

//判断手机号码格式
export function isPhone(str) {
	let is = true;
	if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(str))) {
		is = false;
	}
	return is;
}

//时间戳转时间
function toDouble(m){
	//缺0补位
	return m < 10 ? '0' + m : m + '';
}
export function transeTime(time, type) {
	//如果转换之后是1970，时间 * 1000
	let oDate = 0;
	if(time) {
		//如果传入时间戳
		//time是整数，否则要parseInt转换
		oDate = new Date(Number(time));
	}
	else {
		//没有则获取当前时间
		oDate = new Date();
	}
	let data = {
		year: oDate.getFullYear().toString(),
		month: toDouble(oDate.getMonth()+1),
		day: toDouble(oDate.getDate()),
		hour: toDouble(oDate.getHours()),
		minute: toDouble(oDate.getMinutes()),
		second: toDouble(oDate.getSeconds()),
		week: oDate.getDay().toString()
	};
	if(!type) {
		//未传类型，直接返回
		return data;
	}
	else {
		if(type == 'Y-M-D H:M:S') {
			return data.year + '-' + data.month + '-' + data.day + ' ' + data.hour + '：' + data.minute + '：' +data.second;
		}
		else if(type == 'Y-M-D') {
			return data.year + '-' + data.month + '-' + data.day;
		}
		else {
			//其他类型……未设置，暂时返回时间对象
			return data;
		}
 	}
	
}

// 颠倒对象数组
export function reverseArrObj (array) {
	let newArr = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArr[newArr.length] = array[i];
	}
	return newArr;
}