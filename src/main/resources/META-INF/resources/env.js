$(document).ready(function() {
    $.ajax({
        url: "/env"
    }).then(function(data) {
        console.log(data);
       $('.environment-name').append(data);
       $( "#environment-name" ).html( "<strong>" + data + "</strong>" );
    });
});