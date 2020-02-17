//本章主要讲述云函数的本地调试功能
Page({

  data: {

  },

  clickEvent_01:function(){
    wx.cloud.callFunction({
      //name指定云函数名称
      name:'cloudText_01',
      data:{
        a:5,
        b:5
      },
      success:(res) => {
        console.log(res.result.sum,'--- res ----')
      },
      fail:(err) => {
        console.log(err,'--- err ----')
      }
    })
  },
  clickEvent_02:function(){
    wx.cloud.callFunction({
      name:'cloudText_02',
      success:res=>{
        console.log(res.result.data,'调用接口成功！')
      },
      fail:err=>{
        console.log(err, '调用接口失败！')
      }
    })
    
  },



  onLoad: function (options) {

  },

  onShow: function () {

  }
})