class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null:false
      t.integer :poster_id, null:false
      t.string :location_url 
      t.timestamps
    end
  end
end
