Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  # get '/legislators' => ''
  root 'home#static'

  get "/:thing" => 'home#static'
end
