//内置模块，引入即可使用
const fs = require('fs')

exports.read = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if(!err) {
                resolve(data)
            } else {
                console.log(err);
                reject(err)
            }
        })
    })
}
