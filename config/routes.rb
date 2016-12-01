Rails.application.routes.draw do

  resources :legislators
  root 'home#static'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
  end

  get '/self' => 'users#show_self'
  get '/users/:id' => 'users#show'

  get '/:catchall' => 'home#static'
end
