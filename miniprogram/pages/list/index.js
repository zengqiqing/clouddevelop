import actions from '../../common/methods.js'
const { getList, changeList, searchList, delList } = actions
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchName:'',
    showDel:false,
    showPop:false,
    popContent:'',
    editId:''
  },

  onLoad: function (options) {
  }, 
  onShow: function () {
    this.getDataList()
  },

  //获取列表 
  getDataList : function() {
    getList().then(res => {
      this.setData({
        commentsList: res,
      })
    })
  },

  //改
  upDateEvent: function ({ currentTarget }){
    const { item } = currentTarget.dataset
    const { _id, content} = item
    this.setData({
      showPop:true,
      popContent: content,
      editId: _id
    })
  },

  //输入
  inputEvent:function(e){
    const val = e.detail.value
    let that = this
    that.setData({
      searchName:val
    })
  },
  //修改文本域内容
  editTextArea: function(e) {
    const val = e.detail.value
    let that = this
    that.setData({
      popContent: val
    })
  },
  //搜索
  searchEvent: function ({ currentTarget}){
    const state = currentTarget.dataset.type
    if (state){
      const val = this.data.searchName
      if (!val) {
        wx.showToast({
          title: '请输入搜索内容',
          icon: 'success',
          duration: 1000
        })
      }
      this.getSearchData(val)
    }else{
      this.setData({
        searchName:''
      })
      this.getSearchData()
    }
    
  },

  //删除
  delectEvent: function ({ currentTarget}){
    const { id } = currentTarget.dataset
    const params = id.toString()
    delList(params).then(res=>{
      if(res){
        wx.showToast({
          title: '删除成功！',
        })
        this.getDataList()
      }
    })
  },
  //搜索接口
  getSearchData:function(val){
    searchList(val).then(res => {
      this.setData({
        commentsList: res
      })
    })
  },
  
  //确认弹窗
  surePop: function (){
    const { editId, popContent } = this.data
    changeList({ id: editId, content: popContent}).then(res=>{
      if(res){
        wx.showToast({
          title: '修改成功',
        })
      this.cancelPop()
      this.getDataList()
      }
    })
  },
  
  //关闭弹窗
  cancelPop:function(){
    this.setData({
      showPop:false
    })
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