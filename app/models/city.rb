class City < ApplicationRecord
  validates :name, uniqueness: { case_sensitive: false }
end
