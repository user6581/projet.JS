    var b=document.querySelector('#cv');
   b.addEventListener('click',function(){ 
    var  cv=document.createElement('img');
    cv.style.height="500px";
    cv.style.width="550px";
    cv.src="cv.jpg";
    document.querySelector('div').innerHTML="";
   document.querySelector('div').appendChild(cv);
this.style.color='green';
this.style.backgroundColor='yellow';
   });
   var c=document.querySelector('#photo');
   c.addEventListener('click',function(){
    var  tag=document.createElement('img');
    tag.src="moi.JPG";
    tag.style.height="500px"
    tag.style.width="550px"
    document.querySelector('div').innerHTML="";
   document.querySelector('div').appendChild(tag);
   this.style.backgroundColor="brown";
   this.style.color="gray";

  
  
   });
   var d=document.querySelector('#video');
   d.addEventListener('click',function(){
   
    this.style.backgroundColor="blue";
    this.style.color="red";
    var  tag=document.createElement('p');

    tag.innerHTML="<video controls src='video.MP4' autoplay  ></video>"
    document.querySelector('div').innerHTML="";
   document.querySelector('div').appendChild(tag);
  
   });
   var f=document.querySelector('#formulaire');
   f.addEventListener('click',function(){
    h1=document.createElement('form');
h1.innerHTML="<form><label style='color:green'>nom <input ></label></br><label style='color:red'>prenom<input ></label></br><label style='color:yellow'>email <input ></label></br><button>valider</button></form>";
document.querySelector('div').innerHTML="";
document.querySelector('div').appendChild(h1);
this.style.backgroundColor="pink";
this.style.color="white";

   })