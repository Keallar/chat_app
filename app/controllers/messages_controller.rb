class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
      redirect_to root_path
    else
      flash[:error] = "Something went wrong"
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

end
