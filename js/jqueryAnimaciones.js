$(document).ready(function(){
    //animaciones
/*     $("p").click(function(){
        // hide y show 
        //desvanecimiento fadeIn fadeOut fadeToggle
        //deslizamiento slideUp slideDown slideToggle
        $("div").slideUp(1000);
    }); */
    $("button").click(function(){
        //$("div").slideToggle(1000);
        $("p").animate({
            width: '-=50px',
            height: '+=5px'
        },1500);
    });
    //una a una segun orden
    var parrafo = $("p");
    parrafo.animate({opactity: 1});
    parrafo.animate({height: '+=100px',width: '+=50px',top:'-=30px'},1000);
    parrafo.animate({opacity: 0.5,width:'-=50px'});
    parrafo.animate({height: '-=100px',width: '-=50px',top:'+=30px'},500);
});
