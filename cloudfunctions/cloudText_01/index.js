// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

/*
  *event 接收前端的入参
  *context 返回状态
*/ 
//云函数入口函数
exports.main = async (event, context) => {

  return {
    sum:event.a + event.b
  }
}