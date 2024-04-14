
var nombre=document.getElementById('nombre');
var resultat=document.getElementById('resultat');
var devinette=Math.floor(Math.random()*100)+1;
console.log(devinette);
var b=document.getElementById('btn');
b.addEventListener('click',function(){
    this.style.backgroundColor='red';
    var nombre1=parseInt(nombre.value);
    if(nombre1>100 || nombre1<0){
        resultat.innerHTML="intervalle non respectée";
    }
    
        else if(nombre1==devinette){
            resultat.innerHTML="win";
            resultat.style.color="green";
            resultat.style.fontSize="100px";

        }
        else if(nombre1<devinette ){
            resultat.innerHTML="lose ****votre nombre est petit**** ";
            resultat.style.color="pink";
            resultat.style.fontSize="50px";
        }
        else if(nombre1>devinette){
            resultat.innerHTML="lose *******votre nombre est grand****";
            resultat.style.color="pink";
            resultat.style.fontSize="50px";
            
        }
    

})


