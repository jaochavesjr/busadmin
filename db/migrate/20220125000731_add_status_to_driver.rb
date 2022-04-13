class AddStatusToDriver < ActiveRecord::Migration[7.0]
  def change
    add_column :drivers, :status, :integer, default: 0
  end
end
