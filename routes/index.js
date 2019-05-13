const router = require('koa-router')()
const TuiGuangModel = require('../model/TuiGuang.js');
const mem = require('../util/mem.js')
const domains = require('../conf/proj.json').domains;
const midles = ['a','b','c','d','e']

router.get('/novels', async (ctx, next) => {
  let books = await TuiGuangModel.find({}, {weight:1})
    let book_list = []
    for (var i = 0; i < books.length; i++) {
        let item = books[i]
        for (var j = 0; j < item.weight; j++) {
            book_list.push(item._id)
        }
    }
    //console.log(book_list)
    let book_id = book_list[parseInt(Math.random() * book_list.length)]
    let domain = domains[parseInt(Math.random() * domains.length)]
    let midle = midles[parseInt(Math.random() * midles.length)]
    ctx.redirect('http://'+domain+'/'+midle+'/'+book_id)
})


router.get('/external/tousu',async (ctx, next) => {
	return ctx.render('pages/tousu')
})

router.get('/:index/:item', async (ctx, next) => {
	let _id = ctx.params.item;
	let tuiguang = await TuiGuangModel.findById(_id)
	return ctx.render('pages/content',{
		content:tuiguang
	})
})


module.exports = router
