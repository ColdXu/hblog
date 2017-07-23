var Article = require('../model/article');

/**
 * 新建文章
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const post_admin_article = async (ctx, next) => {
    const { title, describe } = ctx.request.body;
    const createDate = new Date().getTime();

    const article = new Article({
        title,
        describe,
        createDate,
        modifyDate: createDate,
        tags: [],
        status: 'edit',
        pv: 0
    });

    await article.save().then(data => {
        ctx.rest();
    }).catch(err => {
        ctx.throw('user:register_error', '添加文章失败')
    });
};

/**
 * 文章列表
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const get_admin_article_list = async (ctx, next) => {
    const list = await Article.find({});
    ctx.rest(list);
};


/**
 * 获取文章
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const get_admin_article = async (ctx, next) => {
    const { id } = ctx.params;
    const article = await Article.findOne({ _id: id });

    if (article) {
        ctx.rest(article);
    } else {
        ctx.throw('article:article_not_found', '文章已删除')
    }
    
};

/**
 * 修改文章
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const put_admin_article = async (ctx, next) => {
    const { title, describe } = ctx.request.body;
    const { id } = ctx.params;

    const article = await Article.findOne({ _id: id });

    if (!article) {
        ctx.throw('article:update_article_not_found', '修改失败，文章可能被删除')
    }

    await Article.update({ _id: id }, {
        $set: {
            title,
            describe
        },
    }).then(data => {
        ctx.rest();
    }).catch(err => {
        ctx.throw('article:update_article_error', '修改失败')
    });
};

/**
 * 删除文章
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const delete_admin_article = async (ctx, next) => {
    const { id } = ctx.params;
    await Article.remove({ _id: id }).then((data) => {
        ctx.rest();
    }).catch(err => {
        ctx.throw('article:delete_article_error', '删除文章失败')
    });
    
};

module.exports = {
    post_admin_article,
    get_admin_article_list,
    get_admin_article,
    delete_admin_article,
    put_admin_article
};