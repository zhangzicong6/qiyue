var index=1;
var isa = 0;
var j=1;//上次结束index
var fh_href;
$(function(){
    if(scene=='yg' || scene == 'wzrg' || scene == 'wz-fh' || scene == 'jkd-dj' || scene == 'ds-xs'
     || scene == 'ds-fh' || scene=='share' || scene=='share-two' || scene=='bysm' || scene=='she'
    || scene=='jzxs-list'){
        show=1;
    }
     contents();
    /*if(scene=='yg'|| scene == 'wzrg'){
        show=1;
    }else if(scene=='wz-fh' || scene=='jzxs-list'){
        show=0;
    }*/
    if(show==1 || show=='1') {
        var hyadhtml = getLizsAd(1);
        $("#ad0").html(hyadhtml);
        var hyadhtml = getLizsAd(1);
        $("#adv0").html(hyadhtml);
        var hyadhtml = getLizsAd(1);
        $("#adv1").html(hyadhtml);
        var hyadhtml = getLizsAd(1);
        $("#adv2").html(hyadhtml);
    }
    //showAdv();
    $(window).scroll(
        function() {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            var scrollHeight1 = scrollHeight - 500;
            if(scrollTop + windowHeight >= scrollHeight1 && isa == 0) {
                // 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
                isa = 1;
                contents(); //页面渲染
            }
        });

    pushHistory();
    //监听浏览器后退事件
    window.addEventListener("popstate",
            function(e) {
                //转向指定的URL
                location.href=fh_href;
            }, false);
    //清空浏览器历史记录
    function pushHistory() {
        var url = "#";
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }


    $("#advbottomurl").on("click",function () {
        window.location.href = "http://gg7.ybfbs.com./novel/mynovel?info=rt&type=xzlist";
    });

    var userarr = ["诱惑", "可爱", "开心", "赚钱", "莲子"];
    var userimg=["https://tvax1.sinaimg.cn/crop.0.0.1242.1242.180/838145baly8ft60qva66yj20yi0yi76s.jpg",
    "https://tvax2.sinaimg.cn/crop.92.12.355.355.180/00726fyUly8fntz4u8mwgj30hs0dqt9f.jpg",
    "https://tvax4.sinaimg.cn/crop.0.0.400.400.180/007j0kSYly8fx0lziqd0jj30b40b4aaj.jpg"
    ,"https://tva1.sinaimg.cn/crop.0.0.1152.1152.180/0064sfU0jw8ex1i70aawej30w00w078j.jpg",
    "https://wx2.sinaimg.cn/thumb180/e0f597faly1fee8m7zas2j20hs0pwq3v.jpg"];
    for (var i = 0; i < 4; i++) {
        $(".myul").append(' <li><div class="useritem"><span class=\"ucimgs pa\" style=\"background:url('+userimg[i]+');background-size:cover;\"></span><span class=\"ucinfor pa\"><span style=\"font-size:0.55rem;\">' + userarr[i] + '&nbsp;3秒前</span><br>提现10元</span></div></li>');
    }

    var slideBox = $(".slideBox");
    var ul = slideBox.find("ul");
    var uili = $(".slideBox ul li");
    var oneHeight = slideBox.find("ul li").eq(0).height();
    var linumber = uili.length;
    var timer = null;
    var sw = 0;
    //定时器的使用，自动开始
    timer = setInterval(function () {
        sw++;
        if (sw % 5 == 0) {
            var newul = uili.clone();
            ul.append(newul);
        }
        ul.animate({
            "bottom": oneHeight * sw,    //ul标签的动画为向上移动；
        });

    }, 2000);
})

function showAdv() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        $("#adv").css("display","inline");
        $(".top_carousel.download02").remove();
    }
    if(isiOS){
        $("#adv").remove();
        LBcontents();
    }
}

function getLizsAd(asize) {
    return showadvlist('jzxs',scene);
}

function loadAd(){
    var articleLength = 0;
    for(var i=j;i < index;i++) {
        if(i%3==0) {
            var hyadhtml = getLizsAd(i);
            $("#ad" + i).html(hyadhtml);
        }
    }
}


