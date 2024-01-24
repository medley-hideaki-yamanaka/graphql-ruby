class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :author, foreign_key: true
      t.string :title, null: false
      t.string :description, limit: 500
      t.text :content
      t.date :date

      t.timestamps
    end
  end
end
