const router = require('koa-router')()
const TuiGuangModel = require('../model/TuiGuang.js');

const multer=require('koa-multer')
const mem = require('../util/mem.js')


router.prefix('/tuiguang')
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, __dirname+'/../public/upload/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

//加载配置
var upload = multer({ storage: storage });

router.post('/upload', upload.single('pic'), async function(ctx, next) {
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }
})


router.post('/add', async (ctx, next) => {
   var message = new TuiGuangModel({
        pageTitle: ctx.request.body.pageTitle,
        picurl: ctx.request.body.picurl,
        capter: ctx.request.body.capter,
        statisticsUrl: ctx.request.body.statisticsUrl,
        channel: ctx.request.body.channel,
        remarks: ctx.request.body.remarks,
        date: ctx.request.body.date,
        reading : ctx.request.body.reading,
        weight : ctx.request.body.weight,
        status : ctx.request.body.status
   })
   await message.save()
   ctx.body = {data: message}
})

router.get('/delete',async (ctx, next) => {
    var selector = {
        id: ctx.query.id
    }
    await TuiGuangModel.remove(selector)
    ctx.body = {
        'message':'delete success'
    }
})


router.get('/get_content', async(ctx, next) => {
    var id = ctx.query.id
    var message = await TuiGuangModel.findOne({id:id});
    ctx.body = {data: message}
})

router.post('/update', async(ctx, next) => {
    var id = ctx.request.body.id
    var message = {}
    if(ctx.request.body.pageTitle)
        message.pageTitle = ctx.request.body.pageTitle
    if(ctx.request.body.picurl)
        message.picurl= ctx.request.body.picurl
    if(ctx.request.body.capter)
        message.capter= ctx.request.body.capter
    if(ctx.request.body.statisticsUrl)
        message.statisticsUrl= ctx.request.body.statisticsUrl
    if(ctx.request.body.channel)
        message.channel= ctx.request.body.channel
    if(ctx.request.body.remarks)
        message.remarks= ctx.request.body.remarks
    if(ctx.request.body.date)
        message.date= ctx.request.body.date
    if(ctx.request.body.reading)
        message.reading = ctx.request.body.reading
    if(ctx.request.body.weight)
        message.weight = ctx.request.body.weight
    if(ctx.request.body.status)
        message.status = ctx.request.body.status
    
    let tuiguang =  await TuiGuangModel.findOneAndUpdate({id:id}, message,{new:true})
    await mem.set('tuiguang_'+id,"",60)
    ctx.body ={
        data: tuiguang
    }
})



module.exports = router;