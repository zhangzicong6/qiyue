var infourl = "http://gglog.box-net.com.cn";
var infocnzz = "http://ggcnzz.box-net.com.cn";
var uuid;
var shareinfo;
var ad1 = [];
var ad2 = [];
var ad3 = [];
var ad4 = [];
var ad5 = [];
var ad6 = [];
var ad8 = [];
var ad9 = [];
var ad10 = [];
var rect_site = new Array();
var ad_code = "1";

var _yh_adurl = '';
var _hy_media = '';
initAd();


function initAd() {
    _hy_media = 'ydxs';
    var domainurl = infourl + "/webarticle/pullAds";
    $.ajax({
        async: false,
        url: domainurl,
        type: "GET",
        data: 'mediacode=' + _hy_media + "&code=" + ad_code,
        timeout: 5000,
        beforeSend: function () {},
        success: function (json) {
            //setInfo(json);
            setInfoNew(json);
            initUU(json);

        }
    });
}

function initUU(info) {
    var obj = eval('(' + info + ')');
    uuid = obj.uuid;
    var url = infocnzz + "/cnzz/inituuid?uuid=" + encodeURIComponent(uuid);
    $(
        "<iframe width='0px' height='0xp;' id='YuFrame11' name='YuFrame11' style='position:absolute;z-index:4;'  frameborder='no' marginheight='0' marginwidth='0' allowTransparency='true' src='" +
        url + "'></iframe>").prependTo('body');
}

function onshow(site_id, local_id) {
    var site_ok = true;
    $.each(rect_site, function (i, item) {
        if (item == site_id) {
            site_ok = false;
        }
    });
    if (site_ok) {
        rect_site.push(site_id);
        var domainurl = infourl + "/log/so";
        $.ajax({
            async: true,
            url: domainurl,
            type: "GET",
            data: 'mediacode=' + _hy_media + "&site_id=" + site_id + "&local_id=" + local_id + "&code=" + ad_code,
            timeout: 5000,
            beforeSend: function () {},
            success: function (json) {

            }
        });
    }
}

function onlogck(site_id, local_id) {
    var domainurl = infourl + "/log/ck";
    $.ajax({
        async: true,
        url: domainurl,
        type: "GET",
        data: 'mediacode=' + _hy_media + "&site_id=" + site_id + "&local_id=" + local_id + "&code=" + ad_code,
        timeout: 5000,
        beforeSend: function () {},
        success: function (json) {

        }
    });
}

function setInfoNew(info) {
    var obj = eval('(' + info + ')');
    var infomsgjson = obj.infomsg;
    var siteMap = obj.siteMap;
    var adDatas = eval('(' + infomsgjson + ')');
    try {
        //底部浮动g
        ad2 = eval('(' + adDatas.ad2 + ')');
        for (i = 0; i < ad2.length; i++) {
            var adobj = ad2[i];
            ad10.push(adobj);
        }
    } catch (e) {}

    try {
        //添加头部g
        ad3 = eval('(' + adDatas.ad3 + ')');
        for (i = 0; i < ad3.length; i++) {
            var adobj = ad3[i];
            ad10.push(adobj);
        }
    } catch (e) {}

    try {
        //添加底部g(g列表之下)
        ad4 = eval('(' + adDatas.ad4 + ')');
        for (i = 0; i < ad4.length; i++) {
            var adobj = ad4[i];
            ad10.push(adobj);
        }
    } catch (e) {}

    try {
        //添加上嵌列表(上嵌列表)
        ad5 = eval('(' + adDatas.ad5 + ')');
        for (i = 0; i < ad5.length; i++) {
            var adobj = ad5[i];
            ad10.push(adobj);
        }
    } catch (e) {}

    try {
        //添加下嵌列表(下嵌列表)
        ad6 = eval('(' + adDatas.ad6 + ')');
        for (i = 0; i < ad6.length; i++) {
            var adobj = ad6[i];
            ad10.push(adobj);
        }
    } catch (e) {}
    try {
        ad1 = eval('(' + adDatas.ad1 + ')');

        for (i = 0; i < ad1.length; i++) {
            var adobj = ad1[i];
            if (adobj.adv_sitepic.split(",").length == 3) {
                ad9.push(adobj);
            } else {
                ad10.push(adobj);
            }
        }
    } catch (e) {}

    try {
        ad8 = eval('(' + adDatas.ad8 + ')');
        for (i = 0; i < ad8.length; i++) {
            var adobj = ad8[i];
            ad10.push(adobj);
        }
    } catch (e) {}
    uuid = obj.uuid;
    _yh_adurl = obj.adurl;
    onshow("media_init", ad_code);
}

