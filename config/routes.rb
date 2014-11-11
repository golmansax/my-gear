Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root 'pages#index'
  resources :clothing_items, only: [:index, :show]
  resources :outfits, only: [:index, :show]
end
