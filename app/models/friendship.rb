class Friendship < ApplicationRecord
  validates :requester_id, :requested_id, presence: true
  validates :pending, inclusion: { in: [true, false] }, allow_nil: true
  validate :unique_friendship, on: create

  belongs_to :requester,
  class_name: :User,
  foreign_key: :requester_id

  belongs_to :requested,
  class_name: :User,
  foreign_key: :requested_id

  def unique_friendship
    if !Friendship.where(requester_id: requester_id).where(requested_id: requested_id).empty?
      raise "Friendship or friend request already exists"
    elsif !Friendship.where(requester_id: requested_id).where(requested_id: requester_id).empty?
      raise "Friendship or friend request already exists"
    end
  end

end