function setInfo(info) {
    var obj = eval('(' + info + ')');
    var infomsgjson = obj.infomsg;
    var siteMap = obj.siteMap;
    var adDatas = eval('(' + infomsgjson + ')');
    try {
        //底部浮动g
        ad2 = eval('(' + adDatas.ad2 + ')');
    } catch (e) {}

    try {
        //添加头部g
        ad3 = eval('(' + adDatas.ad3 + ')');
    } catch (e) {}

    try {
        //添加底部g(g列表之下)
        ad4 = eval('(' + adDatas.ad4 + ')');
    } catch (e) {}

    try {
        //添加上嵌列表(上嵌列表)
        ad5 = eval('(' + adDatas.ad5 + ')');
    } catch (e) {}

    try {
        //添加下嵌列表(下嵌列表)
        ad6 = eval('(' + adDatas.ad6 + ')');
    } catch (e) {}
    try {
        ad1 = eval('(' + adDatas.ad1 + ')');

        for (i = 0; i < ad1.length; i++) {
            var adobj = ad1[i];
            if (adobj.adv_sitepic.split(",").length == 3) {
                ad9.push(adobj);
            } else {
                ad10.push(adobj);
            }
        }
        //打乱顺序
        // ad10.sort(randomsort);
    } catch (e) {}

    try {
        ad8 = eval('(' + adDatas.ad8 + ')');
    } catch (e) {}
    uuid = obj.uuid;
    _yh_adurl = obj.adurl;
    onshow("media_init", ad_code);
}

function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
}
$(window).scroll(function () {
    $.each($("[baiduid]"), function (i, item) {
        onCilentRect(item);
    });
});

function onCilentRect(obj) {
    var ro = obj.getBoundingClientRect();
    var objheight = obj.offsetHeight + 50; //添加浮动的高度
    var windowheight = $(window).height();
    if ((ro.top + objheight) < windowheight && ro.top > 0) {
        var site_id = obj.getAttribute("baiduid");
        var local_id = obj.getAttribute("local");
        onshow(site_id, local_id);
    }
}


function onshow(site_id, local_id) {
    var site_ok = true;
    var showkey = site_id + local_id;
    $.each(rect_site, function (i, item) {
        if (item == showkey) {
            site_ok = false;
        }
    });
    if (site_ok) {
        rect_site.push(showkey);
        var domainurl = infourl + "/log/so";
        $.ajax({
            async: true,
            url: domainurl,
            type: "GET",
            data: 'mediacode=' + _hy_media + "&site_id=" + site_id + "&local_id=" + local_id + "&code=" + ad_code,
            timeout: 5000,
            beforeSend: function () {},
            success: function (json) {

            }
        });
    }
}

function setpicurl(url) {
    var pic = url;
    if (url.indexOf("http") > -1) {
        pic = url;
    }
    return pic;
}

