# frozen_string_literal: true

# model de Viagens
class Travel < ApplicationRecord
  belongs_to :bus
  belongs_to :driver
  belongs_to :origin, class_name: 'City'
  belongs_to :destination, class_name: 'City'
  validates :date, :status, presence: true

  enum status: { open: 1, closed: 2 }
end
