const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')();
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const log4js = require('./utils/log4j')
const users = require('./routes/users')

console.log()
require('./config/db.js')
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
    extension: 'pug'
}))
app.use(async (ctx, next) => {
    await next()
})
router.prefix('/api');
router.use(users.routes(),users.allowedMethods())
app.use(router.routes(),router.allowedMethods())

app.on('info', (err, ctx) => {
    log4js.info(`${err.stack}`)
    console.log(`${err.stack}`,ctx)
});
module.exports = app
