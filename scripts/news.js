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
        
        for (var i = 1; i <= out.totalResults; i++) {
            var myCol = $('<div class="col-md-4"></div>');
            var myPanel = $('<div class="card card-outline-info" id="Card' + i + '">' +
                '<a href="' + out.articles[i - 1].url + '" target="_blank">'+
                '<img class="card-img-top" style="height:200px; width=100%" src=' + out.articles[i - 1].urlToImage +
                '></a>' +
                '<div class="card-block">'+
                '<h4 class="card-title">' + out.articles[i - 1].title + '</h4>' +
                '<p class="card-text">' + out.articles[i - 1].description +
                '<span class="pull-right"><br/>' + out.articles[i - 1].publishedAt + '</span>' +
                '</p>' +
                '</div></div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');

            console.log(out.articles[i-1]);
        }


    });

   

  
    
    
    $('.close').on('click', function(e){
        e.stopPropagation();  
        var $target = $(this).parents('.col-sm-3');
        $target.hide('slow', function(){ $target.remove(); });
    });






});




