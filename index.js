var flippCard = document.querySelectorAll('.card');

flippCard.forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('rotate');
  });
});