class CreateLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :legislators do |t|
      t.string :first_name
      t.string :last_name
      t.string :party
      t.string :chamber
      t.text :commitees, array: true
      t.string :bills
      t.string :leg_image_id
      t.timestamps
    end
  end
end
