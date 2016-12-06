Rails.application.routes.draw do

# Root Route
  root 'home#static'

# Legislators
  resources :legislators do
    collection do
      get :filter
    end
  end
  get   '/legislators/:id' => 'legislators#show'
  get   '/legislators/search' => 'legislators#search'
# => Follow Logic
  get   '/not_followed' => 'legislators#unfollowed'
  get   '/followed' => 'legislators#followed'
  post  '/legislators/:id/follow' => 'legislators#follow_unfollow'

# Users
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post  '/users' => 'users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
    post  '/users/sign_in' => 'users/sessions#create', as: :sign_in, constraints: {format: /(json)/}
    patch '/users/edit_account' => 'users/registrations#update', as: :update, constraints: {format: /(json)/}
  end
  get   '/self' => 'users#show_self'
  get   '/users/:id' => 'users#show'

# Catchalls for React
  get   '/:catchall' => 'home#static'
  get   '/:catchall/:catchall' => 'home#static'
end
