# frozen_string_literal: true

# Model de Motorista
class Driver < ApplicationRecord
  validates :full_name, :cpf, :cellphone_one, :nickname, presence: true
  validates :nickname, uniqueness: { case_sensitive: false }
end
