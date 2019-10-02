class Comment < ApplicationRecord

  validates :body, :commentable_id, presence: true

  belongs_to :parent_post,
  class_name: :Post,
  foreign_key: :commentable_id

end

