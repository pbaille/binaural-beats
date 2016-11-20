var width = 960,
    height = 500;

var points = d3.range(0, 5).map(function(i) {
  return [i * width / 4, height / 2];
});

var dragged = null,
    selected = points[0];

var line = d3.svg.line();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("tabindex", 1);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("stroke", "black")
    .on("mousedown", mousedown);

svg.append("path")
    .datum(points)
    .attr("class", "line")
    .call(redraw);

d3.select(window)
    .on("mousemove", mousemove)
    .on("mouseup", mouseup)
    .on("keydown", keydown);

function redraw() {

  svg.select("path").attr("d", line);

  var circle = svg.selectAll("circle")
      .data(points, function(d) { return d; });

  circle.enter().append("circle")
      .attr("r", 1e-6)
      .on("mousedown", function(d) { selected = dragged = d; redraw(); })
    .transition()
      .duration(750)
      .ease("elastic")
      .attr("r", 6.5);

  circle
      .classed("selected", function(d) { return d === selected; })
      .attr("cx", function(d) { return d[0]; })
      .attr("cy", function(d) { return d[1]; });

  circle.exit().remove();

  if (d3.event) {
    d3.event.preventDefault();
    d3.event.stopPropagation();
  }
}

function mousedown() {
  points.push(selected = dragged = d3.mouse(svg.node()));
  points.sort(function(x,y){return x[0] > y[0]; })
  redraw()
}

function mousemove() {
  if (!dragged) return;
  var m = d3.mouse(svg.node());
  var i = points.indexOf(selected);

  if (!(i == 0) && !(i == points.length - 1)) {
    dragged[0] = Math.max(points[i - 1] && points[i - 1][0] || 0, Math.min(points[i + 1] && points[i + 1][0] || width, m[0]));
  }
  dragged[1] = Math.max(0, Math.min(height, m[1]));
  redraw();
}

function mouseup() {
  if (!dragged) return;
  mousemove();
  dragged = null;
}

function keydown() {
  if (!selected) return;
  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: { // delete
      var i = points.indexOf(selected);
      if (!(i == 0) && !(i == points.length - 1)) {
        points.splice(i, 1);
        selected = points.length ? points[i > 0 ? i - 1 : 0] : null;
        redraw();
      }
      break;
    }
  }
}