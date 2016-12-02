class AddArrayTrueToFields < ActiveRecord::Migration[5.0]
  def change
    enable_extension 'hstore'
    remove_column :legislators, :authored
    remove_column :legislators, :sponsored
    remove_column :legislators, :committees
    add_column :legislators, :authored, :hstore, null: false, array: true
    add_column :legislators, :sponsored, :hstore, null: false, array: true
    add_column :legislators, :committees, :hstore, null: false, array: true
  end
end
