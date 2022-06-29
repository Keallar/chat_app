// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "./src/jquery"
import "semantic-ui"
import 'channels'

let scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $("#messages").scrollTop($('#messages')[0].scrollHeight);
  }
}

let submit_message = function () {
  $('#message_body').on('keydown', function (e) {
    if (e.keyCode == 13) {
      $('button').click();
      e.target.value = ""
    }
  });
}

$(document).on('turbo:load', function(){
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade');
  });

  scroll_bottom();

  submit_message();
});
