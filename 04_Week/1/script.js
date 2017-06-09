(function($) {

    $(document).ready(function() {

        // testowanie selektorow
        $(".grid.grid-12").addClass('selectorTest');

        // wszystkie elementy <a>, których atrybut href zaczyna się
         // na “http”, znajdujące się w elemencie o klasie nav
        $("a[href^=http]").addClass('selectorTest');


        // wszystkie elementy <input>, których typ to radio lub 
        // checkbox oraz dodatkowo nie są aktualnie zaznaczone (checked)
        $("input[type=radio]:checked, input[type=checkbox]:checked").addClass('selectorTest');


        // wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci)
        //  oraz znajduje się w elemencie <div> z identyfikatorem text
        $("#text p:first").addClass('selectorTest');

        // wszystkie elementy z klasą pagination-item , 
        // które nie są elementem <span> 
        $(".pagination-item:not(span)").addClass('selectorTest');
    });

})(jQuery);