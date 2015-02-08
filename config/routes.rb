Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root 'pages#index'
  get '/about' => 'pages#index'
  get '/wardrobe' => 'clothing_items#index'
  resources :clothing_items, only: [:index, :show]
  resources :outfits, only: [:index, :show]
  resources :purchases, only: [:index, :show]
end
