class ChangeUserZipToAddress < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :zip_code, :string 
    rename_column :users, :zip_code, :address
  end
end
