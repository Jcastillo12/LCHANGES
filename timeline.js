jQuery(document).ready(function() {

    $('#yearbox1999').hover(

        function() {
        $('.text-bar-1').addClass( "animation1" );
        $('.text-bar-animated').addClass( "position" );
        $('.text-bar-1').addClass( "show-element fade-in" );

        //Add classes
        $('.text-bar-2').addClass( "hide-element" );
        $('.text-bar-3').addClass( "hide-element" );
        $('.text-bar-4').addClass( "hide-element" );
        $('.text-bar-5').addClass( "hide-element" );
        $('.text-bar-6').addClass( "hide-element" );
        $('.text-bar-7').addClass( "hide-element" );


        //Remove classes
        $('.text-bar-1').removeClass( "animation2" );
        $('.text-bar-3').removeClass( "animation3" );
        $('.text-bar-4').removeClass( "animation4" );
        $('.text-bar-5').removeClass( "animation5" );
        $('.text-bar-6').removeClass( "animation6" );
        $('.text-bar-7').removeClass( "animation7" );

        //Remove classes
        $('.text-bar-2').removeClass( "show-element fade-in" );
        $('.text-bar-3').removeClass( "show-element fade-in" );
        $('.text-bar-4').removeClass( "show-element fade-in" );
        $('.text-bar-5').removeClass( "show-element fade-in" );
        $('.text-bar-6').removeClass( "show-element fade-in" );
        $('.text-bar-7').removeClass( "show-element fade-in" );

        //Background
        $('._1332').addClass("back1");
        
        //Remove other background classes
        $('._1332').removeClass("back2");
        $('._1332').removeClass("back3");
        $('._1332').removeClass("back4");
        $('._1332').removeClass("back5");
        $('._1332').removeClass("back6");
        $('._1332').removeClass("back7");


        }
   
    );

});