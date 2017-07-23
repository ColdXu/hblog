// rest统一json处理
module.exports = async (ctx, next) => {
    ctx.rest = (data) => {
        ctx.response.type = 'application/json';
        ctx.response.body = {
            code: 0,
            data
        }
    }
    await next();
}