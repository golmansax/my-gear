Rails.application.routes.draw do
  root 'pages#index'
  resources :clothing_items, only: [:index, :show]
  resources :outfits, only: [:index, :show]
end
