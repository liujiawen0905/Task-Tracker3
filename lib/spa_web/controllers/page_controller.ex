defmodule SpaWeb.PageController do
  use SpaWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
