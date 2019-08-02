users.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
  end
end

# renders _user partial for each user