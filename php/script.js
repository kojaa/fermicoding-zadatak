setInterval(function() {
    // Ovo sam isto uradio racunajuci da bi imao neko input polje iz kog dobija informacije, opet bih napomenuo da nisam radio validaciju jer to zadatak ne zahteva.
    $.get('getData.php?cityId=3194360&units=metric', function(response){
        $("#response").html(response);
    
        $("#refreshed").slideDown(function() {
            $("#refreshed").html("Weather is up to date.");
            setTimeout(function() {
                $("#refreshed").slideUp();
            }, 3000);
        });
    });
}, 10000);