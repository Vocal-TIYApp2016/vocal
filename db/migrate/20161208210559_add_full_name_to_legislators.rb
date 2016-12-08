class AddFullNameToLegislators < ActiveRecord::Migration[5.0]
  def change
    add_column :legislators, :full_name, :string, null: false, default: ""
  end
end
