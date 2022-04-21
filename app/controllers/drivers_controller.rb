# frozen_string_literal: true

# Controller do Motorista
class DriversController < ApplicationController
  before_action :authorize
  before_action :set_driver, only: %i[update show]

  def list
    @drivers = if params[:q].blank?
                 Driver.all
               else
                 Driver.where('nickname LIKE :word OR full_name LIKE :word OR cpf LIKE :word',
                              word: '%' + params[:q] + '%')
               end
    render json: @drivers
  end

  def create
    @driver = Driver.new(params_driver)

    if @driver.save
      render json: @driver, status: :created
    else
      render json: @driver.errors, status: :unprocessable_entity
    end
  end

  def update
    if @driver.update(params_driver)
      render json: @driver
    else
      render json: @driver.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @driver
  end

  private

  def set_driver
    @driver = Driver.find(params[:id])
  end

  def params_driver
    params.require(:driver).permit(:full_name, :cpf, :birthday, :license,
                                   :license_expiration_date, :nickname,
                                   :cellphone_two, :cellphone_one, :active)
  end
end
