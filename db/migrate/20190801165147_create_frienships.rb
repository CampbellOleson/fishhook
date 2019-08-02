class CreateFrienships < ActiveRecord::Migration[5.2]
  def change
    create_table :frienships do |t|
      t.integer :requester_id, null:false
      t.integer :requested_id, null:false
      t.boolean :pending, null:false, default: true
      t.timestamps
    end
    add_index :frienships, :requested_id
    add_index :frienships, :requester_id
  end
end