function ad_initImg(jsonAdObj) {
    var j = 0;
    var imgs;
    var k = 0;
    try {
        $("#articleBox img").wrap("<div></div>");
        $("#articleBox img").parent("div").addClass("myimg");
        //给图片埋点
        var imgL = $("#articleBox img").length;
        imgs = $("#articleBox img");
        var item_info;
        if (imgs != undefined) {
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].naturalHeight < 250) {
                    continue;
                }
                item_info = jsonAdObj[j];
                if (item_info == undefined) {
                    break;
                    j = 0;
                    item_info = jsonAdObj[j];
                }
                k++;
                j++;
                $(".myimg").eq(i).css({
                    "position": "relative",
                    "padding-bottom": "10px;"
                }); //图片的父元素$(".myimg")
                var imgw = (imgs.eq(i).width()) * 0.45 - 1;
                var imgws = (imgs.eq(i).width()) * 0.1 + 2;
                var obj = $("<a class='mina' href='javaScript:void();' typename='baidu' local='IMG" + j +
                    "'   baidunum='8' baiduid='" + item_info.adv_siteid + "'> <div class='imgtex' >" + item_info.adv_sitetitle +
                    "</div></a><a class='mina' href='javaScript:void();' onclick='openstSahre()' ></a>" +
                    "<div class='imgtexRs'>广告</div>");
                $(".myimg").eq(i).append(obj);
                $(".imgtex").css({
                    "width": "100%",
                    "padding": "0 1px",
                    "overflow": "hidden",
                    "height": "28px",
                    "line-height": "28px",
                    "color": "#eee",
                    "font-size": "16px",
                    "text-align": "left",
                    "background": "rgba(1,1,1,0.7)",
                    "position": "absolute",
                    "bottom": "8px",
                    "border-left": "1px solid #7c7c7c",
                    "border-top": "1px solid #7c7c7c",
                    "border-right": "1px solid #7c7c7c"
                });
                $(".imgtexRs").css({
                    "height": "1.3rem",
                    "line-height": "2.3",
                    "color": "#959393",
                    "font-size": "0.6rem",
                    "text-align": "center",
                    "position": "absolute",
                    "bottom": "8px",
                    "right": "0rem"
                });
            }
        }
    } catch (e) {

    }
}

function openurl(url) {
    $("body").append("<div id = \"mydiv\" style='display: none;'></div>");
    var iframe = document.createElement('iframe');
    var ifbody = document.body;
    iframe.src = url;
    iframe.name = 'myIframe';
    iframe.setAttribute("id", "myiframe");
    ifbody.setAttribute("id", "mybody");
    var mybox = document.getElementById('myiframe');
    var mytom = document.getElementById('mybody');
    var mydiv = document.getElementById('mydiv');
    mydiv.appendChild(iframe);
}

/**
 * 根據長度 類型顯示廣告
 * @param {Object} asize
 * @param {Object} atype
 */


var ytsize = 0,
    ytsizeall = 0;

var dfsize = 0,
    dfsizeall = 0;

var thsize = 0,
    thsizeall = 0;

var wzsize = 0,
    wzsizeall = 0;

var imgsize = 0,
    imgsizeall = 0;

