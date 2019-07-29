json.extract! @user, :id, :email, :fname, :lname, :bio
# this is the 'user detail' json as to be used in the profile page/expanded info
# this will include profile photo and cover photo (unless thats done a diff way)
# should i user user brief partial here also? ASK about efficiency

# user model will have photo associations that I can refrence and send up in this file