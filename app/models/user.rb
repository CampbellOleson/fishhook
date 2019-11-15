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

  has_many :posts,
  foreign_key: :poster_id

  def self.get_suggestions(search_params)
    search_text = search_params.titleize + '%'
    suggested_users = User.where("fname LIKE ?", search_text)
    return suggested_users
  end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def post_ids
    ids = []
    self.posts.each do |post|
      ids << post.id
    end
    return ids
  end

  def friends
    f = []
    friend_ids.each do |id|
      f << User.find(id)
    end
    return f
  end

  def requesters
    r = []
    requester_ids.each do |id|
      r << User.find(id)
    end
    return r
  end

  def friend_ids
    return requested_friend_ids.concat(requester_friend_ids)
  end

  def requester_ids
    ids = []
      friend_requests.each do |req|
        ids << req.requester_id
      end
    return ids
  end

  def requested_user_ids
    ids = []
      outgoing_requests.each do |req|
        ids << req.requested_id
      end
    return ids
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

  def friend_requests
    return requested_friendships.where(pending: true).to_a
  end

  def outgoing_requests
    return requester_friendships.where(pending: true).to_a
  end

end
