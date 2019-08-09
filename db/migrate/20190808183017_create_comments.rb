class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null:false
      t.boolean :comment_thread, null:false, default: false
      t.integer :commentable_id, null:false
      t.timestamps
    end
    add_index :comments, :commentable_id
  end
end
