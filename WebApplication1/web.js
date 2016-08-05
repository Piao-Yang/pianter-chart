var width = document.getElementById("mycanvas").getAttribute("width");
console.log(width);
var height = document.getElementById("mycanvas").getAttribute("height");
console.log(height);
var woffset = window.innerWidth;
console.log(woffset);
var per = width / 1200;
document.getElementById("mycanvas").width = woffset * per;
document.getElementById("mycanvas").height = woffset * per;
var c = new Canvas("mycanvas", "gray");
var width = document.getElementById("mycanvas").getAttribute("width");
console.log(width);
var height = document.getElementById("mycanvas").getAttribute("height");
console.log(height);
var a = new piechart([100, 200, 200, 300, 400, 100, 200], ["一周时间", "销量/件", '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'], width * (2 / 5), width / 2, height / 2, c);
var c = new Canvas("Canvas1", "gray");
var a = new barchart([100, 200, 200, 300, 350, 100, 237], ["一周时间", "销量/件", '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'], 30, 420, 350, 370, c);
a.series(); a.yAxis(); a.xAxis(); a.text();
var c = new Canvas("Canvas2", "gray");
var a = new linechart([100, 200, 200, 300, 350, 100, 237], ["一周时间", "销量/件", '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'], 30, 420, 350, 370, c);
a.series(); a.yAxis(); a.xAxis(); a.text();
window.onresize=function(){
var currentUrl = window.location.pathname;
    window.location.href = currentUrl;
}