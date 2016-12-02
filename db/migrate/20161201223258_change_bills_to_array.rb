class ChangeBillsToArray < ActiveRecord::Migration[5.0]
  def up
    remove_column :legislators, :bills
  end

  def down
    add_column :legislators, :bills, :text, array: true, default: []
  end
end
