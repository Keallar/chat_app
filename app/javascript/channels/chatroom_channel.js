import consumer from "./consumer"

const chatroomChannel = consumer.subscriptions.create({ channel: "ChatroomChannel" }, {
  connected() {
    console.log('Connected', this)
  },

  disconnected() {
    console.log('Disconnected')
  },

  received(data) {
    console.log('Received', data)
    $('#message-container').append(data['body'])
  }
});
