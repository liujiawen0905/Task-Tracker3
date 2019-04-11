defmodule SpaWeb.Router do
  use SpaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SpaWeb do
    pipe_through :browser

    get "/", PageController, :index
  end


  scope "/api/v1", SpaWeb do
    pipe_through :api
    resources "/users", UserController, expect: [:new, :edit]
    resources "/tasks", TaskController, expect: [:new, :edit]
    post "/auth", AuthController, :authenticate
  end

  # Other scopes may use custom stacks.
  # scope "/api", SpaWeb do
  #   pipe_through :api
  # end
end
