class AddYearToLegislators < ActiveRecord::Migration[5.0]
  def change
    add_column :legislators, :year, :integer, null: false, default: 0
  end
end
