(function(){

    var button = document.querySelector("button");
    var elementHide = document.querySelector(".content");

    console.dir(elementHide);

    button.addEventListener("click", function(e){

        if(elementHide.classList.toggle("hidden") ){
            button.textContent = "Show content";
        } else{
            button.textContent = "Hide content";
        }

    });

})();





