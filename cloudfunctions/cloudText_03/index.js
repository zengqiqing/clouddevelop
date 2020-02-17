// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')

cloud.init({
  traceUser: true,
  env: 'cloud-develop-26'
})

// 云函数入口函数
exports.main = async (event, context) => {

  //上传文件到云存储
  // return new Promise((resolve,reject)=>{
  //   const fileStream = fs.createReadStream(path.join(__dirname,'../image/pg1.png'))
  //   return new Promise((resolve, reject) => {
  //     cloud.uploadFile({
  //       cloudPath:'images/pg1.png',
  //       fileContent: fileStream
  //     })
  //     .then(res=>{
  //       console.log(res,'--- 上传成功 ----')
  //     })
  //     .catch(err=>{
  //       console.log(err, '--- 上传失败 ----')
  //     })
  //   })
  // })

  //下载文件
  return new Promise((resolve,reject)=>{
    const fileID = 'cloud://cloud-develop-26.636c-cloud-develop-26-1301283831/images/pg1.png'
    cloud.downloadFile({
      fileID
    })
    .then(res=>{
      const imgUrl = res.fileContent.toString('utf8')
      console.log(imgUrl,'--- 下载成功 ----')
    })
    .catch(err=>{
      console.log(err, '--- 下载失败 ----')
    })
  })

  //删除云存储的图片
  return new Promise((resolve, reject) => {
    const fileIDs = ['cloud://cloud-develop-26.636c-cloud-develop-26-1301283831/images/pg1.png']
    cloud.deleteFile({
      fileID
    })
      .then(res => {
        const imgUrl = res.fileContent.toString('utf8')
        console.log(imgUrl, '--- 删除成功 ----')
      })
      .catch(err => {
        console.log(err, '--- 删除失败 ----')
      })
  })
}