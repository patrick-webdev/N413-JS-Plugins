var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


// $grid.on('click', '.grid-item', function(){
//   //Change the size of an item via class
//   $(this).toggleClass('grid-item--width4 grid-item--height4');
//   //Trigger layout
//   $grid.masonry();
// });

$('.append-btn').on('click', function(){
  var elems = [getItemElement(), getItemElement(), getItemElement()];
  //Make jQuery object
  var $elems = $( elems );
  $grid.append( $elems ).masonry( 'appended', $elems );

});

//Create a div with the grid-item class
function getItemElement(){
  var elem = document.createElement('div');
  elem.className = 'grid-item';
  return elem;
}

$grid.on( 'click', '.grid-item', function( event ) {
  //Remove item
  $grid.masonry( 'remove', event.currentTarget ).masonry();
});
