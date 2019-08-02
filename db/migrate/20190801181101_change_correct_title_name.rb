class ChangeCorrectTitleName < ActiveRecord::Migration[5.2]
  def change
    rename_table :frienships, :friendships
  end
end
