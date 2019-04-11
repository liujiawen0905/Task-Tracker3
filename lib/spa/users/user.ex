defmodule Spa.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :admin, :boolean, default: false
    field :password_hash, :string
    has_many :tasks, Spa.Tasks.Task

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password_hash, :admin])
    |> validate_required([:email, :password_hash, :admin])
    |> unique_constraint(:email)
  end
end
