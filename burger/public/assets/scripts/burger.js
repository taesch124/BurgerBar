$('document').ready(() => { 

    $('.eat-it').on('click', function()  {
      let id = parseInt($(this).data('id'));
      $.ajax({
          url: '/burgers/' + id + '?devoured=true',
          type: 'PUT',
          data: id
        }).then((data) => {
          console.log('done');
          location.reload();
        });
    });

    $('.delete-it').on('click', function() {
      let id = parseInt($(this).data('id'));
      console.log(id);
      $.ajax({
        url: '/burgers/' + id,
        type: 'DELETE'
      }).then((data) => {
        console.log('done');
        location.reload();
      })
    });

    $('#new-burger').on('submit', function() {
      event.preventDefault();

      let burger = {
        name: $('#burger-name').val().trim()
      };

      if(!validateForm()) {
        console.log('No name.');
        return;
      }

      $.ajax({
          url: '/burgers',
          type: 'POST',
          data: burger
        }).then((data) => {
          location.reload();
        });
    });

  });

  function validateForm() {
    let validated = true;
    $('.validation-text').addClass('hidden');

    if(!$('#burger-name').val().trim()) {
      $('#name-validation').removeClass('hidden');
      $('#name-validation').text('Burger must have a name');
      validated = false;
    }

    return validated;
  }