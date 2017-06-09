
(function(){

    if( typeof String.prototype.repeatByBasia == "function") {
        console.log("Funkcja repeat istnieje")
    } else {
        console.log("Nie ma takiej funkcji");

        String.prototype.repeatByBasia = function(ilerazy) {
            console.log("Value of: ", this.valueOf())

            var napisDoPowtorzenia = this.valueOf();
            var napisDoZwrocenia = "";

            for(var i = 0; i < ilerazy; i++){
                napisDoZwrocenia += napisDoPowtorzenia;
            }

            return napisDoZwrocenia;
        }

        console.log("hej".repeatByBasia(3));
    }

})();