var User = require('../model/user');

/**
 * 注册
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const post_regiser = async (ctx, next) => {

    const { username, password } = ctx.request.body;

    const userData = await User.findOne({ username });

    if (userData) {
        return ctx.throw('user:registered', '账号已注册');
    }

    const user = new User({
        username,
        password,
        rule: ['admin'],
        createDate: new Date().getTime()
    });

    await user.save().then(data => {
        ctx.rest();
    }).catch(err => {
        ctx.throw('user:register_error', '注册失败')
    });
};

/**
 * 登录
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const post_login = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    console.log(username)
    const user = await User.findOne({ username });
    console.log('user', user);
    
    if (!user) {
        return ctx.throw('user:not_registered', '用户名不存在');
    }

    if (user.password !== password) {
        return ctx.throw('user:password_error', '密码错误');
    }

    console.log('nihao')
    ctx.session.user = user;
    ctx.rest();
};

/**
 * 注销
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const get_logout = async (ctx, next) => {
    delete ctx.session.user;
    ctx.rest();
}

module.exports = {
    post_regiser,
    post_login,
    get_logout
};