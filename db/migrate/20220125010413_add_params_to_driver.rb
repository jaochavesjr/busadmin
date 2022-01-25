class AddParamsToDriver < ActiveRecord::Migration[7.0]
  def change
    add_column :drivers, :nickname, :string
    add_column :drivers, :cellphone_one, :string
    add_column :drivers, :cellphone_two, :string
  end
end
