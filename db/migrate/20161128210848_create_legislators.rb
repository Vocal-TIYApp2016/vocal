class CreateLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :legislators do |t|
      t.string :position, null: false, default: ""
      t.string :session, null: false, default: ""
      t.string :party, null: false, default: ""
      t.string :first_name, null: false, default: ""
      t.string :last_name, null: false, default: ""
      t.string :full_name, null: false, default: ""
      t.string :leg_img_url, null: false, default: ""
      t.timestamps
    end
  end
end
