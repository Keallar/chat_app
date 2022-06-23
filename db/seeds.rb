# create admin
User.create(username: "admin", password: "qwerty$4")

# create users
5.times do |i|
    User.create(username: "user_#{i}", password: "password")
end

# create messages
5.times do |i|
    user = User.all[i]
    Message.create("Something new from #{user.username}", user_id: user.id)
end