function showadvlist(atype,sence) {
    /*通用列表*/
    if ('yt' == atype) {
        ad10.sort(randomsort);
        ytsizeall++;
        if (ad10 == undefined || ad10.length == 0) {

        } else if (ad10.length > ytsize) {
            var adobj = ad10[ytsize];
            ytsize = ytsize + 1;

            return ytAdvHtml(adobj,sence);
        } else {
            ytsize = 0;
            var adobj = ad10[ytsize];
            ytsize = ytsize + 1;
            return ytAdvHtml(adobj,sence);
        }

    }
    /*矩阵小说列表*/
    if ('jzxs' == atype) {
        ad10.sort(randomsort);
        ytsizeall++;
        if (ad10 == undefined || ad10.length == 0) {

        } else if (ad10.length > ytsize) {
            var adobj = ad10[ytsize];
            ytsize = ytsize + 1;

            return jzxsAdvY(adobj,sence);
        } else {
            ytsize = 0;
            var adobj = ad10[ytsize];
            ytsize = ytsize + 1;
            return jzxsAdvY(adobj,sence);
        }

    }
    /*小说阅读器*/
    if('read'==atype){
        if (ad10 == undefined || ad10.length == 0) {

        }  else {
            var html='';
            ad10.sort(randomsort);
            for(var i=0;i<ad10.length;i++) {
                var adobj = ad10[i];
                html += novelReadAdvHtmlH(adobj, sence);
            }
            //console.log(html);
            return html;

        }
    }
    /*小说详情页*/
    if('book'==atype){
        if (ad10 == undefined || ad10.length == 0) {

        }  else {
            var html='';
            ad10.sort(randomsort);
            for(var i=0;i<ad10.length;i++) {
                var adobj = ad10[i];
                html += bookDetial(adobj, sence);
            }
            //console.log(html);
            return html;

        }
    }

    if ('yt1' == atype) {
        var index = Math.floor((Math.random() * ad10.length));
        ytsizeall++;
        if (ad10 == undefined || ad10.length == 0) {} else {
            var adobj = ad10[index];
            return ytAdvHtml1(adobj);
        }
    }

    if ('zt' == atype) {
        dfsizeall++;
        if (ad10 == undefined || ad10.length == 0) {

        } else if (ad10.length > dfsize) {
            var adobj = ad10[dfsize];
            dfsize = dfsize + 1;
            return fdAdvHtml(adobj);
        } else {
            dfsize = 0;
            var adobj = ad10[dfsize];
            dfsize = dfsize + 1;
            return fdAdvHtml(adobj);
        }
    }

    //	if('th' == atype){
    //		thsizeall ++;
    //		if(ad9.length > thsize ){
    //			var adobj = ad9[thsize];
    //			thsize = thsize + 1 ;
    //			return thAdvHtml(adobj);
    //		}else{
    //			thsize = 0;
    //			var adobj = ad9[thsize];
    //			thsize = thsize + 1 ;
    //			return thAdvHtml(adobj);
    //		}
    //
    //	}
    var titLen = $("main_title").text().length;
    if (ad6 == undefined || ad6.length == 0) {
        $(".wzadv1,.wzadv2,.wzadv3,.wzadv4").hide();
    } else if ('wz' == atype) {
        wzsizeall++;
        if (ad6.length > wzsize) {
            var adobj = ad6[wzsize];
            wzsize = wzsize + 1;
            return wzAdvHtml(adobj);
        } else {
            wzsize = 0;
            var adobj = ad6[wzsize];
            wzsize = wzsize + 1;
            return wzAdvHtml(adobj);
        }

    }

    if ('img' == atype) {
        imgsizeall++;
        if (ad8 == undefined || ad8.length == 0) {} else if (ad8.length == 1) {
            if (ad8.length > imgsize) {
                var adobj = ad8[imgsize];
                imgsize++;
                return imgAdvHtml(adobj);
            } else {
                imgsize = 0;
                var adobj = ad8[imgsize];
                imgsize++;
                return imgAdvHtml(adobj);
            }
        } else {
            if (ad8.length > imgsize) {
                var adobj = ad8[imgsize];
                imgsize++;
                return imgAdvHtml(adobj);
            } else {
                imgsize = 0;
                var adobj = ad8[imgsize];
                imgsize++;
                return imgAdvHtml(adobj);
            }
        }


    }

}

/*jzxs广告右图*/
function jzxsAdvY(adObj,sence) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = sence;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var oneImg= '<div  baiduid="' + adObj.adv_siteid + '" local = "' + thsizeallsize +
                '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'' + thsizeallsize + '\')">' +
                '<div class="item_media item_media32 fr">'+
                    '<div class="im_img">' +
                         '<img src="'+ decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +'"/>' +
                    '</div>' +
                '</div>' +
                '<div class="item_inner item_inner67 fl">' +
                     '<div class="item_title">'+adObj.adv_sitetitle+'</div>' +
                     '<div class="item_subtitle clearfix">' +
                          '<div class="item_subtitle"><span>12万 +</span></div>' +
                     '</div>' +
                '</div>'+
                '</div>';
    return oneImg;

}

