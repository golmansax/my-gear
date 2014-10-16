Rails.application.routes.draw do
  root 'pages#index'

  resources :clothing_items, only: :index
end
