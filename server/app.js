const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const mongoose = require('mongoose');
const bodyparser = require('koa-bodyparser')();
const session = require('koa-session');
const logger = require('koa-logger');
const router = require('./router');
const rest = require('./middleware/rest');
const error = require('./middleware/error');
mongoose.Promise = require('bluebird');

const DB_URL = 'mongodb://localhost:27017/blog';

//；连接数据库
mongoose.connect(DB_URL);

app.keys = ['davinci'];

// session设置
app.use(session({
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
}, app));

app.use(bodyparser);
app.use(json());
app.use(rest);
app.use(error);
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(router());

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(8000)

module.exports = app;