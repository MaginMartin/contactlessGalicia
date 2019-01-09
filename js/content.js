// import {cont1} from '/js/datos.js';
// import { cont1,cont2,cont3,cont4 } from '/js/datos.js';
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },

    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() ||
            isMobile.Windows());
    }
};

var cont = $('.contenido');
// $.getJSON('js/data.json')
var cont1="html/macro.html";

var cont2='html/micro.html';

var cont3='html/foda.html';

var cont4='html/estrategia.html';

var cont5='html/objetivo.html';


// Menu de las paginas 

// var ctrlMacro = '<div class="ctrl-temas"><div class="ctrl-opcion"><a href="#politico"></a></div> <div class="ctrl-opcion"><a href="#economico"></a></div> <div class="ctrl-opcion"><a href="#social"></a></div> <div class="ctrl-opcion"><a href="#tecnologico"></a></div></div>';

// var ctrlMicro = '<div class="ctrl-temas"><div class="ctrl-opcion"><a href="#politico"></a></div> <div class="ctrl-opcion"><a href="#economico"></a></div> <div class="ctrl-opcion"><a href="#social"></a></div>';



var txtCheck =  $('li a').click(function(){

    if (isMobile.any()) {
    $('#trMenu').empty().append(' <a  onclick=" c()" >Menu</a>')
    }

 
    $('li a').removeClass('barraA');
 $(this).addClass('barraA')

});

var $crtlOp=$('.ctrl-opcion');

var ctrlCheck =  $crtlOp.click(function(){
    $crtlOp.removeClass('ctrl-op-Selec');
    $(this).addClass('ctrl-op-Selec')
});





function mostrarMacro(n){

    switch(n){
        case 1 :
        cont.empty();
        cont.load(cont1);
        // $('html').on('change', cont.append(ctrlMacro)) 
        
        
         break;
         case 2 :
        cont.empty();
        cont.load(cont2);
        // $('.contenido').ready(function () {cont.append(ctrlMicro);});
        
         break;
         case 3 :
        cont.empty();
        cont.load(cont3);
        
         break;
         case 4 :
        cont.empty();
        cont.load(cont4);
       
         break;
         case 5 :
         cont.empty();
         cont.load(cont5)
        
          break;



    }


}
