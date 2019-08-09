class Comment < ApplicationRecord

  validates :body, :commentable_id, presence: true

  belongs_to :parent_post,
  class_name: :Post,
  foreign_key: :commentable_id

  #not supporting comment threads yet

  # belongs_to :parent_comment, -> { where self.comment_thread == false},
  # class_name: :Comment,
  # foreign_key: :commentable_id

end

