class ChangeLegislatorsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :legislators, :title, :string
  end
end
