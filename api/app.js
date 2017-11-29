let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
require('./db');
let users = require('./routes/users');
let goods = require('./routes/goods')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});
//拦截所有的路由
app.use(function (req,res,next) {
  console.log("url:"+req.originalUrl);
  //如果已经登录或者是登录接口或者是首页商品列表则放行
  if(req.cookies.userId || req.originalUrl === '/users/login' || req.originalUrl.indexOf('/goods/list')>-1){
    next();
  }else{
    return res.json({
      status:'10001',
      msg:'当前未登录',
      result:''
    });
  }
});
app.use('/users', users);
app.use('/goods', goods);
module.exports = app;