/*小说详情*/
function bookDetial(adObj,sence) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = sence;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var oneImg='<div class="swiper-slide">'+
        '<div class="flex-box clearfix" baiduid="' + adObj.adv_siteid + '" local = "' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'' + thsizeallsize + '\')">' +
        '<div class="right flex-1">' +
        '<h2 class="title">'+adObj.adv_sitetitle+'</h2>' +
        '<div class="come">阅读 <span  style="font-size: 10px; color: #616161;">12万 +</span></div>' +
        '</div>' +
        '<div class="img10" style="width: 30%">\n' +
        '<img src="'+ decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +'" style="height: 100%;width: 100%;">' +
        '</div>'+
        '</div>'+
        '</div>';
    return oneImg;

}

/*阅读器头部*/
function novelReadAdvHtmlH(adObj,sence) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = sence;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var oneImg='<div class="swiper-slide swiper-slide01 seep" data-swiper-slide-index="0" baiduid="' + adObj.adv_siteid + '" local = "' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'' + thsizeallsize + '\')">' +
        '<div class="flex-box clearfix">' +
        '<div class="right flex-1">' +
        '<h2 class="title">'+adObj.adv_sitetitle+'</h2>' +
        '<div class="come">阅读 <span  style="font-size: 10px; color: #616161;">12万 +</span></div>' +
        '</div>\n' +
        '<div class="img10" style="width: 30%">\n' +
        '<img src="'+ decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +'" style="height: 76px;width: 100%;">' +
        '</div>' +
        '</div>' +
        '</div>';
    return oneImg;

}


/*阅读器尾部*/
function novelReadAdvHtmlF(adObj,sence) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = sence;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var oneImg='<div class="swiper-slide swiper-slide01 seep" data-swiper-slide-index="0" baiduid="' + adObj.adv_siteid + '" local = "' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'' + thsizeallsize + '\')">' +
        '<div class="flex-box clearfix">' +
        '<div class="right flex-1">' +
        '<h2 class="title">'+adObj.adv_sitetitle+'</h2>' +
        '<div class="come">阅读 <span  style="font-size: 10px; color: #616161;">12万 +</span></div>' +
        '</div>\n' +
        '<div class="img10" style="width: 32%">\n' +
        '<img src="'+ decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +'" width="100%">' +
        '</div>' +
        '</div>' +
        '</div>';
    return oneImg;

}

//單圖樣式  右图

function ytAdvHtml(adObj,sence) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = sence;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }

    var oneImg= '<div class="right flex-1" baiduid="' + adObj.adv_siteid + '" local = "' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'' + thsizeallsize + '\')">' +
        '<h2 class="title">'+adObj.adv_sitetitle+'</h2>' +
        '<p class="come">推荐 <span>12万 +</span>' +
        '</p>' +
        '</div>' +
        '<div class="left img10">' +
        '<img src="'+ decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +'" height="76px" width="100%">' +
        '</div>';
    return oneImg;

}

//單圖樣式  右图

function ytAdvHtml1(adObj) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = ytsizeall;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var oneImg = '<div class="clearfix"  baiduid="' + adObj.adv_siteid + '" local = "L' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'L' + thsizeallsize + '\')">' +
        '<a class="onemore lista flex_box ui_paddingB_24 ui_paddingT_24 borderB_1" style="position:relative; padding-bottom:0.28rem;"   >' +
        '<div class="item_media" style=" position: relative;width: 32%; float: left;height:72px;">' +
        '<img style=" border: none;" src="' + decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +
        '" height="72" width="100%"></div>' +
        '<div class="item_inner" style="width: 66%;color: #555555;float: left;display: inline-block;float: right;">' +
        '<div class="item_title" style="font-size: 1.2rem;color: #000;line-height: .3rem;height: 42px;line-height: 150%;font-weight: bold;">' +
        adObj.adv_sitetitle + '</div>' +
        '<div class="item_subtitle" style="color: #A6A6A6;font-size: .8rem;margin: 1.1rem 0 0 0;"><span>推荐 </span><span>12万 +</span></div>' +
        '</div>' +
        '</a>' +
        '</div>';
    return oneImg;
}

