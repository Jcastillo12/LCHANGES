jQuery(document).ready(function() {


    $( ".bar-animated-1" ).hover(function() {

        $( ".text-bar-1" ).toggleClass("animation1 ");
        $('.text-bar-animated').addClass( "position" );
        $('.text-bar-1').toggleClass( "show-element fade-in" );
        $('.fill-gap-purple').toggleClass("transition");
        $(".fill-gap-purple .internal-text" ).toggleClass("hide-element");
        $('.bar-animated-2').toggleClass("changecolorpurple");
        $('.bar-animated-3').toggleClass("changecolorpurple");
        $('.bar-animated-4').toggleClass("changecolorpurple");
        $('.bar-animated-5').toggleClass("changecolorpurple");
        $('.bar-animated-6').toggleClass("changecolorpurple");
        $('.bar-animated-7').toggleClass("changecolorpurple");

        


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
         

    });

    $('.bar-animated-2').hover(
        function() {
            $( ".text-bar-2" ).toggleClass("animation2");
            $('.text-bar-animated').addClass( "position" );
            $('.text-bar-2').toggleClass( "show-element fade-in" );
            $('.fill-gap-red').toggleClass("transition");
            $( ".fill-gap-red .internal-text" ).toggleClass("hide-element");
            $('.bar-animated-3').toggleClass("changecolorred");
            $('.bar-animated-4').toggleClass("changecolorred");
            $('.bar-animated-5').toggleClass("changecolorred");
            $('.bar-animated-6').toggleClass("changecolorred");
            $('.bar-animated-7').toggleClass("changecolorred");
            

            //Add classes
            $('.text-bar-1').addClass( "hide-element" );
            $('.text-bar-3').addClass( "hide-element" );
            $('.text-bar-4').addClass( "hide-element" );
            $('.text-bar-5').addClass( "hide-element" );
            $('.text-bar-6').addClass( "hide-element" );
            $('.text-bar-7').addClass( "hide-element" );

            //Remove classes
            $('.text-bar-1').removeClass( "animation1" );
            $('.text-bar-3').removeClass( "animation3" );
            $('.text-bar-4').removeClass( "animation4" );
            $('.text-bar-5').removeClass( "animation5" );
            $('.text-bar-6').removeClass( "animation6" );
            $('.text-bar-7').removeClass( "animation7" );

            //Remove classes
            $('.text-bar-1').removeClass( "show-element fade-in" );
            $('.text-bar-3').removeClass( "show-element fade-in" );
            $('.text-bar-4').removeClass( "show-element fade-in" );
            $('.text-bar-5').removeClass( "show-element fade-in" );
            $('.text-bar-6').removeClass( "show-element fade-in" );
            $('.text-bar-7').removeClass( "show-element fade-in" );

            // //Background
            // $('._1332').addClass("back2");
            
            // //Remove other background classes
            // $('._1332').removeClass("back1");
            // $('._1332').removeClass("back3");
            // $('._1332').removeClass("back4");
            // $('._1332').removeClass("back5");
            // $('._1332').removeClass("back6");
            // $('._1332').removeClass("back7");

        }
    );


    $('.bar-animated-3').hover(
        function() {
                $( ".text-bar-3" ).toggleClass("animation3");
                $('.text-bar-animated').addClass( "position" );
                $('.text-bar-3').toggleClass( "show-element fade-in" );
                $('.fill-gap-yellow').toggleClass("transition");
                $( ".fill-gap-yellow .internal-text" ).toggleClass("hide-element");
                $('.bar-animated-4').toggleClass("changeyellow");
                $('.bar-animated-5').toggleClass("changeyellow");
                $('.bar-animated-6').toggleClass("changeyellow");
                $('.bar-animated-7').toggleClass("changeyellow");

                //Add classes
                $('.text-bar-1').addClass( "hide-element" );
                $('.text-bar-2').addClass( "hide-element" );
                $('.text-bar-4').addClass( "hide-element" );
                $('.text-bar-5').addClass( "hide-element" );
                $('.text-bar-6').addClass( "hide-element" );
                $('.text-bar-7').addClass( "hide-element" );

                //Remove classes
                $('.text-bar-1').removeClass( "animation1" );
                $('.text-bar-2').removeClass( "animation2" );
                $('.text-bar-4').removeClass( "animation4" );
                $('.text-bar-5').removeClass( "animation5" );
                $('.text-bar-6').removeClass( "animation6" );
                $('.text-bar-7').removeClass( "animation7" );

                
                //Remove classes
                $('.text-bar-1').removeClass( "show-element fade-in" );
                $('.text-bar-2').removeClass( "show-element fade-in" );
                $('.text-bar-4').removeClass( "show-element fade-in" );
                $('.text-bar-5').removeClass( "show-element fade-in" );
                $('.text-bar-6').removeClass( "show-element fade-in" );
                $('.text-bar-7').removeClass( "show-element fade-in" );

                // //Background
                // $('._1332').addClass("back3");
                
                // //Remove other background classes
                // $('._1332').removeClass("back1");
                // $('._1332').removeClass("back2");
                // $('._1332').removeClass("back4");
                // $('._1332').removeClass("back5");
                // $('._1332').removeClass("back6");
                // $('._1332').removeClass("back7");
            }
    );


    $('.bar-animated-4').hover(
        function() {
                $( ".text-bar-4" ).toggleClass("animation4");
                $('.text-bar-animated').addClass( "position" );
                $('.text-bar-4').toggleClass( "show-element fade-in" );
                $('.fill-gap-blue').toggleClass("transition");
                $( ".fill-gap-blue .internal-text" ).toggleClass("hide-element");
                $('.bar-animated-5').toggleClass("changeblue");
                $('.bar-animated-6').toggleClass("changeblue");
                $('.bar-animated-7').toggleClass("changeblue");

                //Add classes
                $('.text-bar-1').addClass( "hide-element" );
                $('.text-bar-3').addClass( "hide-element" );
                $('.text-bar-2').addClass( "hide-element" );
                $('.text-bar-5').addClass( "hide-element" );
                $('.text-bar-6').addClass( "hide-element" );
                $('.text-bar-7').addClass( "hide-element" );

                //Remove classes
                $('.text-bar-1').removeClass( "animation1" );
                $('.text-bar-2').removeClass( "animation2" );
                $('.text-bar-3').removeClass( "animation3" );
                $('.text-bar-5').removeClass( "animation5" );
                $('.text-bar-6').removeClass( "animation6" );
                $('.text-bar-7').removeClass( "animation7" );

                
                //Remove classes
                $('.text-bar-1').removeClass( "show-element fade-in" );
                $('.text-bar-3').removeClass( "show-element fade-in" );
                $('.text-bar-2').removeClass( "show-element fade-in" );
                $('.text-bar-5').removeClass( "show-element fade-in" );
                $('.text-bar-6').removeClass( "show-element fade-in" );
                $('.text-bar-7').removeClass( "show-element fade-in" );


                // //Background
                // $('._1332').addClass("back4");
        
                // //Remove other background classes
                // $('._1332').removeClass("back1");
                // $('._1332').removeClass("back2");
                // $('._1332').removeClass("back3");
                // $('._1332').removeClass("back5");
                // $('._1332').removeClass("back6");
                // $('._1332').removeClass("back7");
            }
    );

    $('.bar-animated-5').hover(
        function() {
                $( ".text-bar-5" ).toggleClass("animation5");
                $('.text-bar-animated').addClass( "position" );
                $('.text-bar-5').toggleClass( "show-element fade-in" );
                $('.fill-gap-orange').toggleClass("transition");
                $( ".fill-gap-orange .internal-text" ).toggleClass("hide-element");
                $('.bar-animated-6').toggleClass("changeorange");
                $('.bar-animated-7').toggleClass("changeorange");

                //Add classes
                $('.text-bar-1').addClass( "hide-element" );
                $('.text-bar-3').addClass( "hide-element" );
                $('.text-bar-4').addClass( "hide-element" );
                $('.text-bar-2').addClass( "hide-element" );
                $('.text-bar-6').addClass( "hide-element" );
                $('.text-bar-7').addClass( "hide-element" );

                //Remove classes
                $('.text-bar-1').removeClass( "animation1" );
                $('.text-bar-2').removeClass( "animation2" );
                $('.text-bar-3').removeClass( "animation3" );
                $('.text-bar-4').removeClass( "animation4" );
                $('.text-bar-6').removeClass( "animation6" );
                $('.text-bar-7').removeClass( "animation7" );

                
                //Remove classes
                $('.text-bar-1').removeClass( "show-element fade-in");
                $('.text-bar-3').removeClass( "show-element fade-in");
                $('.text-bar-4').removeClass( "show-element fade-in");
                $('.text-bar-2').removeClass( "show-element fade-in");
                $('.text-bar-6').removeClass( "show-element fade-in");
                $('.text-bar-7').removeClass( "show-element fade-in");

                // //Background
                // $('._1332').addClass("back5");
                            
                // //Remove other background classes
                // $('._1332').removeClass("back1");
                // $('._1332').removeClass("back2");
                // $('._1332').removeClass("back4");
                // $('._1332').removeClass("back3");
                // $('._1332').removeClass("back6");
                // $('._1332').removeClass("back7");
            }
    );

    $('.bar-animated-6').hover(
        function() {
                $( ".text-bar-6" ).toggleClass("animation6");
                $('.text-bar-animated').addClass( "position" );
                $('.text-bar-6').toggleClass( "show-element fade-in" );
                $('.fill-gap-gray').toggleClass("transition");
                $( ".fill-gap-gray .internal-text" ).toggleClass("hide-element");
                $('.bar-animated-7').toggleClass("changegray");

                //Add classes
                $('.text-bar-1').addClass( "hide-element" );
                $('.text-bar-3').addClass( "hide-element" );
                $('.text-bar-4').addClass( "hide-element" );
                $('.text-bar-5').addClass( "hide-element" );
                $('.text-bar-2').addClass( "hide-element" );
                $('.text-bar-7').addClass( "hide-element" );

                //Remove classes
                $('.text-bar-1').removeClass( "animation1" );
                $('.text-bar-2').removeClass( "animation2" );
                $('.text-bar-3').removeClass( "animation3" );
                $('.text-bar-4').removeClass( "animation4" );
                $('.text-bar-5').removeClass( "animation5" );
                $('.text-bar-7').removeClass( "animation7" );

                
                //Remove classes
                $('.text-bar-1').removeClass( "show-element fade-in");
                $('.text-bar-3').removeClass( "show-element fade-in");
                $('.text-bar-4').removeClass( "show-element fade-in");
                $('.text-bar-5').removeClass( "show-element fade-in");
                $('.text-bar-2').removeClass( "show-element fade-in");
                $('.text-bar-7').removeClass( "show-element fade-in");

                // //Background
                // $('._1332').addClass("back6");
            
                // //Remove other background classes
                // $('._1332').removeClass("back1");
                // $('._1332').removeClass("back2");
                // $('._1332').removeClass("back4");
                // $('._1332').removeClass("back3");
                // $('._1332').removeClass("back5");
                // $('._1332').removeClass("back7");

            }
    );

    $('.bar-animated-7').hover(
        function() {
                $( ".text-bar-7" ).toggleClass("animation7");
                $('.text-bar-animated').addClass( "position" );
                $('.text-bar-7').toggleClass( "show-element fade-in" );
                $('.fill-gap-green').toggleClass("transition");
                $( ".fill-gap-green .internal-text" ).toggleClass("hide-element");

                //Add classes
                $('.text-bar-1').addClass( "hide-element" );
                $('.text-bar-3').addClass( "hide-element" );
                $('.text-bar-4').addClass( "hide-element" );
                $('.text-bar-5').addClass( "hide-element" );
                $('.text-bar-6').addClass( "hide-element" );
                $('.text-bar-2').addClass( "hide-element" );

                //Remove classes
                $('.text-bar-1').removeClass( "animation1" );
                $('.text-bar-2').removeClass( "animation2" );
                $('.text-bar-3').removeClass( "animation3" );
                $('.text-bar-4').removeClass( "animation4" );
                $('.text-bar-5').removeClass( "animation5" );
                $('.text-bar-6').removeClass( "animation6" );

                
                //Remove classes
                $('.text-bar-1').removeClass( "show-element fade-in");
                $('.text-bar-3').removeClass( "show-element fade-in");
                $('.text-bar-4').removeClass( "show-element fade-in");
                $('.text-bar-5').removeClass( "show-element fade-in");
                $('.text-bar-6').removeClass( "show-element fade-in");
                $('.text-bar-2').removeClass( "show-element fade-in");

                // //Background
                // $('._1332').addClass("back7");

                // //Remove other background classes
                // $('._1332').removeClass("back1");
                // $('._1332').removeClass("back2");
                // $('._1332').removeClass("back4");
                // $('._1332').removeClass("back3");
                // $('._1332').removeClass("back5");
                // $('._1332').removeClass("back6");


            }
    );
    
});