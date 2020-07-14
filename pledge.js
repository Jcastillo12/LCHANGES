jQuery(document).ready(function() {

    $( "#circlegraduation" ).hover(function() {
        $( "#graduation" ).toggleClass("zoom-graduation");
        $( "#learning-text" ).toggleClass("show-text");
    });

    $( "#circletree" ).hover(function() {
        $( "#tree" ).toggleClass("zoom-tree");
        $( "#environment-text" ).toggleClass("show-text");
    });

    $( "#circlekey" ).hover(function() {
        $( "#key" ).toggleClass("zoom-key");
        $( "#access-text" ).toggleClass("show-text");
    });

    $( "#circlebell" ).hover(function() {
        $( "#bell" ).toggleClass("zoom-bell");
        $( "#disaster-text" ).toggleClass("show-text");
    });





});

