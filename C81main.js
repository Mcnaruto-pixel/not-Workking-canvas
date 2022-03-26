var mouseEvent = "Empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
width_of_the_line = 1;

color = "black";


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    current_position_of_mouseY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouseX;
    last_position_of_y = current_position_of_mouseY;
}
canvas.addEventListener("mouseUp", my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseLeave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent = "mouseLeave";
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}