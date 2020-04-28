var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";

// Our angle
var angle = Math.PI * 0.3;

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.arc(200, 200, 120, 0, angle);
ctx.lineTo(200, 200);
ctx.fill();


ctx.beginPath();
ctx.moveTo(100, 100);
ctx.arc(100, 100, 120, 0, angle);
ctx.lineTo(100, 100);
ctx.fill();
