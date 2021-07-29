/**
 *
 * @param {*} options {type: post, contentType..}
 * @description 封装ajax函数
 */
const request = (options) => {
    //传入json对象，包含地址，类型
    return new Promise((resolve, reject) => {
        $.ajax({
            url: options.url,
            type: options.type ? options.type: 'get',

            contentType: 'application/json',
            data: options.data,
            success: (res) => {
                console.log("res:" , res);
                if(res.code === 2000) {
                    resolve(res)
                } else if(res.code === 5010) {
                    location.href = "/toLogin"
                } else {
                    layer.msg(res.msg);
                }
            }
        })
    })
}