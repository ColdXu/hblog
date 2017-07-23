class Home {
    async test(ctx, next) {
        console.log('nihao')
        // ctx.throw(400, 'fdsafds')
        // console.log(this.throw)
        // this.throw(400, new Error('nihao'))
        // ctx.response.body = '这只是一个测试'
        // ctx.response.type = 'application/json';
        // ctx.response.body = {
        //     a: '213'
        // }
    }
}

module.exports = new Home();