var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListner("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value
    widht_of_line = document.getElementById("width_of_line");

    mouseEvent = "mousedown";
}

canvas.addEventListner("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.client - canvas.offsetLeft;
    current_position_of_y = e.client - canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last positions of X and Y coordinates");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

    }

}

canvas.addEventListner("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_x = e.touches[0].clientX - canavs.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canavs.offsetTop;

    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_fo_touch_x, current_position_of_touch_y);

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;

    current_position_of_touch_x = last_position_of_x;
    current_position_of_touch_y = last_position_of_y;
}