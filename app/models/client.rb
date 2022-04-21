# frozen_string_literal: true

# model de Clientes
class Client < ApplicationRecord
  has_one :address
  validates :full_name, :document, :type_document, :status, presence: true
  validates :document, uniqueness: { case_sensitive: false }

  enum status: { active: 0, archived: 1 }
  accepts_nested_attributes_for :address, update_only: true
end
