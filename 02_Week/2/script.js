(function(){

    var form = document.querySelector("#myForm");
    var fields = document.querySelectorAll("[data-error]");


function isNotEmpty(field){

    return field.value !== "";
}

function isAtLeast(field, min){

    return field.value.length >= min;
}

function isEmail(field){

    return field.value.indexOf("@") !== -1;
}

function isNumber(field){

    var numberValue = Number(field.value);
    return !isNaN(numberValue) && numberValue !== 0;
}

function displayErrors(errors){

    var ul = document.querySelector("ul.errors");

    if(!ul) {
        ul = document.createElement("li");
        ul.classList.add("error");
        console.log(ul);
    }

    ul.innerHTML = "";

    errors.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);

    })

    form.parentNode.insertBefore(ul, form);
}


form.addEventListener("submit", function(e){

    e.preventDefault();

    var errors = [];


    for(var i = 0; i < fields.length; i++) {

        var field = fields[i];
        var isValid = false;

        if(field.type === "text") {
            isValid = isNotEmpty(field);
            console.log("Type to text, isValid: ", isValid);

        } else if(field.type === "email") {
            isValid = isEmail(field);
            console.log("Type to email, isValid: ", isValid);

        } else if(field.type === "number") {
            isValid = isNumber(field);
            console.log("Type to number, isValid: ", isValid);

        } else if(field.type === "textarea") {
            isValid = isAtLeast(field, 1);
            console.log("Textarea, isValid: ", isValid);
        }


        if(!isValid){
            field.classList.add("error");
            errors.push(field.dataset.error);
        } else{
            field.classList.remove("error");
        }

}

    if(errors.length) {
        displayErrors(errors);
    } else {
        form.submit();
    }

}, false);

})();

