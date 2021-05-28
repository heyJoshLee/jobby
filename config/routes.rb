Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get "signup", to: "users#new"
      get "signin", to: "sessions#new"
      post "signin", to: "sessions#create"
      delete "logout", to: "sessions#destroy"
      resources :users, except: [:new]
      resources :leads, param: :slug do
        resources :touches
      end
    end
  end

  get '*path', to: 'pages#index', via: :all
end
