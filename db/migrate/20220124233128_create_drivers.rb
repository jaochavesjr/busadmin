class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :full_name
      t.string :cpf
      t.date :birthday
      t.string :license
      t.date :license_expiration_date
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
