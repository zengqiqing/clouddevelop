# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

##云函数的使用
1.在cloudfunctions文件夹中选好你的环境
2.在cloudfunctions文件夹目录下新建node.js云函数
3.写完逻辑后，记得右击：上传并部署
4.右击，打开本地调试，进行测试
5.测试通过后，可以到前端js页面进行调用
调用方法有2种：
  ①.调用数据库的，用db.collection("指定数据库名称").get()……
  ②.调用接口的，参考云函数cloudText_02语法。使用request.get({url})……
6.上传、下载、删除 图片到云存储，参考云函数cloudText_03文件下的index.js文件
