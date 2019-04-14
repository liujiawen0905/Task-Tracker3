use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :spa, SpaWeb.Endpoint,
  secret_key_base: "tmYmA98vi0T74es4TRA8h+CfPXXNU5lo3+n9d9HHF01/bxE7m0fhP/ACsBZPTCE9"

config :spa, Spa.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "spa",
  password: "spa",
  database: "spa_prod",
  pool_size: 10
