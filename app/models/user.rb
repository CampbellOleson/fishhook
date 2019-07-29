class User < ApplicationRecord

  attr_reader :password
  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  after_initialize :ensure_session_token

  # associations coming soon
  # user has one profile photo
  # user has one cover photo
  # user has many posts 
  # user has many comments ?
  # user has many friends through friendships

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

end
