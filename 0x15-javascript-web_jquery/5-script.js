// Add <li>Item</li> element to UL.list when a user clicks DIV#add_item

$('DIV#add_item').click(function () {
    $('UL.my_list').append('<li>Item</li>');
    }
);
