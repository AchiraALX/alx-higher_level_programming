// Fetch character name from
// https://swapi-api.alx-tools.com/api/people/5/?format=json
// and display it in DIV#character

const $ = window.$;
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
  $('DIV#character').text(data.name);
}
);
