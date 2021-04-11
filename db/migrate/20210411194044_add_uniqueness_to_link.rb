class AddUniquenessToLink < ActiveRecord::Migration[6.1]
  def change
    add_index :links, :original_url, :unique => true
    add_index :links, :shortened_url, :unique => true
  end
end
