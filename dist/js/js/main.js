// $(document).on('click', function () { $('.collapse').collapse('hide'); })

var formContainer = $('#form-container');

bindFormClick();
//Opening the form
function bindFormClick() {
  $(formContainer).on('click', function (e) {
    e.preventDefault();
    toggleForm();
    //Ensure container doesn't toggleForm when open
    $(this).off();
  });
}

//Closing the form
$('#form-close, .form-overlay').click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

function toggleForm() {
  $(formContainer).toggleClass('expand');
  $(formContainer).children().toggleClass('expand');
  $('body').toggleClass('show-form-overlay');
  $('.form-submitted').removeClass('form-submitted');
}

// email validation
$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Button Clicked')

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (name.length >= 2) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Name is invalid</div>')
    }

    if (email.length >= 4 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is invalid</div>')
    }

    if (message.length >= 5) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is invalid</div>')
    }
  })
})
