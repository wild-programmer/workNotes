console.log($('body'))

//遮罩
$(function() {
    $('.DBbox').css('height', document.documentElement.clientHeight);
    $('.footbuyDB').css('height', document.documentElement.clientHeight);
    $('.logowall_img1').on('touchstart', function() {
        $('.DBbox').css('display', 'block');
        $('.DBewm').animate({
            right: 0
        }, 500);
        $('body').css('overflow', 'hidden');
    })
    $('.logowall_img2').on('touchstart', function() {
        $('.DBbox').css('display', 'block');
        $('.DBxq').animate({
            right: 0
        }, 500);
        $('body').css('overflow', 'hidden');
    })
    $('.DBbox').on('touchstart', function() {
        $('.DBewm').animate({
            right: '-25rem'
        }, 500, function() {
            $('.DBbox').css('display', 'none')
        });
        $('.DBxq').animate({
            right: '-25rem'
        }, 500, function() {
            $('.DBbox').css('display', 'none')
        });
        setTimeout(function() {
            $('body').css('overflow', 'visible');
        }, 8000)
    })
})

//顶部轮播
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,
})

// 广告图开始
var $lis = $('.banner3D li');
var $lislen = $lis.length;
for (var i = 0; i < $lislen; i++) {
    $('.banner_cur').append('<span></span>');
}
var $spans = $('.banner_cur span');
$spans.eq(2).addClass('curactive');
(function($) {
    //旋转标签对象 
    var $ele = $('.banner3D li'); //默认设置项 
    var settings = {
        delay: 5000, //动画间隔 
        speed: 1000, //动画时长
        touchtime: 250, //手动切换时长 
    };
    //找好每个图片对应的位置状态
    var states = [{
        "zIndex": "1",
        "width": "10rem",
        "top": ".8rem",
        "left": "7.5rem",
        "opacity": "0.3"
    }, {
        "zIndex": "3",
        "width": "11rem",
        "top": ".4rem",
        "left": "10rem",
        "opacity": "0.7"
    }, {
        "zIndex": "4",
        "width": "12rem",
        "top": "0",
        "left": "12.5rem",
        "opacity": "1"
    }, {
        "zIndex": "3",
        "width": "11rem",
        "top": ".4rem",
        "left": "15rem",
        "opacity": "0.7"
    }, {
        "zIndex": "1",
        "width": "10rem",
        "top": ".8rem",
        "left": "17.5rem",
        "opacity": "0.3"
    }];
    var lis = $ele;
    var interval, val;
    var $eltext = $('.banner_baoj');
    var $toptext = $('.bannercent');
    var lispage = 2;
    var course = document.querySelector('.content_banner');
    var screenWidth = document.documentElement.clientWidth;
    var startX = 0,
        startTime,
        dx = 0,
        tag = true;
    var interval;
    //让轮播图达到status指定的状态


    function move() {
        lis.each(function(i, ele) {
            if (i > 4) {
                i = 4;
                $(ele).animate(states[i], 100)
            } else {
                $(ele).animate(states[i], 100)
            }

        });
    }
    //让轮播图从中间展开
    move();
    $eltext.text(lis.eq(lispage).attr('data-money'));
    $toptext.text(lis.eq(lispage).attr('data-text'));

    function moveall(time) {
        $('.banner3D li').each(function(i, ele) {
            $spans.eq(i).removeClass('curactive');
            if (i >= 0 && i <=
                5) {
                // i = i - 1;
                $(ele).animate(states[i], {
                    easing: 'easeInCubic',
                    duration: time,
                })
            } else if (i > 4) {
                $(ele).animate(states[4], {
                    easing: 'easeInCubic',
                    duration: time,
                })
            }
        });
        tag = true;
    }
    //让轮播图滚动到下一张 
    function next(time) {

        var $del = $('.banner3D li').eq(0);
        $('.banner3D li').eq(0).remove();
        $del.appendTo($('.banner3D'));
        moveall(time);
        setTimeout(function() {
            if (lispage <
                $lislen - 1) {
                lispage++;
            } else {
                lispage = 0;
            }
            $eltext.text(lis.eq(lispage).attr('data-money'));
            $toptext.text(lis.eq(lispage).attr('data-text'));
            $spans.eq(lispage).addClass('curactive');
        }, time / 2)
    };

    function prev(time) {
        var k = $('.banner3D li').length - 1;
        var $eldel = $('.banner3D li').eq(k);
        $('.banner3D li').eq(k).remove();
        $eldel.prependTo($('.banner3D'));
        moveall(time);
        setTimeout(function() {
            if (lispage <= 0) {
                lispage = 6;
            } else {
                lispage--;
            }
            $eltext.text(lis.eq(lispage).attr('data-money'));
            $toptext.text(lis.eq(lispage).attr('data-text')); //小方块 
            $spans.eq(lispage).addClass('curactive');
        }, time / 2)

    } //自动播放 
    function play(time) {
        interval = setInterval(function() {
            next(time);
        }, settings.delay);
    }
    play(settings.speed);

    course.addEventListener('touchstart', touchstartHandler);
    course.addEventListener('touchmove', touchmoveHandler);
    course.addEventListener('touchend', touchendHandler);


    function touchstartHandler(e) {
        $('.banner3D li').each(function(i,
            ele) {
            $(ele).stop();
        });
        startX = e.touches[0].pageX;
        startTime = new Date();
        clearInterval(interval);
    };

    function touchmoveHandler(e) { // 获取滑动的距离 
        dx = e.touches[0].pageX - startX;
    };

    function touchendHandler(e) {
        if (tag) {
            tag = false
            var t = new Date() - startTime; // 在结束的时候重新获取滑动的距离
            var dx = e.changedTouches[0].pageX - startX;
            if (dx < -(screenWidth / 3) || (t < 500 && dx < -30)) {
                next(settings.touchtime);
                play(settings.speed);
            } else if (dx > screenWidth / 3 || (t <
                    500 && dx > 30)) {
                prev(settings.touchtime);
                play(settings.speed);
            } else {
                // 添加过渡 
                play(settings.speed);
                tag = true;
            }
        } else {
            return;
        }
    };
})($)

