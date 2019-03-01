'use strict';


function generateDisplayElement(responseJson){
  console.log('array length',responseJson.message.length);
  let htmlArray = [];
  for (let i=0;i<responseJson.message.length;i++){
    htmlArray.push(`<img src = ${responseJson.message[i]}>`);
  }
  return htmlArray.join();
}



function render(responseJson){
  console.log('render result');
  let elementString = generateDisplayElement(responseJson);
  $('.dog-img-area').html(elementString);
}



function getResponse(numOfDog){
  console.log('get response from API');
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDog}`)
    .then(response => response.json())
    .then(responseJson=> render(responseJson))
    
    .catch(error => alert('Doggies are sleeping, try again later')); 
}

function watchForm(){
  console.log('watchForm ran');
  $('form').on('submit',function(event){
    event.preventDefault();
    
    let numOfDog = $('#number-of-dogs').val();
    if(numOfDog >50) alert('please enter a number between 3~50');
    
    $('#number-of-dogs').val('');
    getResponse(numOfDog);
  });
}

function displayImages(){
  console.log('display images querried');
}



function dogImageAppHandle(){
  
  
  watchForm();
  
}

$(dogImageAppHandle);