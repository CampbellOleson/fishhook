# Fishhook

[Fishhook](https://fish-hook.herokuapp.com/#/) is a social media app specifically taylored for the worldwide community of fishing enthusiasts. On Fishhook, you can discover new fishing spots, share your best catches, and connect with fellow fishermen and fisherwomen! Fishhook is built with a Ruby on Rails backend, a PostgreSQL database and a React / Redux frontend.

![Splash Page](./screenshots/splash.png)

## Features

  **Friendships**
  - On Fishhook, users can send "friend requests" to other users which can be accepted or declined. "Friendships" on Fishhook are mutual, meaning that one user cannot be friends with another user if that user doesn't accept their friend request. 
  - Enabling this feature is a dynamic and robust system of database associations that were implimented with Rails object-relational mapping. A "friend request" is represented as an entry in a SQL joins table, with a default status of "pending". 
  - If a user accepts a "friend request", this status is changed to "accepted" and the "friend request" becomes in effect a "friendship" association between the two associated users. 
  - When a user rejects a "friend request", the joins table entry is simply deleted from the database, allowing either user to submit another friend request if they would like. 

![Profile Friends](./screenshots/friends.png)

![Home Page](./screenshots/home.png)
