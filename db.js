//封装数据库
const mysql = require('mysql')

const config = {
    host:'localhost', //主机地址
    port:'3306',
    user:'root',
    password:'1234',
    database: 'bigscreen',
}
// [], {}, [{}, id]
exports.db = (sql, sqlParams) => {
    sqlParams = sqlParams == null ? [] : sqlParams
    return new Promise((resolve, reject) => {
        const pool = mysql.createPool(config)
        pool.getConnection((err, conn) => {
            if (!err) {
                conn.query(sql, sqlParams, (e, results) => {
                    if (!e) {
                        //console.log('结果：',results)
                        resolve(results)
                        conn.destroy()
                    } else {
                        console.log("sql:", e)
                        reject(e)
                    }
                })
            } else {
                console.log("conn err:", err)
                reject(err)
            }

        })
    })
}