const router = require('koa-router')()
const TuiGuangModel = require('../model/TuiGuang')


router.prefix('/admin')

router.get('/', async (ctx, next) => {
	let page = ctx.query.page;
	let count  = await TuiGuangModel.count()
	let pages = count/20 +(count%20?1:0)
	let tuiguangs = await TuiGuangModel.find({},{capter:0}).skip(page*20).limit(20)
  	console.log(tuiguangs)
  	return ctx.render('admin/chapter_list',{
  		pages:pages,
  		tuiguangs : tuiguangs
	})
})

module.exports = router
