var nu;
var currentIndex =0;

$( function() {
  $('#getJSONajax' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          nu = data;

          console.log( data );
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button

  $('#next' ).click( function(){
    currentIndex++;
    if (currentIndex >= nu.students.length ) {
        currentIndex = 0;
      }
      displayStudent ();
  });

  $('#previous' ).click( function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = nu.students.length - 1;
        }
    displayStudent ();
    console.log('button clicked');

  });
   var displayStudent = function () {
    $('#outputDiv').empty();

    var nameOut = nu.students[currentIndex].first_name + ' ' + nu.students[currentIndex].last_name;
    var infoOut = nu.students[currentIndex].city + ', ' + nu.students[currentIndex].shoutout;

    var adjustedIndex = currentIndex + 1;
    var counterOut = adjustedIndex + '/' + nu.students.length;

    var newHeader = document.createElement('h2');
    newHeader.textContent=nameOut;
    var newParagraph = document.createElement('p');
    newParagraph.textContent = infoOut;
    var newParagraph1 = document.createElement('p');
    newParagraph1.textContent = counterOut;


        $('#outputDiv').append( newHeader);
        $('#outputDiv').append( newParagraph);
        $('#outputDiv').append( newParagraph1);
  };
  });
