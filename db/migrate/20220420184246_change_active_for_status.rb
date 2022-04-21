class ChangeActiveForStatus < ActiveRecord::Migration[7.0]
  def change
    rename_column(:clients, :active, :status)
  end
end
