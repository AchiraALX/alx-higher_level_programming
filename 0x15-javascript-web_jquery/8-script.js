// Fetch movie titles from
// https://swapi-api.alx-tools.com/api/films/?format=json
// and display it in UL#list_movies

const $ = window.$;
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  for (const movie of data.results) {
    $('UL#list_movies').append('<li>' + movie.title + '</li>');
  }
}
);
