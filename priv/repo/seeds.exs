# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Spa.Repo.insert!(%Spa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


alias Spa.Repo
alias Spa.Users.User

pwhash = Argon2.hash_pwd_salt("password")

Repo.insert!(%User{email: "liu.jiawen@husky.neu.edu", admin: true, password_hash: pwhash})
Repo.insert!(%User{email: "kevin@example.com", admin: false, password_hash: pwhash})

alias Spa.Tasks.Task

Repo.insert!(%Task{name: "Doing Homework", desc: "Web homework due every week",
            status: true, time: 2, user_id: 1})
Repo.insert!(%Task{name: "Eating Lunch", desc: "Eat either beef, pork and chicken",
            status: false, time: 1, user_id: 2})
