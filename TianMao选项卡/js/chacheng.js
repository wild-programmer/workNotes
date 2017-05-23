var chacheng = {
    samesign: function(a, b) {
        // 异或运算  两者相同为真 不同为假
        return (a ^ b) >= 0
    },
    // 调出鼠标位置
    vector: function(a, b) {
        return {
            x: b.x - a.x,
            y: b.y - a.y
        }
    },
    // 向量叉乘公式
    vectorProduct: function(v1, v2) {
        return v1.x * v2.y - v2.x * v1.y
    },
    // 用叉乘判断点是否在三角形内  p:鼠标当前位置 a:鼠标上一个位置  b c:为二级菜单的上下边缘
    isPointInTrangle: function(p, a, b, c) {
        var pa = this.vector(p, a)
        var pb = this.vector(p, b)
        var pc = this.vector(p, c)

        var t1 = this.vectorProduct(pa, pb)
        var t2 = this.vectorProduct(pb, pc)
        var t3 = this.vectorProduct(pc, pa)
            // 遇见false短路  都为真返回最后一个
        return this.samesign(t1, t2) && this.samesign(t2, t3)
    },
    // 判断是否需要延迟
    needDelay: function(elem, leftCorner, currMousepos) {
        var offset = elem.offset(); //获取上边边缘的坐标
        var topLeft = {
            x: offset.left,
            y: offset.top,
        }
        var bottomLeft = {
            x: offset.left,
            y: offset.top + elem.height(),
        }
        return this.isPointInTrangle(currMousepos, leftCorner, topLeft, bottomLeft)
    }
}