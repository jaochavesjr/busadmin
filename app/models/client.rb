# frozen_string_literal: true

# model de Clientes
class Client < ApplicationRecord
  has_one :address
  validates :full_name, :document, :type_document, presence: true
  validates :document, uniqueness: { case_sensitive: false }
  accepts_nested_attributes_for :address, update_only: true
end
