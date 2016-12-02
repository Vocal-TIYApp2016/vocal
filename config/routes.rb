Rails.application.routes.draw do

  resources :legislators
  root 'home#static'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
    post '/users/sign_in' => 'users/sessions#create', as: :sign_in, constraints: {format: /(json)/}
  end

  get '/legislators' => 'legislators#index'
  get '/legislators/:id' => 'legislators#show'
  get '/legislators/filter' => 'legislators#filter'
  get '/self' => 'users#show_self'
  get '/users/:id' => 'users#show'
  # patch for update
  get '/:catchall' => 'home#static'
end
