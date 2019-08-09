class Post < ApplicationRecord
  validates :body, :poster_id, presence:true

  belongs_to :poster,
  class_name: :User,
  foreign_key: :poster_id

  has_many :comments,
  primary_key: :id,
  foreign_key: :commentable_id,
  dependent: :destroy

  def self.feed(user_id)
    user = User.find(user_id)
    posts = []
    friends = user.friends
    friends.each do |friend|
      friend.posts.each do |post|
        posts << post
      end
    end
    user.posts.each do |post|
      posts << post
    end
    return posts
  end

end