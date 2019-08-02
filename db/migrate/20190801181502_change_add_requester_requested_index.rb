class ChangeAddRequesterRequestedIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :friendships, [:requester_id, :requested_id], unique: true
  end
end
