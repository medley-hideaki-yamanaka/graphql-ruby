class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, null: false
      t.date :birthday
      t.timestamp :add

      t.timestamps
    end
  end
end
