// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "./src/jquery"
import "semantic-ui"

$(document).ready(function(){
  $('.ui.dropdown').dropdown();
});

// $(document).ready(function(){
//   $('.ui.accordion').accordion()});