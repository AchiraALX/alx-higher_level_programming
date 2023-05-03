// Add <li>Item</li> to UL.my_list when DIV#add_item is clicked
// Remove last element in UL.my_list when DIV#remove_item is clicked
// Clear UL.my_list when DIV#clear_list is clicked

const $ = window.$;
$(document).ready(function () {
  $('DIV#add_item').click(function () {
    $('UL.my_list').append('<li>Item</li>');
  });
  $('DIV#remove_item').click(function () {
    $('UL.my_list li:last-child').remove();
  });
  $('DIV#clear_list').click(function () {
    $('UL.my_list').empty();
  });
}
);
