class Address < ApplicationRecord
  belongs_to :city
  belongs_to :client, optional: true
end
