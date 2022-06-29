class Message < ApplicationRecord
  belongs_to :user
  validate :body, presence: true

  scope :scope_display, -> { order(:created_at).last(20) }
end
