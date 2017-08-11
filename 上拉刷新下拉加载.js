// .item {
//     background - color: #ccc;
// }
// .item# thelist {
//     background - color: #fff;
//     /*transform: translate(0px, 84px) translateZ(0px);*/
//     需要下拉的盒子上设置改属性 和下边那个属性
// }
// .item# thelist.active {
//     transition: all .6 s;
// }


//下边只是例子 没有一点复用性 完全是没有东西能提交了
var scrollT; //这是被卷去的高度

var bodyHeig; //盒子的高度
var tipy, saty, movey;
$(document.body).on('touchstart', function(e) {
    var touch_star = e.originalEvent.targetTouches[0];
    saty = touch_star.pageY;
    $('#thelist').removeClass('active');
    bodyHeig = document.querySelector('.body').offsetHeight;
    var clientheight = document.body.clientHeight;
    switchover = true;
})
$(document.body).on('touchmove', function(e) {
    var touch_move = e.originalEvent.changedTouches[0];
    movey = touch_move.pageY;
    tipy = movey - saty;
    scrollT = document.body.scrollTop;
    if (scrollT == 0) {
        $('#thelist').css('transform', 'translate(0px, ' + tipy + 'px) translateZ(0px)')
        console.log(tipy)
        if (tipy > '90') {
            console.log(1)
        }
    } else if (scrollT + 600 > bodyHeig) {
        console.log(tipy)
        $('#thelist').css('transform', 'translate(0px, ' + tipy + 'px) translateZ(0px)')
        console.log(tipy)
        if (tipy < '-100' && switchover) {
            switchover = false;
            $.ajax({
                type: "GET",
                url: './libs/deta.js',
                dataType: "script",
                success: function(data) {
                    eval(data);
                    console.log(dat)
                        // console.log(dataAll+":dataAll")
                    for (var i = 0; i < dat.result.length; i++) {
                        dataAll.result.push(dat.result[i])
                    }
                    var html = tppl($('#test').html(), dataAll);
                    $('#thelist').html(html);
                }
            });
        }
    }
})
$(document.body).on('touchend', function(e) {
    var touch_end = e.originalEvent.changedTouches[0];
    console.log(touch_end.pageX)
    $('#thelist').addClass('active');
    $('#thelist').css({
        'transform': 'translate(0px, 0px) translateZ(0px)'
    })
    if (tipy < 200) {
        /*加载数据*/
    }
})