//單圖樣式 左图

function fdAdvHtml(adObj) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }
    var thsizeallsize = dfsizeall;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }
    var ztImg = '<div class="hots_ul J-call-app myadv" baiduid="' + adObj.adv_siteid + '" local = "F' + thsizeallsize +
        '" onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'F' + thsizeallsize + '\')">' +
        '<a class="onemore lista flex_box ui_paddingB_24 borderB_1" style="position:relative;"   >' +
        '<div class="li_left" ><p class="lis_img bg_img borderA_1 lazy  ui_marginR_3"  style="background:url(' +
        decodeURIComponent(adObj.adv_sitepic.split(",")[0]) +
        ') center no-repeat; background-size:cover;"></p><div style="padding:2px; background:rgba(0,0,0,0.08); position:absolute; font-size:0.22rem; color:#fff; right:0.3rem;bottom:0.8rem;">广告</div></div>' +
        '<div class="li_right" style="padding: 0.1rem 0.2rem 0.1rem 0.3rem;">' +
        '<h2 class="textLen_2 advtitle" style="-webkit-line-clamp:1;height:0.4rem;">' + adObj.adv_sitetitle + '</h2>' +
        '<span class="sight" style="font-size:0.24rem;color:#888;position:relative;left:0;bottom:0.06rem">10万+阅读</span>' +

        //				'<p class="intros ui_marginT_15">' +
        ////				'<span class="ui_paddingR artype" style="color:#dc4b29">推荐</span>' +
        ////				'<span class="">100000+阅读</span>'
        //				//		                 	+ '<span class="infro">' + arData01[i].type_name + '</span>'
        //				+
        //				'</p>' +
        '</div>' +
        '<div class="particulars" style="color:#fff;background: rgba(220,75,41,1);font-size:0.24rem;padding:0.1rem;height: 0.3rem;line-height: 0.3rem;border-radius: 3px;margin-top: 0.2rem;margin-right: 0.3rem;">查看详情</div>' +
        //				'<img class="lis_img borderA_1" src="' + e[i].firstpic + '">' +
        '</a>'
        //							+ '<span class="right_type">'+arData01[i].type_name+'</span>'
        +
        //'<a class="ui_position_absolute acode"  href="javascript:void();"><img src="wx/img/Custom.png" /></a>' +
        '</div>';
    return ztImg;

}

//三圖樣式

function thAdvHtml(adObj) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }
    var thsizeallsize = ytsizeall;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }

    var threeImg = '<div class="hots_ul adverts J-call-app myadv"   baiduid="' + adObj.adv_siteid + '" local = "L' +
        thsizeallsize + '"   onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'L' + thsizeallsize + '\')" >' +
        '<a class=" ui_width borderB_1 ui_paddingT_24 ui_paddingB_2 textLen_1 ui_inblock ui_width_100" style="position:relative;"   >' +
        '<h2 class="mi_title textLen_1 ui_marginB_15 threemore advtitle">' + adObj.adv_sitetitle + '</h2>' +
        '<div class="flex_box moreimg" >' +
        '<div class="moreimg"></div>' +
        '<div class="ar_img ar_thr"><img class="ui-textalignC bg_img ar_img flex_1 borderA_1 lazy"  src="' +
        decodeURIComponent(adObj.adv_sitepic.split(",")[0]) + '" /></div>' +
        '<div class="ar_img ar_thr  center_img"><img class="ui-textalignC bg_img ar_img flex_1 borderA_1 lazy ui_marginR_1" src="' +
        decodeURIComponent(adObj.adv_sitepic.split(",")[1]) + '" /></div>' +
        '<div class="ar_img ar_thr"><img class="ui-textalignC bg_img ar_img flex_1 borderA_1 lazy" src="' +
        decodeURIComponent(adObj.adv_sitepic.split(",")[2]) + '" /></div>' +
        '</div>' +
        '<p class="intros introsthree ui_paddingT_2" style="position:relative;">' +
        '<span class="ui_paddingR artype"  style="color:#dc4b29">推荐</span>' +
        '<span class="">10万+阅读</span>' +
        '<div style="padding:2px; background:rgba(0,0,0,0.08); position:absolute; font-size:0.22rem; color:#fff; right:0;bottom:0.2rem;">广告</div>' +
        '</p>' +
        '</a>' +
        //'<a class="txt_fon2 txt_red ui_position_absolute acodes"  href="javascript:void();"><img src="wx/img/Custom.png" /></a>' +
        '</div>';
    return threeImg;


}


