# frozen_string_literal: true

# model do User
class User < ApplicationRecord
  has_secure_password
end
