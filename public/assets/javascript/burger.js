$(function () {
  $('.eat').on('click', function (event) {
    event.preventDefault();
    var id = $(this).data('id');

    $.ajax('/burgers/' + id, {
      type: 'PUT',
      data: true,
    }).then(function () {
      location.reload();
    });
  });

  $('.submit').on('click', function (event) {
    event.preventDefault();
    var name = $('#burgerName').text();
    $.ajax('/api/burgers', {
      type: 'POST',
      data: addBurger,
    }).then(function () {
      location.reload();
    });
  });

  $('.delete').on('click', function (event) {
    event.preventDefault();
    var id = $(this).data('id');

    $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
    }).then(function () {
      location.reload();
    });
  });

  $('.reset').on('click', function (event) {
    event.preventDefault();

    $.ajax('/api/burgers', {
      type: 'DELETE',
      data: true,
    }).then(function () {
      location.reload();
    });

    $.ajax('/api/burgers', {
      type: 'POST',
    }).then(function () {
      location.reload();
    });
  });
});
