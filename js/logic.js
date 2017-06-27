//Variables - topics

var topics = {
	"taylor swift"
}


//Giphy API pulled from exercise 04
var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });