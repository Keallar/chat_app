import consumer from "channels/consumer"

let scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $("#messages").scrollTop($('#messages')[0].scrollHeight);
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log('Connected')
  },

  disconnected() {
    console.log('Disconnected')
  },

  received(data) {
    console.log('Received', data);
    $('#message-container').append(data['body']);
    scroll_bottom();
  }
});
