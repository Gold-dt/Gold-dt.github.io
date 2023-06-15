function ido1(){
    var timeleft1 = 66;
    var downloadTimer1 = setInterval(function(){
      if(timeleft1 <= 0){
        clearInterval(downloadTimer1);
        document.getElementById("countdown66").innerHTML = "Kész";
      } else {
        document.getElementById("countdown66").innerHTML = timeleft1 + " seconds remaining";
        document.getElementById("progressBar").value = 66 - timeleft1;
      }
      timeleft1 -= 1;
    }, 1000);
}
function ido2(){
    
        var timeleft2 = 46;
        var downloadTimer2 = setInterval(function(){
          if(timeleft2 <= 0){
            clearInterval(downloadTimer2);
            document.getElementById("countdown46").innerHTML = "Kész";
          } else {
            document.getElementById("countdown46").innerHTML = timeleft2 + " seconds remaining";
            document.getElementById("progressBar1").value = 46 - timeleft2;
          }
          timeleft2 -= 1;
        }, 1000);
    }
function ido3(){

    var timeleft3 = 126;
    var downloadTimer3 = setInterval(function(){
      if(timeleft3 <= 0){
        clearInterval(downloadTimer3);
        document.getElementById("countdown126").innerHTML = "Kész";
      } else {
        document.getElementById("countdown126").innerHTML = timeleft3 + " seconds remaining";
        document.getElementById("progressBar2").value = 126 - timeleft3;
      }
      timeleft3 -= 1;
    }, 1000);
}
function ido4(){
    var timeleft4 = 96;
    var downloadTimer4 = setInterval(function(){
      if(timeleft4 <= 0){
        clearInterval(downloadTimer4);
        document.getElementById("countdown96").innerHTML = "Kész";
      } else {
        document.getElementById("countdown96").innerHTML = timeleft4 + " seconds remaining";
        document.getElementById("progressBar3").value = 96 - timeleft4;
      }
      timeleft4 -= 1;
    }, 1000);
}