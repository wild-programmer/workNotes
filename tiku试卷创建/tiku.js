$(function() {
    // 返回顶部
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#topTZ').css('display', 'block')
        } else {
            $('#topTZ').css('display', 'none')
        }
    });

    // 增
    $('.selectlist').on('click', '.span1', function() {
        // $(this).parent().parent().clone(true).appendTo(".selectlistalt");
        $('<li class="clearfix">' +
            '<input type="text" placeholder="选项">' +
            '<div class="image showDBG"></div>' +
            '<div class="checbox ">' +
            '<div class="chechide clearfix">' +
            '<input type="checkbox" name="yxbit">' +
            '<span>必填</span>' +
            '</div>' +
            '<input type="checkbox" name="yunxu">' +
            '</div>' +
            '<input class="moren" name="moren" type="checkbox">' +
            '<p>' +
            '<span class="span1"></span>' +
            '<span class="span2"></span>' +
            '<span class="span3"></span>' +
            '<span class="span4"></span>' +
            '</p>' +
            '</li>').appendTo($(this).parents('ul'));
        $('<p class="clearfix"><span class="xz_image"></span><span class="xuanztext">选项</span> <input type="text" class="display"><span class="xuanze_wx display">*</span></p>').appendTo($(this).parents('.text').siblings('.xuanze_item'));
    })

    // 删
    $('.selectlist').on('click', '.span2', function() {
        var $len = $(this).parents('ul').children().length;
        var $index = $(this).parents('ul').children().index($(this).parents('li'));
        if ($len != 1) {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).remove();
            $(this).parent().parent().remove();
        }
        return;
    })

    // 向下
    $('.selectlist').on('click', '.span3', function() {
        var $index = $(this).parents('ul').children().index($(this).parents('li'));
        var $el = $(this).parents('.text').siblings('.xuanze_item').children().eq($index);
        $el.next('p').after($el);
        $(this).parent().parent().next('li').after($(this).parent().parent());
    })

    // 向上
    $('.selectlist').on('click', '.span4', function() {
        var $index = $(this).parents('ul').children().index($(this).parents('li'));
        var $el = $(this).parents('.text').siblings('.xuanze_item').children().eq($index);
        $el.prev('p').before($el);
        $(this).parent().parent().prev('li').before($(this).parent().parent());
    })

    // 允许填空
    $('.selectlist').on('click', '.checbox > input', function() {
        if ($(this).is(':checked')) {
            $(this).siblings('.chechide').css('display', 'block')
        } else {
            var $index = $(this).parents('ul').children('li').index($(this).parents('li'))
            $(this).siblings('.chechide').css('display', 'none').children('input[name="yxbit"]')[0].checked = false;
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('.xuanze_wx').addClass('display');
        }
    })

    // 数组翻跟头
    $('.selectT .firstli').on('click', function() {
        var $lis = $(this).parents('.selectT').siblings('.selectlist').find('li');
        var $lis2 = $(this).parents('.text').siblings('.xuanze_item').find('p');
        var $len = $lis.length;
        var $len2 = $lis2.length;
        var arr = new Array;
        var arr2 = new Array;
        for (var i = 0; i < $len; i++) {
            arr.push($lis[i])
        }
        for (var k = 0; k < $len2; k++) {
            arr2.push($lis2[k])
        }
        arr.reverse();
        arr2.reverse();
        $(this).parents('.selectT').siblings('.selectlist').find('li').detach().end().children().append(arr);
        $(this).parents('.text').siblings('.xuanze_item').find('p').detach();
        $(this).parents('.text').siblings('.xuanze_item').append(arr2);
    })

    // 文字复制
    $('.copyafens').on('click', function() {

    })

    //数据双向绑定标题头输入

    $('.databind').on('input propertychange', function() {
        var $index = $(this).parents('ul').children('li').index($(this).parents('li'))
        var content = $(this).parents('.text').siblings('.timuname').find('.updatatext');
        if ($(this).parents('.text').siblings('.timuname').hasClass('duoxiangTk')) {
            // 进来为多选
            if ($(this).val() == '') {
                content.text('请输入标题或名字');
            } else {
                content.html(this.value.toString().replace(/(\r)*\n/g, "<br/>").replace(/\s/g, " "))
            }
        } else {
            // 进来为单选
            if ($(this).val() == '') {
                content.text('请输入标题或名字');
            } else {
                content.html($(this).val())
            }
        }
    })



    // 点击button
    $('button').on('click', function() {
        var that = $(this).parents('.text').siblings('.setting').find('.span1');
        that.parents('.setting').siblings('.text').addClass('display');
        that.parents('ul').addClass('hover');
        that.addClass('span1succed').text('编辑');
        that.parents('.contcommon').addClass('conthidden');
    })

    // setting设置点击完成
    $('.setting .span1').on('click', function() {
        if ($(this).hasClass('span1succed')) {
            $(this).removeClass('span1succed').text('成功');
            $(this).parents('.setting').siblings('.text').removeClass('display');
            $(this).parents('ul').removeClass('hover');
            $(this).parents('.contcommon').removeClass('conthidden');

        } else {
            $(this).parents('.setting').siblings('.text').addClass('display');
            $(this).parents('ul').addClass('hover');
            $(this).addClass('span1succed').text('编辑');
            $(this).parents('.contcommon').addClass('conthidden');
        }
    })
    $('.setting .span3').on('click', function() {
            $(this).parents('.contcommon').remove();
        })
        //上移
    $('.setting .span4').on('click', function() {
            $(this).parents('.contcommon').prev('.contcommon').before($(this).parents('.contcommon'));
        })
        //下移
    $('.setting .span5').on('click', function() {
            $(this).parents('.contcommon').next('.contcommon').after($(this).parents('.contcommon'));
        })
        //最前
    $('.setting .span6').on('click', function() {
            $(this).parents('.contcommon').prependTo($('.cont'))
        })
        //最后
    $('.setting .span7').on('click', function() {
        $(this).parents('.contcommon').appendTo($('.cont'))
    })

    // 必答题设置
    $('input[name="BiDa"]').on('click', function() {
        if ($(this).is(':checked')) {
            $(this).parents('.text').siblings('.timuname').find('.datatext').css('display', 'block')
        } else {
            $(this).parents('.text').siblings('.timuname').find('.datatext').css('display', 'none')
        }
    })


    // 选择题单选或多选默认设置 xxactive
    $('.selectlist').on('click', 'input[name="moren"]', function() {
        var $index = $(this).parents('ul').children('li').index($(this).parents('li'))

        if ($(this).parents('.text').siblings('.timuname').children('.duoxuantext').hasClass('duoxuanshow')) {
            // 进来为多选
            if ($(this).is(':checked')) {
                $(this).parents('.text').siblings('.xuanze_item').children().eq($index).addClass('xxactive');
            } else {
                $(this).parents('.text').siblings('.xuanze_item').children().eq($index).removeClass('xxactive');
            }
        } else {
            // 进来为单选
            $(this).parents('ul').find('input[name="moren"]').attr('checked', false);
            this.checked = true
            $(this).parents('.text').siblings('.xuanze_item').children().removeClass('xxactive').eq($index).addClass('xxactive');
        }
    })

    // 选择题允许填空
    $('.selectlist').on('click', 'input[name="yunxu"]', function() {
        var $index = $(this).parents('ul').children('li').index($(this).parents('li'));
        if ($(this).is(':checked')) {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('input[type="text"]').removeClass('display');
        } else {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('input[type="text"]').addClass('display');
        }
    })

    // 选择题允许填空必填
    $('.selectlist').on('click', 'input[name="yxbit"]', function() {
        var $index = $(this).parents('ul').children('li').index($(this).parents('li'));
        if ($(this).is(':checked')) {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('.xuanze_wx').removeClass('display');
        } else {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('.xuanze_wx').addClass('display');
        }
    })

    // 修改选项关联
    $('.selectlist').on('input propertychange', 'input[type="text"]', function() {
        var $index = $(this).parents('ul').children('li').index($(this).parents('li'));
        if ($(this).val() == '') {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('.xuanztext').text('选项')
        } else {
            $(this).parents('.text').siblings('.xuanze_item').children().eq($index).children('.xuanztext').text($(this).val())
        }

    });

    // 合计分数
    $('#heji').click(function() {
        var fen = 0;
        $('.fenshutext').each(function(i, el) {
            fen += Number($(el).val())
        })
        fen = fen - 2.5;
        $('#hejifen').text(fen);
    })


    $('.topnav span').on('click', function() {
        var data_class = $(this).attr('data-id');
        $('.cont').append($('.template' + ' .' + data_class).clone(true));
    })
})

$(function() {
    //图片上传
    var input = document.querySelector('input[type=file]'); //input 标签 
    var result = document.querySelector('.image');
    var $img_tag, that;
    $('.showDBG').on('click', function() {
        $('.imgDBG').css('display', 'block');
        $img_tag = $(this).parents('ul').children('li').index($(this).parents('li'));
        that = this;
    })
    $('.delicon').on('click', function() {
        $('.imgDBG').css('display', 'none');
        result.innerHTML = '';
    })

    if (typeof FileReader === 'undefined') {
        result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', readFile, false);
    }

    $('.tsp').on('click', function() {
        var $img = $('.image').html();
        $(that).parents('.text').siblings('.xuanze_item').children().eq($img_tag).children('.xz_image').html($img);
        $('.imgDBG').css('display', 'none');
        result.innerHTML = '';
    })

    function readFile() {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(e) {
            result.innerHTML = '<img src="' + this.result + '" alt=""/>';
        }
    }
})