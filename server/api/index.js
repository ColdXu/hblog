// // const verify = require('../middleware/verify');

// /**
//  * 首页
//  * 
//  * @param {any} ctx 
//  * @param {any} next 
//  */
// const home_get = async (ctx, next) => {
//     await verify();
//     ctx.render('index.html', {
//         title: 'Welcome'
//     });
// };

// module.exports = {
//     'GET /': home_get,
// };