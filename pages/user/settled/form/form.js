// pages/user/settled/form/form.js
import { shopSettled, getInfoB, shopEdit, addSettled } from '../../../../service/user'
//判断格式
import { isObjHasNull, isPhone, reverseArrObj } from '../../../../utils/util.js'
//引入城市
import cityStatic from '../../../../static/js/citys'
// 上传图片
import { uploadFile } from '../../../../service/uploadFile'
// 获取分类
import { getCategoryA } from '../../../../service/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meta: '商家入驻',  //navbar标题
    //输入框样式
    fieldStyle: `font-size: 30rpx;
                 height: 90rpx;
                 align-items: center;
                 background-color: rgba(0, 0, 0, 0);`,

    //平台选择
    platforms: [  
      {type: 1, img: '/static/images/user/mei.png', active: false, name: '美团'},
      {type: 2, img: '/static/images/user/elme.png', active: false, name: '饿了么'}
    ],

    //表单
    name: '',
    phone: '',
    bussinessName: '',
    time: '',
    city: '',
    type: '',
    typeId: '',
    address: '',
    codeImg: [],
    logo: [],

    //时间弹窗
    isShowTime: false,
    afterTime: [],
    afterTimeIndex: -1,
    beforeTimeIndex: -1,

    //城市弹窗
    isShowCity: false,
    citys: [],
    proviceIndex: 0,
    cityIndex: 0,

    //经营类弹窗
    isshowType: false,
    types: [],

   
    id: '',  //商家id
    isAddOther: false  //是否为之前入驻一个平台，现在添加

  },

  choosePlat(e) {
    //选择入住平台
    const index = e.currentTarget.dataset.index;
    const demo='platforms['+index+'].active';
    this.setData({
      [demo]: !this.data.platforms[index].active
    })
  },

  submit() {
    //提交
    if(this.data.meta == '商家入驻') {
      //商家入驻
      //获取美团或者饿了么
      let codeImg_arr = [];
      let able = true;  //上传二维码是否完整
      for(let i = 0 ; i < 2 ; i++) {
        let item = this.data.platforms[i];
        if(item.active) {
          if(!this.data.codeImg[i]) {
            wx.showToast({
              title: '请上传' + item.name + '店铺二维码',
              icon: 'none'
            })
            able = false
            break;
          }
          codeImg_arr[i] = this.data.codeImg[i];
        }
      }
      if(!able) { return; }
      let codeImg_mt = codeImg_arr[0] || '';
      let codeImg_elm = codeImg_arr[1] || '';

      //表单数据
      let data = {
        name: this.data.name,
        phone: this.data.phone,
        business_time: this.data.time,
        city: this.data.city,
        business_type: this.data.typeId,
        details_address: this.data.address,
        mt_status: this.data.platforms[0].active == true ? 1 : 0,
        elm_status: this.data.platforms[1].active == true ? 1 : 0,
        img: this.data.logo[0],
        business_name: this.data.bussinessName,
      }
      if(isObjHasNull(data)) {
        wx.showToast({
          title: '请完整填写信息',
          icon: 'none'
        });
        return;
      }
      data.codeImg_mt = codeImg_mt;
      data.codeImg_elm = codeImg_elm;
      if(!isPhone(this.data.phone)) {
        wx.showToast({
          title: '手机号格式不正确',
          icon: 'none'
        });
        return;
      }
      shopSettled(data).then(res => {
        wx.showToast({
          title: res.data
        });
        wx.navigateBack();
      })
    }
    else {
      //修改信息

      // 判断添加平台是否上传二维码
      if(this.data.isAddOther && (!this.data.codeImg[1])) {
        wx.showToast({
          title: '请上传' + this.data.platforms[1].name + '店铺二维码',
          icon: 'none'
        })
        return;
      }


      // 循环店铺id进行修改
      this.data.id.forEach((item, index) => {
        //表单数据
        let data = {
          id: item,
          name: this.data.name,
          phone: this.data.phone,
          business_time: this.data.time,
          city: this.data.city,
          business_type: this.data.typeId,
          details_address: this.data.address,
          img: this.data.logo[0],
          business_name: this.data.bussinessName,
        }
        if(isObjHasNull(data)) {
          wx.showToast({
            title: '请完整填写信息',
            icon: 'none'
          });
          return;
        }
        if(!isPhone(this.data.phone)) {
          wx.showToast({
            title: '手机号格式不正确',
            icon: 'none'
          });
          return;
        }
        if(this.data.isAddOther) {
          //入驻新平台
          if(this.data.platforms[1].type == 1) {
            // 新入驻美团
            data.mt_status = 1;
            data.elm_status = 0;
            data.codeImg_mt = this.data.codeImg[1];
            data.codeImg_elm = '';
          }
          else {
            data.mt_status = 0;
            data.elm_status = 1;
            data.codeImg_mt = '';
            data.codeImg_elm = this.data.codeImg[1];
          }
          addSettled(data).then(res => {
            
          })
        }
        //获取上传的二维码图片
        let codeImg_mt = this.data.platforms[index].type == 1 ? this.data.codeImg[index] : '';
        let codeImg_elm = this.data.platforms[index].type == 2 ? this.data.codeImg[index] : '';
        data.codeImg_mt = codeImg_mt;
        data.codeImg_elm = codeImg_elm;
        // 删除平台属性，防止有影响
        delete data.mt_status;
        delete data.elm_status;
        //修改信息
        shopEdit(data).then(res => {
          if(index == this.data.id.length - 1) {
            wx.showToast({
              title: res.data,
              icon: 'none'
            });
            setTimeout(() => {
              wx.navigateBack();
            }, 1500)
          }
        })
      })
      
    }
  },

  showPopup(e) {
    //展示弹窗
    let type = e.currentTarget.dataset.type;
    this.setData({ [type]: true });
  },

  closePopup(e) {
    // 关闭弹窗
    let type = e.currentTarget.dataset.type;
    this.setData({ [type]: false });
  },

  _getTime() {
    //时间列表
    let time = [];
    let hour = '';
    for(let i = 0; i < 24; i++ ) {
      hour = i < 10 ? '0' + i : i;
      time.push(hour + ': 00');
      time.push(hour + ': 30');
    }
    this.setData({
      afterTime: time
    })
  },

  chooseTime(e) {
    //点击时间选项
    let type = e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    this.setData({
      [type]: index
    })
  },

  chooseTime24() {
    //选择24小时
    this.setData({
      afterTimeIndex: -1,
      beforeTimeIndex: -1
    })
  },

  sureTime() {
    //确认选择时间
    if(this.data.afterTimeIndex == -1 && this.data.beforeTimeIndex == -1) {
      this.setData({
        time: '24小时',
        isShowTime: false
      })
      return;
    }
    if(this.data.afterTimeIndex != -1 && this.data.beforeTimeIndex == -1) {
      wx.showToast({
        title: '请选择结束营业时间',
        icon: 'none'
      })
      return;
    }
    if(this.data.afterTimeIndex == -1 && this.data.beforeTimeIndex != -1) {
      wx.showToast({
        title: '请选择开始营业时间',
        icon: 'none'
      })
      return;
    }
    this.setData({
      time: this.data.afterTime[this.data.afterTimeIndex] + ' - ' + this.data.afterTime[this.data.beforeTimeIndex],
      isShowTime: false
    })
  },

  _getCity() {
    //初始化城市列表
    this.setData({
      citys: cityStatic
    })
  },

  chooseProvice(e) {
    //选择省份
    this.setData({
      proviceIndex: e.currentTarget.dataset.index,
      cityIndex: 0
    })
  },

  chooseCity(e) {
    //选择城市
    this.setData({
      cityIndex: e.currentTarget.dataset.index
    })
  },

  sureCity() {
    //确认选择城市
    let provice = this.data.citys[this.data.proviceIndex].name;
    let city = this.data.citys[this.data.proviceIndex].child[this.data.cityIndex].name;
    this.setData({
      city: provice + city,
      isShowCity: false
    })
  },

  chooseType(e) {
    //选择经营品类
    this.setData({ 
      type: e.detail.name,
      typeId: e.detail.id 
    });
  },

  addOther() {
    // 添加其他平台
    let { platforms } = this.data;
    if(this.data.platforms[0].type == 1) {
      // 当前入驻美团
      platforms.push(
        {type: 2, img: '/static/images/user/elme.png', active: true, name: '饿了么'}
      )
    }
    else {
      platforms.push(
        {type: 1, img: '/static/images/user/mei.png', active: true, name: '美团'}
      )
    }
    this.setData({ 
      platforms,
      isAddOther: true 
    });
  },

  quOther() {
    // 取消其他平台入驻
    let { platforms } = this.data;
    platforms.pop();
    this.setData({ 
      platforms,
      isAddOther: false 
    });
  },

  _getData() {
    //初始化数据
    this._getTime();
    this._getCity();
    this._getCategory();
  },

  upImg(e) {
    // 上传二维码或logo
    let _this = this;
    let type = e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        let codeImgs = [{ path: res.tempFilePaths[0] }]
        uploadFile(codeImgs).then(res1 => {
          let demo = type + '[' + index +']';
          _this.setData({ [demo]: res1[0].url });

          //如果上传二维码，自动选择平台
          if(type == 'codeImg') {
            const demo1='platforms['+index+'].active';
            _this.setData({
              [demo1]: true
            })
          }

        })
      }
    })
  },

  _getCategory() {
    getCategoryA().then(res => {
      let list = reverseArrObj(res.navigation);
      let types = [];
      list.forEach(item => {
        types.push({
          id: item.id,
          name: item.type_title
        })
      })
      this.setData({ types });

      //如果是修改页面，获取经营品类
      const pages = getCurrentPages();
      const bpage = pages[pages.length - 2];
      if(bpage.route == 'pages/shop/shop') {
        for(let i = 0 ; i < this.data.types.length ; i++) {
          if(this.data.types[i].id == this.data.typeId) {
            this.setData({
              type: this.data.types[i].name
            })
            break;
          }
        }
      }
    })
  },

  _getInfoB() {
    // 获取商家信息
    return new Promise ((resolve, reject) => {
      getInfoB().then(res => {
        // 店铺id
        let id = [];
        res.data.forEach(item => {
          id.push(item.id);
        });
        //公共信息
        const info = res.data[0];
        // 二维码
        let codeImg = [];
        // 判断申请了几个平台
        let platforms = [];
        if(res.data[1]) {
          // 两个平台
          platforms = [  
            {type: 1, img: '/static/images/user/mei.png', active: true, name: '美团'},
            {type: 2, img: '/static/images/user/elme.png', active: true, name: '饿了么'}
          ];
          codeImg[0] = res.data[0].codeImg_mt;
          codeImg[1] = res.data[1].codeImg_elm;
        }
        else {
          // 一个平台
          if(info.mt_status == 1) {
            // 美团
            platforms = [  
              {type: 1, img: '/static/images/user/mei.png', active: true, name: '美团'}
            ];
            codeImg[0] = info.codeImg_mt;
          }
          else {
            platforms = [  
              {type: 2, img: '/static/images/user/elme.png', active: true, name: '饿了么'}
            ];
            codeImg[0] = info.codeImg_elm;
          }
        }
        this.setData({
          name: info.name,
          phone: info.phone,
          bussinessName: info.business_name,
          time: info.business_time,
          city: info.city,
          type: '',
          typeId: info.business_type,
          address: info.details_address,
          platforms,
          codeImg,
          logo: [info.img],
          id
        });
        resolve();
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.before == 'edit') {
      //修改商家资料
      this.setData({
        meta: '修改店铺资料'
      })
      this._getInfoB().then(() =>{
        this._getData();
      });
    }
    else {
      this.setData({
        meta: '商家入驻'
      })
      this._getData();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})