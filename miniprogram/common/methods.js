const db = wx.cloud.database()
const banner = db.collection('tables')

//获取列表
const getList = () => {
  return banner.get().then(res => {
    const data = res['data']
    return data
  })
    .catch(err => {
      return []
      console.log(err, '调用失败')
    })
}
//查
const searchList = (params) => {
  return banner.where({
    userName: params
  }).get().then(res=>{
    return res.data
  })
}

//增
const addList = (params) => {
  return banner.add({
    data:{
      ...params,
      avatarImg: "https://wx2.sinaimg.cn/crop.35.0.569.427.240/007O7SS5ly4gb58fx6fr0j30hs0bvdg0.jpg",
      id: 4,
      userName: '大晴',
      image: 'https://wx4.sinaimg.cn/crop.0.0.640.480.240/007YTeQwly4gb8pi9oqhrj30hs0es3zs.jpg',
      _id: randomString(48),
      add_time: getTime(),
    }
  }).then(res=>{
    if (res.errMsg === 'collection.add:ok'){
      return true
    }else{
      return false
    }
  })
}

//局部更改
const changeList = (params) => {
  const { id,content } = params
  return banner.doc(id).update({
    data:{
      content
    }
  }).then(res=>{
    const { errMsg, stats} = res
    const { updated } = stats
    if (updated > 0 && errMsg === "document.update:ok"){
      return true
    }else{
      return false
    }
  })
}

//删除
const delList = (id) => {
  //banner.doc的作用根据对应的key的值，获取对应的那条数据
  return banner.doc(id).remove({}).then(
    {success: res => {
      if (res.errMsg === 'collection.add:ok') {
        return true
      } else {
        return false
      }
    }
    }
  )
}

//随机生成48位大小写字母
 const randomString = (len) => {
  //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var tempLen = chars.length, tempStr = '';
  for (var i = 0; i < len; ++i) {
    tempStr += chars.charAt(Math.floor(Math.random() * tempLen));
  }
  return tempStr;
}

//获取时间
const getTime = () => {
  const date = new Date()
  return date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate()+"日"
}


const actions = {
  getList,
  addList,
  delList,
  getTime,
  changeList,
  searchList,
  randomString
}

export default actions