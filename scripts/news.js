$(document).ready(function () {

    var out;

    $('#submit').click( function(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=11435bb600564433b2771bafd5527899';

        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, false);
        xhttp.send();
        response = xhttp;
        out = JSON.parse(response.responseText);
        console.log(out);


        for (var i = 1; i <= 5; i++) {
            var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
            var myPanel = $('<div class="card card-outline-info" id="' + i + 'Panel"><div class="card-block"><div class="card-title"><span>Card #' + i + '</span><button type="button" class="close" data-target="#' + i + 'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>Some text in ' + i + ' </p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');
        }


    });

   

  
    
    
    $('.close').on('click', function(e){
        e.stopPropagation();  
        var $target = $(this).parents('.col-sm-3');
        $target.hide('slow', function(){ $target.remove(); });
    });






});




