defmodule Spa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :name, :string, null: false
      add :desc, :string, null: false
      add :status, :boolean, default: false, null: false
      add :time, :integer, default: 0
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:tasks, [:name], unique: true)
  end
end
