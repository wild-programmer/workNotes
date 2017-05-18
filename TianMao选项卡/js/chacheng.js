function samesign(a, b) {
    return (a ^ b) >= 0
}

function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    }
}

// 向量叉乘公式
function vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y
}

// 用叉乘判断点是否在三角形内  p:鼠标当前位置 a:鼠标上一个位置  b c:为二级菜单的上下边缘
function isPointInTrangle(p, a, b, c) {
    var pa = vector(p, a)
    var pb = vector(p, b)
    var pc = vector(p, c)

    var t1 = vectorProduct(pa, pb)
    var t2 = vectorProduct(pb, pc)
    var t3 = vectorProduct(pc, pa)

    return samesign(t1, t2) && samesign(t2, t3)
}
// 判断是否需要延迟
function needDelay(elem, leftCorner, currMousepos) {
    var offset = elem.offset(); //获取上边边缘的坐标
    var topLeft = {
        x: offset.left,
        y: offset.top,
    }
    var bottomLeft = {
        x: offset.left,
        y: offset.top + elem.height()
    }

    return isPointInTrangle(currMousepos, leftCorner, topLeft, bottomLeft)
}