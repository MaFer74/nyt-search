function searchNewsInNYTimes() {
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4qIrG8IwpOAITA91lclpYC8Zla2dpj2k";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Printing the entire object to console
      console.log(data);
})
}
searchNewsInNYTimes();