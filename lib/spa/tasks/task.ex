defmodule Spa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field :name, :string
    field :desc, :string
    field :status, :boolean, default: false
    field :time, :integer
    belongs_to :user, Spa.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:desc, :name, :status, :time])
    |> validate_required([:desc, :name, :status, :time])
    |> unique_constraint(:name)
  end
end
