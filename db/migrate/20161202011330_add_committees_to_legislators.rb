class AddCommitteesToLegislators < ActiveRecord::Migration[5.0]
  def change
    add_column :legislators, :committees, :text, array: true, default: []
  end
end
