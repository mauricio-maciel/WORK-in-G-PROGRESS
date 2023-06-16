'use strict'

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

//cuando click en punto
   //saber la posicion de ese punto
   //aplicar un transform traslatex al grande
   //QUITAR la clase activo de todos los puntos
   //AÑADIR la clase activo al punto que hemos hecho click

   //recorrer todos los puntos
   punto.forEach(( cadaPunto , i )=>{
    //asignamos un click a cada punto
    punto[i].addEventListener('click',()=>{
        //guardar la posicion de ese punto
        let posicion = i

        //cuando la posicion es 0 el transform es 0
        //cuando la posicion es 1 el transform es -25%
        //operacion=posicion * 25

        //CALCULAMOS cuanto debe desplazarse  el grande
        let operacion = posicion * -25
        
        //movemos  el grande
        grande.style.transform=`translateX(${operacion}%)`
        //recorremos todos los puntos 
        punto.forEach((cadaPunto,i)=>{
            //quitamos clase activo a todos los puntos
            punto[i].classList.remove('activo')
                      
        })
        //añidir la clase activo en que hicimos click 
        punto[i].classList.add('activo')         
     })
   })

