class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_channel"
  end

  def unsubscribed
    stop_all_streams
  end

  def receive(data)
    puts data['message']
  end
end
