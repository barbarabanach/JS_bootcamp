(function($) {

    $(document).ready(function() {
        console.log("Hello World");

        // $.get( "http://code.eduweb.pl/bootcamp/users/", function( data ) {
        //     var dane = JSON.parse(data);

        //     $( ".result" ).html( data );
        // }, function() {
        //     console.log('Blad!');
        // }, {
        //     "application" : "json"
        // });


        function wyluskajOsobe(osoba) {
            // name, username, email, phone
            var osobaLi = $("<li>" + osoba.name + ", " + osoba.username + ", " + osoba.email + ", "+ osoba.phone + "</li>");
            console.log(osobaLi);
            return osobaLi;
        }



        $.ajax({
            url: "http://code.eduweb.pl/bootcamp/users/",
            headers: { 
                Accept : "application/json"
            },
            success : function(response) {
                console.log(response);
                var lista = $("<ul></ul>");
                response.forEach(function(osoba) {
                    console.log(osoba);
                    lista.append( wyluskajOsobe(osoba) );
                })

                console.log(lista);
                $(".result").append(lista);
            }
        })
    });

})(jQuery);