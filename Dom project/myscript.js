/*=============these fuctions are responsible for creating an interactive like==============*/
let like1=document.getElementById('like1')
function ilike1(){
  if(like1.style.color=='red'){
    like1.style.color='black'
  }
  else{
    like1.style.color='red'
  }
}
let like2=document.getElementById('like2')
function ilike2(){
  if(like2.style.color=='red'){
    like2.style.color='black'
  }
  else{
    like2.style.color='red'
  }
}
let like3=document.getElementById('like3')
function ilike3(){
  if(like3.style.color=='red'){
    like3.style.color='black'
  }
  else{
    like3.style.color='red'
  }
}
/*======these functions are responsible for deleting articles================*/
let article1= document.getElementById("article1");
let ar1=document.getElementById("ar1");
let ar1p=document.getElementById("ar1p");
let total=document.getElementById("total");
function delete1(){
article1.remove();
total.innerHTML=+total.innerHTML-ar1p.innerHTML
}
let article2= document.getElementById("article2");
let ar2=document.getElementById("ar2");
let ar2p=document.getElementById("ar2p");
function delete2(){
article2.remove();
total.innerHTML=+total.innerHTML-ar2p.innerHTML
}
let article3= document.getElementById("article3");
let ar3=document.getElementById("ar3");
let ar3p=document.getElementById("ar3p");
function delete3(){
article3.remove();
total.innerHTML=+total.innerHTML-ar3p.innerHTML
}
/*==================these fuctions are responsible for the pricing====================*/
function inc1(){
	  ar1.innerHTML=+ar1.innerHTML+1
	  ar1p.innerHTML=+ar1p.innerHTML+25;
	  total.innerHTML=+total.innerHTML+25
	}
function dec1(){
	  if(ar1.innerHTML==0){
	    ar1.innerHTML=ar1.innerHTML
	    total.innerHTML=+total.innerHTML
	    ar1p.innerHTML=ar1p.innerHTML
	  }
	  else{  ar1.innerHTML=+ar1.innerHTML-1
	    total.innerHTML=+total.innerHTML-25
	    ar1p.innerHTML=+ar1p.innerHTML-25
    }
 }
function inc2(){
	ar2.innerHTML=+ar2.innerHTML+1
	ar2p.innerHTML=+ar2p.innerHTML+30;
	total.innerHTML=+total.innerHTML+30
}
function dec2(){
	  if(ar2.innerHTML==0){
	    ar2.innerHTML=ar2.innerHTML
	    total.innerHTML=+total.innerHTML
	    ar2p.innerHTML=ar2p.innerHTML
	  }
	  else{  ar2.innerHTML=+ar2.innerHTML-1
	    total.innerHTML=+total.innerHTML-30
	    ar2p.innerHTML=+ar2p.innerHTML-30
    }
}
function inc3(){
 ar3.innerHTML=+ar3.innerHTML+1
ar3p.innerHTML=+ar3p.innerHTML+40;
total.innerHTML=+total.innerHTML+40
}
function dec3(){
	  if(ar3.innerHTML==0){
	    ar3.innerHTML=ar3.innerHTML
	    total.innerHTML=+total.innerHTML
	    ar3p.innerHTML=ar3p.innerHTML
	  }
	  else{  ar3.innerHTML=+ar3.innerHTML-1
	    total.innerHTML=+total.innerHTML-40
	    ar3p.innerHTML=+ar3p.innerHTML-40
}
}









