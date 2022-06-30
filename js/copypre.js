var msgpopup="You can't Copy";
function handle(){
      if(toShowMessage== "1") alert(message);
          if(closeSelf== "1") self.close();
          return false;
}
function mouseDown() {
     if (event.button == "2" || event.button == "3"){handle();}
}
function mouseUp(e) {
     //if (document.layers || (document.getElementById && !document.all)){
          if (e.which == "2" || e.which == "3"){ handle();}
     //}
}
document.onmousedown=mouseDown;
document.onmouseup=mouseUp;
document.oncontextmenu=new Function("alert(msgpopup);return false")