# Spa

## Design Choices

In general, the website contains three main pages including Home, Tasks and Users Page.

Home Page:
  
  * New user is able to register and logged in as email
  * The navigation bar only contains a users page when not logged in
  * The navigation bar contains both users page and tasks page when logged in 

Users Page:

  * shows a list of existing users

Tasks Page:

  *  is not available until users logged in
  *  shows all existing tasks
  *  only owners of tasks could manage (delete) their tasks

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
