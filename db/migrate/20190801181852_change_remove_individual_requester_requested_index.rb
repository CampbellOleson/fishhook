class ChangeRemoveIndividualRequesterRequestedIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :friendships, :requester_id
    remove_index :friendships, :requested_id
  end
end
