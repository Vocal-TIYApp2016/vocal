class RemoveBillsForRoles < ActiveRecord::Migration[5.0]
  def change
    add_column :legislators, :authored, :text, array: true, default: []
    add_column :legislators, :sponsored, :text, array: true, default: []
  end
end
