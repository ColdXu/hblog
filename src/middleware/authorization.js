module.exports = async (ctx, next) => {
  if (!ctx.session.user) {
    ctx.throw(401, '你还没有登录！')
  }
  await next();
}