function LBcontents() {
    $.post(ctx+"/detail/contents",{uid: uid,scene:scene,num:"5"}, function (data) {
        var contents=data.data.contents;
        if(contents.length >0){
            var str = '';
            for(var i = 0; i < 3; i++){
                str +='<div class="swiper-slide swiper-slide01 seep swenp3 contentlink" data-swiper-slide-index="1" content_href=' + contents[i].linkherf + '>' +
                    '<div class="arts">' +
                    '<div class="hots_ul zyadv zyadv2">' +
                    '<a class="lista lista02 flex_box ui_paddingB_24" href="javascript:void();" style="position:relative;">' +
                    '<div class="bg_img" >' +
                    '<img class="lis_img borderA_1" src="' + contents[i].pics[0] + '"></div>' +
                    '<div class="li_right ui_paddingR_2">' +
                    '<h2 class="textLen_2">'+contents[i].title + '</h2>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            var wz1='';
            for (var i=3;i<5;i++){
                wz1+='<a href="http://gg2.iheiyu.net./novel/xsnovel?info=tz5"><span>·</span>推荐：'+contents[i].title+'</a>';
            }
            /*var wz2='';
            for (var i=5;i<contents.length;i++){
                wz2+='<a href="http://'+contents[i].linkherf+'"><span>·</span>推荐：'+contents[i].title+'</a>';
            }*/
            $("#swiper_bottom").append(str);
            $("#xiangtop").append(wz1);
            //$("#xiangX").append(wz2);
            $('.contentlink').click(function () {
                var content_href = $(this).attr('content_href');
                window.location.href = "http://"+content_href;
            });
        }
        startSwiper();   //底部轮播
    }, 'json');

}

function contents() {
    if(scene=='wbtf') {
        $(".contentlist").hide();
        fh_href="";
        return;
    }
    $.post(ctx+"/detail/contents", {uid: uid,scene:scene,num:"12"}, function (data) {
        var contents=data.data.contents;
        if(contents.length >0){
            var str = '';
            j=index;
            fh_href="http://"+contents[0].linkherf;
            for(var i = 0; i < contents.length; i++){
                //var rdnum = Math.floor(Math.random() * 39)+1;
                //var imgurl="http://b.jzdp8.cn/zqsharepic/qingxin_"+rdnum+".jpg?x-oss-process=image/resize,w_200"
                if(i%3==0 && contents[i].pics.length>=3){
                    str+=wzSt(contents[i].title,contents[i].pics,contents[i].readcount,contents[i].linkherf);
                }else{
                    str+=wzYt(contents[i].title,contents[i].pics[0],contents[i].readcount,contents[i].linkherf);
                }
                if((show==1 || show=='1') && index%3==0) {
                    str += '<li id="ad' + index + '" class="clearfix"></li>';
                }
                index++;
            }
            $("#contentlist").append(str);
            $('.contentlink').click(function () {
                var content_href = $(this).attr('content_href');
                window.location.href = "http://"+content_href;
            });
            isa=0;
        }
        if(contents.length<12){
            isa=1;
        }
        if(show==1 || show=='1') {
            loadAd();
        }
    }, 'json');

}

/*文章左图*/
function wzZt(title,img,readcount,linkherf) {
    var wzZt='<li class="clearfix contentlink" content_href=' + linkherf + '>' +
        '<div class="item_media item_media32 fl">' +
        '<div class="im_img">' +
        '<img src="'+img+'"/></div>' +
        '</div>' +
        '<div class="item_inner item_inner67 fr">' +
        '<div class="item_title">'+title+'</div>' +
        '<div class="item_subtitle clearfix">' +
        '<div class="item_subtitle"><span>'+readcount+'阅读</span></div>' +
        '</div>' +
        '</div>' +
        '</li>';
    return wzZt;
}
/*文章右图*/
function wzYt(title,img,readcount,linkherf) {
    var wzZt='<li class="clearfix contentlink" content_href=' + linkherf + '>' +
        '<div class="item_media item_media32 fr">' +
        '<div class="im_img">' +
        '<img src="'+img+'"/></div>' +
        '</div>' +
        '<div class="item_inner item_inner67 fl">' +
        '<div class="item_title">'+title+'</div>' +
        '<div class="item_subtitle clearfix">' +
        '<div class="item_subtitle"><span>'+readcount+'阅读</span></div>' +
        '</div>' +
        '</div>' +
        '</li>';
    return wzZt;
}
/*文章三图*/
function wzSt(title,img,readcount,linkherf) {
    var wzStHtml='<li class="contentlink" content_href=' + linkherf + '>' +
        '<h2>'+title+'</h2>' +
        '<dl class="clearfix alist_b">' +
        '<dd class="box3 fl">' +
        '<div class="im_img">' +
        '<img src="'+img[0]+'"/>' +
        '</div>' +
        '</dd>' +
        '<dd class="box3 box4 fl">' +
        '<div class="im_img">' +
        '<img src="'+img[1]+'"/>' +
        '</div>' +
        '</dd>' +
        '<dd class="box3 fr">' +
        '<div class="im_img">' +
        '<img src="'+img[2]+'"/>' +
        '</div>' +
        '</dd>' +
        '</dl>' +
        '<div class="item_subtitle clearfix">' +
        '<div class="item_subtitle">' +
        '<span class="hot">热</span><span>'+readcount+'阅读</span>' +
        '</div>' +
        '</div>' +
        '</li>';
    return wzStHtml;
}