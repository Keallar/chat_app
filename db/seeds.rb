5.times do |i|
    User.create(username: "user_#{i}", password: "password")
end
