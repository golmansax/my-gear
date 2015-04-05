Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root 'pages#index'
  get '/about' => 'pages#index'
  get '/wardrobe' => 'clothing_items#index'
  resources :clothing_items, only: :index
  resources :outfits, only: :index
  resources :purchases, only: :index
end
