const home = require('../api/home');
const user = require('../api/user');
const article = require('../api/article');
const authorization = require('../middleware/authorization');
const router = require('koa-router')();
const API = '/api/';

router.get(API + 'home', authorization, home.test)
    .post(API + 'user/regiser', user.post_regiser)
    .get(API + 'logout', authorization, user.get_logout)
    
    .post(API + 'login', user.post_login)
    .post(API + 'admin/article', authorization, article.post_admin_article)
    .get(API + 'admin/article/list', authorization, article.get_admin_article_list)
    .get(API + 'admin/article/:id', authorization, article.get_admin_article)
    .delete(API + 'admin/article/:id', authorization, article.delete_admin_article)
    .put(API + 'admin/article/:id', authorization, article.put_admin_article)
    
module.exports = function () {
    return router.routes();
}