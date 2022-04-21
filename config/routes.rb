Rails.application.routes.draw do
  resource :users, only: [:create]
  resource :drivers, only: %i[create show update]
  resource :clients, only: %i[create show update]
  post '/login', to: 'users#login'
  get '/drivers/list', to: 'drivers#list'
  get '/clients/list', to: 'clients#list'
  get '/clients/cities', to: 'clients#cities'
end
