var canvas = document.getElementById('canvassample'),
    ctx = canvas.getContext('2d'),
    moveflg = 0,
    Xpoint,
    Ypoint;
 
//初期値（サイズ、色、アルファ値）の決定
var defSize = 7,
    defColor = "#555";
 
 
 
// PC対応
canvas.addEventListener('mousedown', startPoint, false);
canvas.addEventListener('mousemove', movePoint, false);
canvas.addEventListener('mouseup', endPoint, false);
// スマホ対応
canvas.addEventListener('touchstart', startPoint, false);
canvas.addEventListener('touchmove', movePoint, false);
canvas.addEventListener('touchend', endPoint, false);
 
function startPoint(e){
  e.preventDefault();
  ctx.beginPath();
   
  // 矢印の先っぽから始まるように調整
  Xpoint = e.layerX;
  Ypoint = e.layerY;
   
  ctx.moveTo(Xpoint, Ypoint);
}
 
function movePoint(e){
  if(e.buttons === 1 || e.witch === 1 || e.type == 'touchmove')
  {
    Xpoint = e.layerX;
  　Ypoint = e.layerY;
    moveflg = 1;
     
    ctx.lineTo(Xpoint, Ypoint);
    ctx.lineCap = "round";
    ctx.lineWidth = defSize * 2;
    ctx.strokeStyle = defColor;
    ctx.stroke();
     
  }
}
 
function endPoint(e)
{
 
    if(moveflg === 0)
    {
       ctx.lineTo(Xpoint-1, Ypoint-1);
       ctx.lineCap = "round";
       ctx.lineWidth = defSize * 2;
       ctx.strokeStyle = defColor;
       ctx.stroke();
        
    }
    moveflg = 0;
}

function checkImg()
{
  var ans = $('#answer').val();
  if(ans !=""){
    chgImg(ans);
  }
}

function chgImg(ans)
{ 
  $('#moduleName').html('<h3>'+ans+'</h3>');
  var png = canvas.toDataURL();
  document.getElementById("newImg").src = png;
  $('#img-box').css('display', 'block');
}

function clearCanvas()
{
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
}
