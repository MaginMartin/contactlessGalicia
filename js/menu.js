   
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
if (isMobile.any()) {

$('#trMenu').append(' <a  onclick=" c()" >Menu</a>')

$('.menu').addClass('menuMobile');

$('li a').removeClass('barraA');

var c = function(){
   
    $('#trMenu').empty().append( '<a  onclick=" b()" >Cerrar</a>')
$('.menuMobile').animate({left : '0%',opacity:'1'},500);


}
 var b = function (){
    $('#trMenu').empty().append(' <a  onclick=" c()" >Menu</a>')
    $('.menuMobile').animate({left : '-100%',opacity:'0'},100); 
}


$('.menuMobile').click(function(){
$(this).animate({left : '-100%',opacity:'0'},100);
// $(this).addClass('menuMobileHide').removeClass('menuMobileVisible');
})

}

