'use strict';



function render(){
  console.log('render result');
}



function getResponse(numOfDog){
  console.log('get response from API');
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDog}`)
    .then(response => response.json())
    .then(responseJson=> console.log(responseJson))
    .catch(error => alert('Doggies are sleeping, try again later')); 
}

function watchForm(){
  console.log('watchForm ran');
  $('form').on('submit',function(event){
    event.preventDefault();
    
    let numOfDog = $('#number-of-dogs').val();
    
    getResponse(numOfDog);
  });
}

function displayImages(){
  console.log('display images querried');
}



function dogImageAppHandle(){
  
  
  watchForm();
  //render();
}

$(dogImageAppHandle);