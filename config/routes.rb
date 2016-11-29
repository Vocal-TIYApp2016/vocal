Rails.application.routes.draw do
  devise_for :users
  # get '/legislators' => ''
  root 'home#static'
end
