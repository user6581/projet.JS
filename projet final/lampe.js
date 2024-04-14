var b=document.querySelector('#b');
b.addEventListener('click',function(){
    var i=document.querySelector('#eteint');
    var j=document.querySelector('#image');
    var k=document.querySelector('#audio');
    if(j.src.indexOf("off.webp")==-1){
        i.src="eteint.webp";
        j.src="off.webp";
        k.play();
    }
    else
{
    i.src="allumer.jpg";
        j.src="on.png";
        k.play();

}});