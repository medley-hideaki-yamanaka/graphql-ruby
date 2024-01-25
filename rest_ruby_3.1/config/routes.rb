Rails.application.routes.draw do
  get '/posts', to: 'post#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/authors', to: 'author#index'
end