$(function() {
    $('.butenbox button').on('touchend', function() {
        $('.footbuy').css('display', 'block');
        if ($(this).hasClass('white')) {
            $('#buycur').css('display', 'block');
        } else {
            $('#limai').css('display', 'block');
        }
    })
    $('.delet').on('touchend', function() {
        $('.footbuy').css('display', 'none');
        $('.footbuyDB').css('display', 'none');
    })
    $('.footbuy_cont >li >span').on('touchend', function() {
        $(this).siblings('span').removeClass('buyactive');
        $(this).addClass('buyactive');
    })

    /* 增添货物 */
    $('.limai_buyppp').click(function() {
        var $val = $('.limai_buynumb').text();
        $val++;
        if ($val > 99) {
            $val = 99;
        }
        $('.limai_buynumb').text($val)
    })
    $('.limai_buyadd').click(function() {
        var $val = $('.limai_buynumb').text();
        $val--;
        if ($val < 1) {
            $val = 1
        }
        $('.limai_buynumb').text($val)
    })
    $('.buycur_buyppp').click(function() {
        var $val = $('.buycur_buynumb').text();
        $val++;
        if ($val > 99) {
            $val = 99;
        }
        $('.buycur_buynumb').text($val)
    })
    $('.buycur_buyadd').click(function() {
        var $val = $('.buycur_buynumb').text();
        $val--;
        if ($val < 1) {
            $val = 1
        }
        $('.buycur_buynumb').text($val)
    })

    //详情切换
    $('.navbar li').click(function() {
        $(this).addClass('navactive').siblings('li').removeClass('navactive');
        $('.remove_dispaly').addClass('display')
        $('.' + $(this).attr('data-class')).removeClass('display');
    })
})