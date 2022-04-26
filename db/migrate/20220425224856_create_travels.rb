class CreateTravels < ActiveRecord::Migration[7.0]
  def change
    create_table :travels do |t|
      t.references :bus, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true
      t.references :origin, null: false, foreign_key: { to_table: :cities }
      t.references :destination, null: false, foreign_key: { to_table: :cities }
      t.datetime :date
      t.integer :status

      t.timestamps
    end
  end
end
