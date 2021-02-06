//上传图片
import { baseURL } from './config.js'
export function uploadFile(data) {
	//data传数组
	return new Promise((resolve, reject) => {
		let images = [];
		let i = 1;
		data.forEach(item => {
			// console.log(item.path);
			//循环数组
			wx.uploadFile({
				url: baseURL +'?i=2&c=entry&a=wxapp&m=yzd_edu&do=UploadImg',
				filePath: item.path,
				name: 'upfile',
				success(res) {
					// console.log(res);
					if(res.statusCode == 200) {
						images.push({url: res.data});
						//上传完后才返回
						if(i == data.length) 
							resolve(images);
					}
				},
				fail(err) {
					console.log(err);
				},
				complete() {
					i++;
				}
			});
		})
	})
}