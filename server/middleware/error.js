const RestError = require('../public/util/error');

// 通用错误处理
module.exports = async (ctx, next) => {
    ctx.throw = function (status, message) {
        throw new RestError(status, message);
    }
    
    try {
        await next();
    } catch (e) {

        let status = e.status || 500;
        let message = e.message || '服务器错误';

        // 如果是数值型则是,http错误
        if (typeof status === 'number') {
            ctx.response.status = status;
        }

        if (e instanceof RestError) {
            ctx.response.type = 'application/json';
            ctx.response.body = {
                code: status.toString(),
                message
            }
        }
    }
}