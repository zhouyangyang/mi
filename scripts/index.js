window.onload=function(){
var lb=document.getElementsByClassName("lb");
var yuandian=document.getElementsByClassName("yuandian");
var qian=document.getElementById("qian");
var hou=document.getElementById("hou");
var kaiguan=true;
var ff=lb[0];
var timeid;
var red=yuandian[0];
   yuandian[0].style.background="#fff";
   lb[0].style.display="block";

   for(var i=0;i<yuandian.length;i++){
     yuandian[i].index=i;
   	yuandian[i].style.left=(1000+i*30)+"px";
   	yuandian[i].onclick=function(){
        clearInterval(timeid);
        kaiguan=false;
              red.style.background="none";
               this.style.background="#fff";
               red=yuandian[this.index];
              ff.style.display="none";
             lb[this.index].style.display="block";
              ff=lb[this.index];
             
   	}
   	
   	 
      lb[i].onmouseover=function(){
        clearInterval(timeid);
      }
      lb[i].onmouseout=function(){
        if(kaiguan==true){
          timeid=setInterval(fn,1000)
        }
      }
      lb[i].onclick=function(){
        kaiguan=false;
    
      }
   }
   qian.onclick=function(){
   kaiguan=false;        
   	   clearInterval(timeid);
       red.style.background="none";
   	   ff.style.display="none";
       var pre=ff.previousElementSibling;
        if(pre==null){pre=lb[3]}
          pre.style.display="block";
         ff=pre;
        var pre1=red.previousElementSibling;
        if(pre1==null){pre1=yuandian[3]}
         pre1.style.background="#fff";
   	      red=pre1;
      
    }

   	  hou.onclick=function(){
        kaiguan=false;
   	   clearInterval(timeid);
       red.style.background="none";
   	   ff.style.display="none";
        var hou=ff.nextElementSibling;
        if(hou==null){hou=lb[0]}
          hou.style.display="block";
         ff=hou;
        var hou1=red.nextElementSibling;
        if(hou1==null){hou1=yuandian[0]}
         hou1.style.background="#fff";
          red=hou1;

   }
   var fn=(function(){
        var index=0;
        return function(){
            red.style.background="";
            ff.style.display="none";
            index++;
            if(index==4){
              index=0;
           }
           lb[index].style.display="block";
           yuandian[index].style.background="#fff";
           ff=lb[index];
           red=yuandian[index];
        }    
   })();
   timeid=setInterval(fn,1000);




}