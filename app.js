const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const admin = require('./routes/admin')
const tuiguang = require('./routes/tuiguang')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'content-type,xfilecategory,xfilename,xfilesize,u_id,device_id,uid,deviceid,X-Requested-With');
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');
    if (ctx.request.method == "OPTIONS") {
        ctx.response.status = 200
    }
    await next();
});

// routes
app.use(admin.routes(), admin.allowedMethods())
app.use(tuiguang.routes(), tuiguang.allowedMethods())
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
