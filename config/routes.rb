Rails.application.routes.draw do
  resources :links, only: %i[index create update]
  get '/links/:slug', to: 'links#show'
  get '/report', to: 'home#report'

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
