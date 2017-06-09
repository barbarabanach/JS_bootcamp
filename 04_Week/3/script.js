(function($) {


    $(document).ready(function() {

        var button = $("#button");
        var lista = $("#list");

        button.on("click", function() {

            var imie = $("#imie").val();
            var pozycjaListy = $("<li>" + imie + "</li>");


            lista.append(pozycjaListy);
 
        })

    });

})(jQuery);
