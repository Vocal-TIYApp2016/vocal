Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
  post '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
end
  # get '/legislators' => ''
  root 'home#static'

  get '/:session/legislators' => redirect('https://api.iga.in.gov/legislators')
  get '/users/:id' => 'users#show'

  get "/:catchall" => 'home#static'
end
