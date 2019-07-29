class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null:false
      t.string :lname, null:false
      t.string :email, null:false, uniq:true
      t.string :bio
      t.string :password_digest, null:false
      t.string :session_token, null:false, uniq:true
      t.timestamps
    end
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :email
    add_index :users, :session_token
  end
end
