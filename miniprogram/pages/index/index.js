import actions from '../../common/methods.js'
const { randomString, addList } =  actions
Page({

  data: {
  },
  formSubmit: function ({ detail }){
    const { content } = detail.value
    const params = {
      content
    }
    addList(params).then(res=>{
      if(res){
        wx.showToast({
          title: '新增成功！'
        })
        wx.switchTab({
          url:'/pages/list/index'
        })
      }
    })
  },
  onLoad: function (options) {

  },

  onShow: function () {
  }
})