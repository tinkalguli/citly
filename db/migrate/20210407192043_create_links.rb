class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :original_url, null: false
      t.string :shortened_url, null: false
      t.string :slug, null: false
      t.boolean :is_pinned, :default => false
      t.integer :clicked, :default => 0

      t.timestamps
    end
  end
end
