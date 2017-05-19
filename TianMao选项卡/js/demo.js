$(function() {
    // 里面就牵扯到的有 active定义的隐藏 还有三个类名boxright sub box
    var $boxright = $('#boxright');
    var $sub = $('.sub');
    var activeRow,
        time,
        mouseInsub = false,
        activeManu;
    $sub.on('mouseenter', function(e) {
            mouseInsub = true;
        }).on('mouseleave', function() {
            mouseInsub = false;
        })
        // 跟踪鼠标的数组
    var moseTrack = [];
    var movehandler = function(e) {
        moseTrack.push({
            x: e.pageX,
            y: e.pageY
        })

        // 只保存前一个和后一个的位置
        if (moseTrack.length > 3) {
            moseTrack.shift();
        }
    }

    // 记录了大盒子的上边的鼠标位置
    $('.box').on('mouseenter', function(e) {
        // 为了布局严谨，让二级菜单的大盒子隐藏
        $boxright.removeClass('no');
        // 绑定事件监听
        $(document).bind('mousemove', movehandler)
    }).on('mouseleave', function(e) {
        // 让大盒子显示
        $boxright.addClass('no');
        // 有activeRow activeManu就代表Li标签和二级菜单变成了显示状态 离开最大的盒子就还原清除样式
        if (activeRow) {
            activeRow.removeClass('active');
            activeRow = null;
            activeManu.addClass('no');
            activeManu = null;
        }
        // 时间监听解绑，避免影响其他函数 把时间就监听独立出来
        $(document).unbind('mousemove', movehandler)
    }).on('mouseenter', 'li', function(e) {
        if (!activeRow) {
            activeRow = $(e.target).addClass('active');
            activeManu = $('#' + activeRow.data('id')).removeClass('no');
            return
        }
        // debounce去抖技术 事件频发，只执行一次 延时器执行完time要设置为null
        if (time) {
            clearTimeout(time)
        }
        // 拿到鼠标当前坐标
        var currMousePos = moseTrack[moseTrack.length - 1]; //鼠标当前坐标
        var leftCorner = moseTrack[moseTrack.length - 2]; //上一次(a)点坐标
        var delay = chacheng.needDelay($boxright, leftCorner, currMousePos); //   ***此处使用时重点  第一个参数是二级菜单的大盒子，用户叉乘判断***
        // 如果在三角形内需要延迟
        if (delay) {
            // 计时器用于从Li标签移动到二级菜单经过其他Li标签,这些li标签也不会改变样式
            time = setTimeout(function() {
                if (mouseInsub) {
                    return;
                }
                activeRow.removeClass('active');
                activeManu.addClass('no');

                activeRow = $(e.target).addClass('active');
                activeManu = $('#' + activeRow.data('id')).removeClass('no');
                time = null;
            }, 300)
        } else {
            var prevActiveRow = activeRow;
            var prevActiveMenu = activeManu;
            // 把当前激活的行展示

            activeRow = $(e.target);
            activeManu = $('#' + activeRow.data('id'));

            prevActiveRow.removeClass('active');
            prevActiveMenu.addClass('no');

            activeRow.addClass('active');
            activeManu.removeClass('no')
        }


    })
})