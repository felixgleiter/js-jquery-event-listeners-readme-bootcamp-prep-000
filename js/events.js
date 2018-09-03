function getIt() {
  $('p').on('click'
  , function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load'
  , function(){
    $('img').class = 'tasty';
  });
}

function pressIt() {
  $('form input:first-child').on('keydown'
  , function(){
    if ($('form input:first-child').val === "G" || $('form input:first-child').val === "g") {
      alert('You pressed G!');
    }
  });
}

function submitIt() {
  $('form').on('submit'
  , function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){

// call functions here

});