/**
 * 文字
 * @param {Object} adObj
 */
function wzAdvHtml(adObj) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }
    var wzhtml = '<div class="hots_ul J-call-app myadv"   baiduid="' + adObj.adv_siteid + '" local = "TL' + wzsizeall +
        '"   onclick="openad_hy(\'' + adObj.adv_siteid + '\',\'TL' + wzsizeall + '\')" >' +
        '<p class="intros introsthree" style="position:relative; overflow:hidden;  width:90%;"><div style="display:inline-block; width:0.1rem; height:0.1rem; background:#0982b7; border-radius:50px; position:absolute; left:0; top:0.28rem; "></div><span style="height:0.7rem; line-height:0.7rem;  color:#0982b7; font-size:0.3rem; padding-left: 0.3rem; overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;width:80%; -webkit-box-orient: vertical;" class="advtitle">' +
        adObj.adv_sitetitle + '</span></p>' +
        '<div style="padding:1px; background:rgba(0,0,0,0.06); position:absolute; font-size:0.2rem; color:#fff; right:0;bottom:0; line-height: 1;">广告</div>' +
        '</p>' +
        '</a>' +
        '</div>';
    return wzhtml;
}


/**
 * 图片
 * @param {Object} adObj
 */
function imgAdvHtml(adObj) {
    //去掉自营广告黑色三角字符
    var advtitleText = adObj.adv_sitetitle;
    if (advtitleText.indexOf("▶") != -1) {
        adObj.adv_sitetitle = advtitleText.split("▶").join("");
    }

    var thsizeallsize = wzsizeall + 1;
    if (thsizeallsize > 30) {
        thsizeallsize = 31;
    }


    var imghtml = '<div style="height:1.2rem; position:absolute; bottom:0.2rem; width:100%; z-index:3;" baiduid="' +
        adObj.adv_siteid + '" local = "img' + thsizeallsize + '"   onclick="openad_hy(\'' + adObj.adv_siteid +
        '\',\'img' + thsizeallsize + '\')">' +
        '<div class="hots_ul J-call-app myadv"  style="position:absolute; bottom:0;  width:100%;"   >' +
        '<div style="display:inline-block; z-index: 20; width:0.1rem; height:0.1rem; background:#fff; border-radius:50px; position:absolute; left:0.2rem; top:0.23rem; "></div>' +
        '<p class="intros introsthree advtitle" style="position:relative; color:#ffffff;font-size:0.28rem; height:0.6rem; line-height:0.6rem; border-top:1px solid #7c7c7c; padding:0 0.2rem 0 0.5rem; background: rgba(0,0,0,0.7);">' +
        adObj.adv_sitetitle + '</p>' +
        '<div style="padding:1px; background:rgba(195,195,195,0.3); position:absolute; font-size:0.2rem; color:#aaa; right:0;bottom:0; height:0.3rem; line-height:0.3rem;">广告</div>' +
        '</p>' +
        '</div>' +
        '</div>'

    return imghtml;
}


function openad_hy(adv_siteid, local) {
    var ourl = _yh_adurl + "?dd=" + adv_siteid + ":" + _hy_media + "&c=" + local + "&uuid=" + encodeURIComponent(uuid);
    onlogck(adv_siteid, local);
    openurl(ourl);
}