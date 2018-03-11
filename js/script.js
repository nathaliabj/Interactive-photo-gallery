
// Function for the search box

function myFunction() {
    // Variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('gallery');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if ($(a).data("title").toUpperCase().indexOf(filter) > -1 ) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// loop to fade the gallery when the

$( "#gallery li" ).each(function( index ) {
  $(this).fadeTo(0, 0).delay(150 * index).fadeTo(400, 1, 'swing');
});
