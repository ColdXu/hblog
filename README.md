## 个人博客系统

### 持续集成
[Travis CI](https://www.travis-ci.org/)
test
### 接口文档
|method|api    |describe               |
|----|----|----|
|`post`     |/api/user/regiser      | 注册 |
|`get`      |/api/logout            | 注销 |
|`post`     |/api/login             | 登录 |
|`post`     |/api/admin/article     | 发布文章|
|`get`      |/api/admin/article/list| 获取文章列表|
|`get`      |/api/admin/article/{id}| 获取文章|
|`delete`   |/api/admin/article/{id}| 删除文章|
|`put`      |/api/admin/article/{id}| 文章| 

### 遇到的坑
[启动service mongod start 报错](https://github.com/jingxinxin/tiankeng/issues/5)

 