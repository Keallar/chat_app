# clear db
puts "Clear db"
Message.delete_all unless Message.count.zero?
User.delete_all unless User.count.zero?

# create admin
puts "Create admin"
User.create(username: "admin", password: "qwerty$4")

# create users
puts "Create users"
5.times do |i|
    User.create(username: "user_#{i}", password: "password")
end

# create messages
puts "Create messages"
5.times do |i|
    user = User.all[i]
    Message.create(body: "Something new from #{user.username}", user_id: user.id)
end
