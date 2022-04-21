# frozen_string_literal: true

# model do Busão

class Bus < ApplicationRecord
  validates :prefix, :plate, :model_description, :year, :number_of_seats, presence: true
  validates :prefix, uniqueness: { case_sensitive: false }
  validates :plate, uniqueness: { case_sensitive: false }
end
