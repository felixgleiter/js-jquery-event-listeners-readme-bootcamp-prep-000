function getIt() {
  $('p').on('click'
  , function(){
    alert("Hey!");
    return;
  });
  return;
}

function frameIt() {
  $('img').on('load'
  , function(){
    $('img').class = 'tasty';
    return;
  });
  return;
}

function pressIt() {
  $('form input:first-child').on('keydown'
  , function(){
    if ($('form input:first-child').val === "G" || $('form input:first-child').val === "g") {
      alert('You pressed G!');
      return;
    }
  });
  return;
}

$(document).ready(function(){

// call functions here

});
