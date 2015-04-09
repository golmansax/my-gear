class HtmlConstraint
  def matches?(request)
    accept_format(request).include?('text/html')
  end

  def accept_format(request)
    # not all request headers have an 'Accept', so we default to 'text/html'
    request.headers['Accept'] || 'text/html'
  end
end

Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root 'pages#index'
  scope constraints: HtmlConstraint.new do
    get '*path', to: 'pages#index'
  end

  resources :clothing_items, only: :index
  resources :purposes, only: :index
  resources :purchases, only: :index
end
