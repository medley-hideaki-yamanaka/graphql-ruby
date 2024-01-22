class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :author_id
      t.string :title, null: false
      t.string :description
      t.text :content
      t.date :date

      t.timestamps
    end
  end
end
