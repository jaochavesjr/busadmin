class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :full_name
      t.string :type_document
      t.string :document
      t.string :cellphone
      t.date :birthday
      t.boolean :under_age
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
