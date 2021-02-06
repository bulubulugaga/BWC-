//输入双向绑定

function inputChange(_this, e) {
  //e和value分开传参，组件和原生返回的value格式不一致
  let targetData = e.currentTarget.dataset.model;
  let value = 0; 
  if(e.detail.hasOwnProperty('value')) {
    //原生input-value值
    value = e.detail.value;
  }
  else {
    //组件input-value值
    value = e.detail;
  }
  _this.setData({
    [targetData]: value
  })
}

export default inputChange


//使用
// <input value="{{name}}" bindinput="inputChange" data-model="name"  />
// name为绑定的value
//   js页面先引入文件，再调用
//    inputChange(e) {
//      inputChange(this, e)
//       传this，防止这边this指向不一致
//    }