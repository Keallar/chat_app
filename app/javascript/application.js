// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "./src/jquery"
import "semantic-ui"
import 'channels'

$(document).on('DOMContentLoaded', function(){
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade');
  });
});
