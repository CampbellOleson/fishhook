class User < ApplicationRecord

  attr_reader :password
  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  after_initialize :ensure_session_token

  has_many :requester_friendships,
  class_name: :Friendship,
  foreign_key: :requester_id

  has_many :requested_friendships,
  class_name: :Friendship,
  foreign_key: :requested_id

  def friend_ids
    return requested_friend_ids.concat(requester_friend_ids)
  end

  def pending_request_ids
    ids = []
    pending_requests.each do |req|
      ids << req.id
    end
  return ids
  end

  def outgoing_request_ids
    ids = []
      outgoing_requests.each do |req|
        ids << req.id
      end
    return ids
  end

  # def pending_friend_ids
  #   ids = []
  #     pending_requests.each do |req|
  #       ids << req.requester_id
  #     end
  #   return ids
  # end

  # def outgoing_friend_ids
  #   ids = []
  #     outgoing_requests.each do |req|
  #       ids << req.requested_id
  #     end
  #   return ids
  # end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def requester_friend_ids
    requesters = requester_friendships.where(pending: false).to_a
    ids = []
    requesters.each do |friendship|
      ids << friendship.requested_id
    end
    return ids
  end

  def requested_friend_ids
    requesteds = requested_friendships.where(pending: false).to_a
    ids = []
    requesteds.each do |friendship|
      ids << friendship.requester_id
    end
    return ids
  end

  def pending_requests
    return requested_friendships.where(pending: true).to_a
  end

  def outgoing_requests
    return requester_friendships.where(pending: true).to_a
  end

end
