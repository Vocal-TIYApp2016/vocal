Rails.application.routes.draw do

  resources :legislators do
    collection do
      get :filter
    end
  end
  root 'home#static'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
    post '/users/sign_in' => 'users/sessions#create', as: :sign_in, constraints: {format: /(json)/}
    patch '/users/edit_account' => 'users/registrations#update', as: :update, constraints: {format: /(json)/}
  end

  # get '/legislators' => 'legislators#index'
  get '/legislators/:id' => 'legislators#show'
  get '/legislators/search' => 'legislators#search'
  get '/self' => 'users#show_self'
  get '/users/:id' => 'users#show'
  get '/:catchall' => 'home#static'
  get '/:catchall/:catchall' => 'home#static'
end
