'use strict';


function generateDisplayElement(responseJson){
  console.log('array length',responseJson.message.length);
  let htmlArray = [];
  for (let i=0;i<responseJson.message.length;i++){
    htmlArray.push(`
    <div class = 'col-3'>
      <div class='box'>
      <a target = "_blank" href=${responseJson.message[i]}>
      <img src = ${responseJson.message[i]}>
      </a>
     </div>
    </div>
    `);
  }
  console.log(htmlArray);
  return htmlArray.join('');
}



function render(responseJson){
  console.log('render result');
  let elementString = generateDisplayElement(responseJson);
  $('.dog-img-area').html(elementString);
}


function getResponse(numOfDog,breed){
  console.log('get response from API');
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numOfDog}`)
    
    
    .then(response => {
      if (response.ok){
        return response.json();
        
      }
      throw ('response.statusText');
    })
    
    //.then(response => response.json())
    
    .then(responseJson=> render(responseJson))
    
    .catch(err => {
      $('.dog-img-area').text(`Something went wrong: ${err.message}`);
    });
} 

function watchForm(){
  console.log('watchForm ran');
  $('form').on('submit',function(event){
    event.preventDefault();
    
    let numOfDog = $('#number-of-dogs').val();
    if(numOfDog >50) alert('please enter a number between 1~50');
    $('#number-of-dogs').val('');
    let breed = $('#breed-of-dogs').val();
    console.log(breed);
    getResponse(numOfDog,breed);
  });
}

function displayImages(){
  console.log('display images querried');
}



function dogImageAppHandle(){
  
  
  watchForm();
  
}

$(dogImageAppHandle);