class ChangeArraysToHstores < ActiveRecord::Migration[5.0]
  def change
    enable_extension 'hstore'
    remove_column :legislators, :authored
    remove_column :legislators, :sponsored
    remove_column :legislators, :committees
    add_column :legislators, :authored, :hstore, null: false
    add_column :legislators, :sponsored, :hstore, null: false
    add_column :legislators, :committees, :hstore, null: false
    add_index :legislators, :authored, using: :gist
    add_index :legislators, :sponsored, using: :gist
    add_index :legislators, :committees, using: :gist
  end
end
