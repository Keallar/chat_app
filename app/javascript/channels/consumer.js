// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

import { createConsumer } from "@rails/actioncable"

(function() {
    window.App || (window.App = {});
    window.App.cable = ActionCable.createConsumer();
}).call(this)

export default createConsumer()