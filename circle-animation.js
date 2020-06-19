jQuery(document).ready(function() {

   //Hover Circle 1
   $("#circle-internal-one").hover(function(){
    //Add classes
    $('#circle-internal-one').addClass( "orange" );
    $('#circle-external-one_1_').addClass( "effectCircle1" );
    
    //Remove classes
    $('#circle-internal-two').removeClass( "red" );
    $('#circle-external-two').removeClass( "effectCircle2" );

    $('#circle-internal-three').removeClass( "reddish" );
    $('#circle-external-three').removeClass( "effectCircle3" );

    $('#circle-internal-four').removeClass( "black" );
    $('#circle-external-four').removeClass( "effectCircle4" );

    $('#circle-internal-five').removeClass( "purple" );
    $('#circle-external-five').removeClass( "effectCircle5" );
  });

  //Hover Circle 2
  $("#circle-internal-two").hover(function(){
        //Add classes
        $('#circle-internal-two').addClass( "red" );
        $('#circle-external-two').addClass( "effectCircle2" );

        //Remove classes
        $('#circle-internal-one').removeClass( "orange" );
        $('#circle-external-one_1_').removeClass( "effectCircle1" );

        $('#circle-internal-three').removeClass( "reddish" );
        $('#circle-external-three').removeClass( "effectCircle3" );
        
        $('#circle-internal-four').removeClass( "black" );
        $('#circle-external-four').removeClass( "effectCircle4" );

        $('#circle-internal-five').removeClass( "purple" );
        $('#circle-external-five').removeClass( "effectCircle5" );
  });

  //Hover Circle 3
  $("#circle-internal-three").hover(function(){

        //Add classes
        $('#circle-internal-three').addClass( "reddish" );
        $('#circle-external-three').addClass( "effectCircle3" );

        //Remove classes
        $('#circle-internal-one').removeClass( "orange" );
        $('#circle-external-one_1_').removeClass( "effectCircle1" );

        $('#circle-internal-two').removeClass( "red" );
        $('#circle-external-two').removeClass( "effectCircle2" );

        $('#circle-internal-four').removeClass( "black" );
        $('#circle-external-four').removeClass( "effectCircle4" );

        $('#circle-internal-five').removeClass( "purple" );
        $('#circle-external-five').removeClass( "effectCircle5" );

  });

//Hover Circle 4
$("#circle-internal-four").hover(function(){

    //Add classes
    $('#circle-internal-four').addClass( "black" );
    $('#circle-external-four').addClass( "effectCircle4" );

    //Remove classes
    $('#circle-internal-one').removeClass( "orange" );
    $('#circle-external-one_1_').removeClass( "effectCircle1" );

    $('#circle-internal-two').removeClass( "red" );
    $('#circle-external-two').removeClass( "effectCircle2" );

    $('#circle-internal-three').removeClass( "reddish" );
    $('#circle-external-three').removeClass( "effectCircle3" );

    $('#circle-internal-five').removeClass( "purple" );
    $('#circle-external-five').removeClass( "effectCircle5" );
    

});

//Hover Circle 5
$("#circle-internal-five").hover(function(){

    //Add classes
    $('#circle-internal-five').addClass( "purple" );
    $('#circle-external-five').addClass( "effectCircle5" );

    //Remove classes
    $('#circle-internal-one').removeClass( "orange" );
    $('#circle-external-one_1_').removeClass( "effectCircle1" );

    $('#circle-internal-two').removeClass( "red" );
    $('#circle-external-two').removeClass( "effectCircle2" );

    $('#circle-internal-three').removeClass( "reddish" );
    $('#circle-external-three').removeClass( "effectCircle3" );

    $('#circle-internal-four').removeClass( "black" );
    $('#circle-external-four').removeClass( "effectCircle4" );

});
    
});