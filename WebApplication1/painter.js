
/*--canvas--*/
function Canvas(id,width,height)
{
    this.id = id;
    console.log(this.id);
};
/*--style--*/
function Style(pentype, color, linewidth) {
    this.pen = pentype;
    this.color = color;
    this.linewidth = linewidth;
};


function coordinate  (x, y) {
    this.x = x;
    this.y = y;
};


function Shape  ()
{ this.coordinates = [] };

Shape.prototype = {
    say: function () {
        return this.coordinates;
    }
};



function Point (x, y) {
    this.p0 = new coordinate(x, y)
    this.coordinates = [this.p0];
}

 function Line  (x1, y1, x2, y2) {
    this.p0 = new coordinate(x1, y1);
    this.p1 = new coordinate(x2, y2);
    console.log(this.p0,this.p1);
    this.coordinates = [this.p0, this.p1];
}

 function Polygon (coordinatevalue) {
     var i, j = 0;
     var a = [];
    for (i = 0; i < coordinatevalue.length; i += 2) {
        a[j++] = new coordinate(coordinatevalue[i], coordinatevalue[i + 1]);
    }
    this.p = a;
    console.log(this.p);
    this.coordinates =this. p;
}

 function Arc  (x0, y0, radius, anglebegin, angleend) {
    this. p0 = new coordinate(x0, y0);
    this. p1 = new coordinate(radius, 0);
    this. p2 = new coordinate(anglebegin, angleend);
    this.coordinates = [this.p0,this. p1, this.p2];
 };

(function () {
    var f = new Shape();
   Point.prototype = f;
   Line.prototype = f;
   Polygon.prototype = f;
   Arc.prototype = f;
})();



function Painter(canvas, style) {
    this.drawline = function (shape) {
        var a = shape.say();
        console.log(a);
        var canvass= document.getElementById(canvas.id);
        var ctx = canvass.getContext("2d");
        var i;
        if (style.pen == "pen") {
            ctx.strokeStyle = style.color;
            ctx.linewidth = style.linewidth;
        }
        else {
            ctx.fillStyle = style.color;
            ctx.linewidth = null;
        }
       
        ctx.beginPath();
        ctx.moveTo(a[0].x,a[0].y);
        for (i = 0; i < a.length; i++) {
            ctx.lineTo(a[i].x, a[i].y);
        }
        if (style.pen=="pen") {
            ctx.stroke();
        }
       else {
            ctx.fill();
        }
    },
    this.drawpoint = function (shape) {
        var a = shape.say();
        console.log(a);
        var canvass = document.getElementById(canvas.id);
        var ctx = canvass.getContext("2d");
        if (style.pen == "pen") {
            ctx.strokeStyle = style.color;
            ctx.linewidth = style.linewidth;
        }
        else {
            ctx.fillStyle = style.color;
            ctx.linewidth = null;
        }
        ctx.beginPath();
        ctx.arc(a[0].x, a[0].y, 2, 0, Math.PI * 2, true);
        if (style.pen == "pen") {
            ctx.stroke();
        }
        else {
            ctx.fill();
        }
    },
    this.drawpolygon = function (shape) {
        var a = shape.say();
        console.log(a);
        var canvass = document.getElementById(canvas.id);
        var ctx = canvass.getContext("2d");
        var i;
        if (style.pen == "pen") {
            ctx.strokeStyle = style.color;
            ctx.linewidth = style.linewidth;
        }
        else {
            ctx.fillStyle = style.color;
            ctx.linewidth = null;
        }
        ctx.beginPath();
        ctx.moveTo(a[0].x, a[0].y);
        for (i = 0; i < a.length; i++) {
            ctx.lineTo(a[i].x, a[i].y);
        }
        ctx.closePath();
        if (style.pen == "pen") {
            ctx.stroke();
        }
        else {
            ctx.fill();
        }

    },
    this.drawarc = function (shape) {
        var a = shape.say();
        console.log(a);
        var canvass = document.getElementById(canvas.id);
        var ctx = canvass.getContext("2d");
        if (style.pen == "pen") {
            ctx.strokeStyle = style.color;
            ctx.linewidth = style.linewidth;
        }
        else {
            ctx.fillStyle = style.color;
            ctx.linewidth = null;
        }
        ctx.beginPath();
        ctx.arc(a[0].x, a[0].y, a[1].x, ((a[2].x)/180)*Math.PI,((a[2].y)/180)*Math.PI,false );
        if (style.pen == "pen") {
            ctx.stroke();
        }
        else {
            ctx.fill();
        }
    },


       this.drawsector = function (shape) {
           var a = shape.say();
           console.log(a);
           var canvass = document.getElementById(canvas.id);
           var ctx = canvass.getContext("2d");
           var anglebegin = ((a[2].x) / 180) * Math.PI;
           var angleend = ((a[2].y) / 180) * Math.PI;
           if (style.pen == "pen") {
               ctx.strokeStyle = style.color;
               ctx.linewidth = style.linewidth;
           }
           else {
               ctx.fillStyle = style.color;
               ctx.linewidth = null;
           }
           ctx.beginPath();
           ctx.moveTo(a[0].x, a[0].y);
           ctx.lineTo(a[0].x+((a[1].x) * (Math.cos(anglebegin))), a[0].y+((a[1].x) * (Math.sin(anglebegin))));
           ctx.arc(a[0].x, a[0].y, a[1].x, anglebegin, angleend,false);
           ctx.moveTo(a[0].x, a[0].y);
           ctx.lineTo(a[0].x+((a[1].x) * (Math.cos(angleend))),a[0].y+( (a[1].x) * (Math.sin(angleend))));
           ctx.closePath();
           if (style.pen == "pen") {
               ctx.stroke();
           }
           else {
               ctx.fill();
           }
       }

}