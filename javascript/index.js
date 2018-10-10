var imgHover = document.getElementById('image1');
//écouteur qui change la bordure de l'image au survol en entrée
imgHover.addEventListener('mouseover', function( event ) {
  //change la bordure de l'image en entrant
  document.getElementById('image1').style.borderWidth = "3px";
  document.getElementById('image1').style.borderStyle = "solid";
  document.getElementById('image1').style.borderColor = "red";
});
//écouteur qui change la bordure de l'image au survol en sortant
imgHover.addEventListener('mouseout', function( event ) {
  //change la bordure de l'image en sortant
  document.getElementById('image1').style.border = "0 hidden white";
});
