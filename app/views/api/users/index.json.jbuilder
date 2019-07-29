@users.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
  end
end

# renders _user partial for each user
# im assuming that @users is going to reflect a filtered list of of users
# ie friends, feed, etc