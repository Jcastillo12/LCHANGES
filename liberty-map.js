jQuery(document).ready(function() {

    var info = [
        {"lid":"LPanama","id":"Panama","country":"Panamá","fact1":"1 Mill.","fact2":"1.5 Mill.","fact3":"9000 Kms","fact4":"2.5 Mill"},
        {"lid":"LCostarica","id":"Costarica","country":"Costa Rica","fact1":"2 Mill.","fact2":"2 Mill.","fact3":"1000 Kms","fact4":"2.5 Mill"},
        {"lid":"LChile","id":"Chile","country":"Chile","fact1":"3 Mill.","fact2":"2.5 Mill.","fact3":"2000 Kms","fact4":"2.5 Mill"},
        {"lid":"LJamaica","id":"Jamaica","country":"Jamaica","fact1":"4 Mill.","fact2":"3 Mill.","fact3":"3000 Kms","fact4":"2.5 Mill"},
        {"lid":"LTrinidadTobago","id":"TrinidadTobago","country":"Caribbean","fact1":"5 Mill.","fact2":"1.5 Mill.","fact3":"4000 Kms","fact4":"2.5 Mill"},
        {"lid":"LPuertoRico","id":"PuertoRico","country":"Puerto Rico","fact1":"6 Mill.","fact2":"1 Mill.","fact3":"5000 Kms","fact4":"2.5 Mill"},
        {"lid":"LBahamas","country":"Bahamas","fact1":"6 Mill.","fact2":"0.5 Mill.","fact3":"6000 Kms","fact4":"2.5 Mill"}
    ];
    console.log(info[0].country);

    $('.st0').click(function() {
      //console.log($(this).attr('id'));
      var id = $(this).attr('id');
      $.each( info, function( i, val ) {
        if(id == val['id']){
          //console.log(val['country']);
          $('.info-box').fadeOut(300);
          $('#country').html(val['country']);
          $('#fact1').html(val['fact1']);
          $('#fact2').html(val['fact2']);
          $('#fact3').html(val['fact3']);
          $('#fact4').html(val['fact4']);
          $('.info-box').fadeIn(300);
        }

      });
    });
    $('.svg_label').click(function() {
      //console.log($(this).attr('id'));
      var id = $(this).attr('id');
      $.each( info, function( i, val ) {
        if(id == val['lid']){
          //console.log(val['country']);
          $('.info-box').fadeOut(300);
          $('#country').html(val['country']);
          $('#fact1').html(val['fact1']);
          $('#fact2').html(val['fact2']);
          $('#fact3').html(val['fact3']);
          $('#fact4').html(val['fact4']);
          $('.info-box').fadeIn(300);
        }

      });
    });

     
 });