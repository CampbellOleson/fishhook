# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(fname:"Guest",lname:"User",email:"guestuser@fishhook.com",password:"guestuser")

collin = User.create(fname:"Collin",lname:"Leishman",email:"cl@email.com",bio:"bows baby",password:"password")
tuscan = User.create(fname:"Tuscan",lname:"Crandall",email:"tc@email.com",bio:"yellowstone cut baby",password:"password")
isaac = User.create(fname:"Isaac",lname:"Cox",email:"ic@email.com",bio:"brooke trout baby",password:"password")
noah =  User.create(fname:"Noah",lname:"Rowley",email:"nr@email.com",password:"password")
annabelle = User.create(fname:"Annabelle",lname:"McCrary",email:"adc@email.com",password:"password")
dayna =  User.create(fname:"Dayna",lname:"Nyguen",email:"dn@email.com",password:"password")
brooklyn = User.create(fname:"Brooklyn",lname:"Hoopes",email:"bh@email.com",password:"password")
juanchi = User.create(fname:"Juan",lname:"Cebrio",email:"jc@email.com",bio:"I dont fish",password:"password")
hyrum = User.create(fname:"Hyrum",lname:"Crane",email:"hc@email.com",bio:"I dont fish",password:"password")
zach = User.create(fname:"Zach",lname:"Moise",email:"zm@email.com",password:"password")
lucas = User.create(fname:"Lucas",lname:"Macias",email:"lm@email.com",bio:"I dont fish",password:"password")
gracie = User.create(fname:"Gracie",lname:"Garso",email:"gg@email.com",password:"password")
maddie = User.create(fname:"Maddie",lname:"Bernasek",email:"mb@email.com",bio:"I dont fish",password:"password")
lauren = User.create(fname:"Lauren",lname:"Parris",email:"lp@email.com",password:"password")

f1 = Friendship.create(requester_id: collin.id, requested_id: 1)
f4 = Friendship.create(requester_id: hyrum.id, requested_id: 1)
f5 = Friendship.create(requester_id: juanchi.id, requested_id: 1)
f6 = Friendship.create(requester_id: noah.id, requested_id: 1)
f7 = Friendship.create(requester_id: lucas.id, requested_id: 1)
f8 = Friendship.create(requester_id: gracie.id, requested_id: 1)
