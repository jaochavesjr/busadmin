class CreateBuses < ActiveRecord::Migration[7.0]
  def change
    create_table :buses do |t|
      t.string :prefix
      t.string :plate
      t.string :model_description
      t.string :year
      t.boolean :toilet
      t.integer :number_of_seats
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
