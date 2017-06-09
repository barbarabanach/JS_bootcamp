var numbers = document.querySelector('button');

function countDown(i){

    setTimeout(function(){
      if (i >= 0){
        numbers.innerHTML = i;
        i--;
        countDown(i);
      }
  }, 1000);
  
}

countDown(10);