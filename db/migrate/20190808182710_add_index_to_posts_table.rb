class AddIndexToPostsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :poster_id
  end
end
