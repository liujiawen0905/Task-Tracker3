defmodule SpaWeb.TaskView do
  use SpaWeb, :view
  alias SpaWeb.TaskView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    IO.inspect(task, label: ">>>>>>>task_view!!!!!!!!")
    %{id: task.id,
      desc: task.desc,
      name: task.name,
      status: task.status,
      time: task.time,
      user_id: task.user_id
    }
  end
end
