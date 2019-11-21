class AddAwsUrlUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_photo_url, :string
    add_column :users, :cover_photo_url, :string
  end
end
