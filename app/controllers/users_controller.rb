# frozen_string_literal: true

# controller do User
class UsersController < ApplicationController
  def create
    @user = User.create(params_user)
    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { error: 'Username ou senha inválidos' }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: params_user[:username])
    if @user && @user.authenticate(params_user[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }, status: :ok
    else
      ender json: { error: 'Username ou senha inválidos' }, status: :unprocessable_entity
    end
  end

  private

  def params_user
    params.require(:user).permit(:username, :password)
  end
end
