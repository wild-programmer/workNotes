function scoreFun(object, opts) {
    var defaults = {
        fen_d: 8,
        ScoreGrade: 20, //可以显示多少个a标签
        types: ["0.25分", "0.5分非常不满", "1分", "部分有破损，与卖家描述的不符，不满意", "一般", "质量一般", "没有卖家描述的那么好", "满意", "质量不错，与卖家描述的基本一致，还是挺满意的", "非常满意", "质量非常好，与卖家描述的完全一致，非常满意"],
        nameScore: "fenshu",
        parent: "star_score",
        attitude: "attitude"
    };
    options = $.extend({}, defaults, opts);
    var countScore = object.find("." + options.nameScore);
    var startParent = object.find("." + options.parent);
    var atti = object.find("." + options.attitude);
    var now_cli;
    var fen_cli;
    var atu;
    var fen_d = options.fen_d;
    var len = options.ScoreGrade;
    startParent.width(fen_d * len);
    var preA = (5 / len); //满分评价是多少
    for (var i = 0; i < len; i++) {
        var newSpan = $("<a href='javascript:void(0)'></a>");
        newSpan.css({ "left": 0, "width": fen_d * (i + 1), "z-index": len - i });
        newSpan.appendTo(startParent)
    }

    startParent.find("a").each(function(index, element) {
        $(this).click(function() {
            now_cli = index;
            show(index, $(this))
        });
        $(this).mouseenter(function() {
            show(index, $(this))
        });
        $(this).mouseleave(function() {
            if (now_cli >= 0) {
                var scor = preA * (parseInt(now_cli) + 1);
                startParent.find("a").removeClass("clibg");
                startParent.find("a").eq(now_cli).addClass("clibg");
                // var ww = fen_d * (parseInt(now_cli) + 1);
                var ww = 6;
                startParent.find("a").eq(now_cli).css({ "width": ww, "left": "0" });
                if (countScore) { countScore.text(scor) }
            } else {
                startParent.find("a").removeClass("clibg");
                if (countScore) { countScore.text("") }
            }
        })
    });

    function show(num, obj) {
        var n = parseInt(num) + 1;
        var lefta = num * fen_d;
        var ww = fen_d * n;
        var scor = preA * n;
        atu = options.types[parseInt(num)];
        console.log(atu);
        // atu = Math.round(options.types[parseInt(num)] * 10);
        object.find("a").removeClass("clibg");
        obj.addClass("clibg");
        obj.css({ "width": ww, "left": "0" });
        countScore.text(scor);
        atti.text(atu)
    }

};