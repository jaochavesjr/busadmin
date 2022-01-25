Rails.application.routes.draw do
  resource :users, only: [:create]
  resource :drivers, only: %i[create show update]
  get '/drivers/list', to: 'drivers#list'
  post '/login', to: 'users#login'
  get '/auto_login', to: 'users#auto_login'
end
