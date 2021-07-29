
//引入所需模块
const express = require('express'); //express框架模块
const path = require('path'); //系统路径模块
const app = express();
const {db} = require('./db');
const {read} = require('./read');

//设置静态路径
app.use(express.static(__dirname + '/'));

//统一封装返回

//sql命令
const sql = 'SELECT * FROM bar1';

//有异步的问题
var str;
db(sql,null).then(v=>{  
    str = v; 
    console.log(str);
})


//发送get请求
app.get('/', (req, resp) => {
    read('./index.html')
        .then(res => {
            resp.write(res)
            //resp.json(db(sql,null));
        });
})

app.get('/big', (req, resp) => {

})

//监听服务器端口
const hostName = '192.168.137.1'; //ip
const port = 8000; //端口
app.listen(port, hostName, function() {
    console.log(`服务器运行在http://${hostName}:${port}/`);
});
