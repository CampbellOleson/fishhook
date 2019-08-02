class ChangeAddIndividualIndexRemoveDualIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :frienships, name: "index_friendships_on_requester_id_and_requested_id"
    add_index :friendships, :requester_id
    add_index :friendships, :requested_id
  end
end
