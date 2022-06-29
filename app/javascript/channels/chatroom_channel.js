import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log('Connected')
  },

  disconnected() {
    console.log('Disconnected')
  },

  received(data) {
    console.log('Received', data)
    $('#message-container').append(data['body'])
  }
});
