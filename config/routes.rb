Rails.application.routes.draw do
  get 'greetings/index'
  root 'root#index'
end