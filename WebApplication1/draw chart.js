
    /*--barchart--*/
    function barchart(data, label, x, y, barwidth, barheight,canvas) {
        this.width = barwidth;
        this.height = barheight;
        this.data = data;
        this.label = label;
        this.x = x;
        this.y = y;
     

        this.xAxis = function () {
            var style = new Style("pen", "black", 1);
            var painter = new Painter(canvas, style);
            var line = new Line(this.x, this.y, this.x + this.width+15, this.y);
            painter.drawline(line);
            var x1 = new Line(this.x + this.width+15, this.y, this.x + this.width +5, this.y - 10);
            painter.drawline(x1);
            var x2 = new Line(this.x + this.width+15, this.y, this.x + this.width+ 5, this.y + 10);
            painter.drawline(x2);


        },
        this.yAxis = function () {
            var style = new Style("pen", "black", 1);
            var painter = new Painter(canvas, style);
            var line = new Line(this.x, this.y, this.x, this.y - this.height);
            painter.drawline(line);
            var y1 = new Line(this.x, this.y - this.height, this.x + 10, this.y - this.height + 10);
            painter.drawline(y1);
            var y2 = new Line(this.x, this.y - this.height, this.x - 10, this.y - this.height + 10);
            painter.drawline(y2);

        },
        this.series = function () {
            var style = new Style("brush", "blue", 0);
            var painter = new Painter(canvas, style);
            var len = Math.floor((this.width / 2) / (this.data.length));
            for (var i = 0; i < this.data.length; i++) {
                var polygon = new Polygon([this.x + len * (2 * i + 1) , this.y, this.x + len * (2 * i + 1), this.y - data[i], this.x + len * 2 * (i + 1), this.y - data[i], this.x + len * 2 * (i + 1), this.y])
                painter.drawpolygon(polygon);
            }
        }
        this.text = function () {
            var con = document.getElementById(canvas.id);
            var ctx = con.getContext("2d")
            var len = Math.floor((this.width / 2) / (this.data.length));
            ctx.fillStyle = "red";
            for (var i = 0; i < this.data.length; i++) {
                ctx.fillText(this.label[i + 2], this.x  + 2 * i * len + len, this.y + 10);
                ctx.fillText(this.data[i], this.x - 20, this.y - data[i]);
            };
            ctx.fillText(this.label[0], this.x + this.width + 15, this.y);
            ctx.fillText(this.label[1], this.x, this.y - this.height - 10);
        }
    }

    /*--line graph--*/


    function linechart(data, label, x, y, width, height,canvas) {
        this.width = width;
        this.height = height;
        this.data = data;
        this.label = label;
        this.x = x;
        this.y = y;

        this.xAxis = function () {
            var style = new Style("pen", "black", 1);
            var painter = new Painter(canvas, style);
            var line = new Line(this.x, this.y, this.x + this.width, this.y);
            painter.drawline(line);
            var x1 = new Line(this.x + this.width, this.y, this.x + this.width - 10, this.y - 10);
            painter.drawline(x1);
            var x2 = new Line(this.x + this.width, this.y, this.x + this.width - 10, this.y + 10);
            painter.drawline(x2);


        },
        this.yAxis = function () {
            var style = new Style("pen", "black", 1);
            var painter = new Painter(canvas, style);
            var line = new Line(this.x, this.y, this.x, this.y - this.height);
            painter.drawline(line);
            var y1 = new Line(this.x, this.y - this.height, this.x + 10, this.y - this.height + 10);
            painter.drawline(y1);
            var y2 = new Line(this.x, this.y - this.height, this.x - 10, this.y - this.height + 10);
            painter.drawline(y2);

        },
        this.series = function () {
            var len = Math.floor((this.width / 2) / (this.data.length));
            var style = new Style("brush", "red", 0);
            var painter = new Painter(canvas, style);
            for (var i = 0; i < this.data.length; i++) {
                var point = new Point(this.x - 15 + 2 * i * len + (3 / 2) * len, this.y - this.data[i])
                painter.drawpoint(point);
            };
            var style = new Style("pen", "red", 1);
            var painter = new Painter(canvas, style);
            for (var j = 0; j < this.data.length; j++) {
                var line = new Line(this.x - 15 + 2 * j * len + (3 / 2) * len, this.y - this.data[j], this.x - 15 + 2 * (j + 1) * len + (3 / 2) * len, this.y - this.data[j + 1]);
                painter.drawline(line);
            }
        }
        this.text = function () {
            var con = document.getElementById(canvas.id);
            var ctx = con.getContext("2d")
            var len = Math.floor((this.width / 2) / (this.data.length));
            ctx.fillStyle = "red";
            for (var i = 0; i < this.data.length; i++) {
                ctx.fillText(this.label[i + 2], this.x - 15 + 2 * i * len + len, this.y + 10);
                ctx.fillText(this.data[i], this.x - 20, this.y - data[i]);
            };
            ctx.fillText(this.label[0], this.x + this.width + 10, this.y);
            ctx.fillText(this.label[1], this.x, this.y - this.height - 10);
        }
    }
    /*--pie chart--*/

    function piechart(data, label, radius, x, y,canvas) {
        this.r = radius;
        this.data = data;
        this.label = label;
        this.x = x;
        this.y = y;
        var color = function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        };
        var total = 0;
        for (var i = 0; i < this.data.length; i++) {
            total += this.data[i];
        };
        var abegin = 0, aend = 0;
        for (var j = 0; j < this.data.length; j++) {
            aend = abegin + (this.data[j] / total) * 360;
            var s = new Style("brush", color(), 0);
            var painter = new Painter(canvas, s);
            var sector = new Arc(this.x, this.y, this.r, abegin, aend);
            painter.drawsector(sector);
            console.log(abegin, aend);
            abegin = aend;

        };
    }