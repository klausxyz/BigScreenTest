
//引入所需模块
const express = require('express'); //express框架模块
const path = require('path'); //系统路径模块
const app = express();
const {db} = require('./db');
const {read} = require('./read');

//设置静态路径
app.use(express.static(__dirname + '/'));

//统一封装返回

//发送get请求
app.get('/', (req, resp) => {
    read('./index.html')
        .then(res => {
            resp.write(res)
        });
})

//请求柱状图1数据
app.get('/bar1',(req,res) => {
    const sql = 'SELECT * FROM bar1';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})

//请求柱状图2数据
app.get('/bar2',(req,res) => {
    const sql = 'SELECT * FROM bar2';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})


//请求折线图1数据

app.get('/line1',(req,res) => {
    const sql = 'SELECT * FROM line1';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})


//请求折线图2数据

app.get('/line2',(req,res) => {
    const sql = 'SELECT * FROM line2';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})

//请求饼形图1数据

app.get('/pie1',(req,res) => {
    const sql = 'SELECT * FROM pie1';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})


//请求饼形图2数据
/*
app.get('/line',(req,res) => {
    const sql = 'SELECT * FROM line';

    //promise处理有异步的问题，JSON函数处理也有异步问题
    db(sql,null).then(v=>{
        //console.log(JSON.stringify(v));
        res.send(JSON.stringify(v))
    })
})
*/


//监听服务器端口
const hostName = '192.168.137.1'; //ip
const port = 8000; //端口
app.listen(port, hostName, function() {
    console.log(`服务器运行在http://${hostName}:${port}/`);
});
