# frozen_string_literal: true

# Model de Motorista
class Driver < ApplicationRecord
  validates :full_name, :cpf, :status, :cellphone_one, :nickname, presence: true
  validates :nickname, uniqueness: { case_sensitive: false }
  enum status: { active: 0, archived: 1 }
end
