// 云函数入口文件
const cloud = require('wx-server-sdk')
const url = "http://www.thexxdd.cn/banner/"
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const data = await func()
  return {
    data
  }
}
const func = ()=> {
  return new Promise((resolve, reject) => {
    request.get({
      url
    },
      function (error, response, body) {
        resolve(JSON.parse(body))
      }
    )
  })
}