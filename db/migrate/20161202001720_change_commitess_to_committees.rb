class ChangeCommitessToCommittees < ActiveRecord::Migration[5.0]
  def up
    remove_column :legislators, :commitees
  end

  def down
    add_column :legislators, :committees, :text, array: true, default: []
  end
end
