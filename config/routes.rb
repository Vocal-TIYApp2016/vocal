Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
  post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
end
  # get '/legislators' => ''
  root 'home#static'
  
  get 'users/:id' => 'users#show'

  get "/:thing" => 'home#static'
end
