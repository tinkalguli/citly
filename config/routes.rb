Rails.application.routes.draw do
  resources :tasks, only: :create

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
