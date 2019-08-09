json.poster_id post.poster.id
json.poster_fname post.poster.fname
json.poster_lname post.poster.lname
json.extract! post, :id, :body, :location_url

# json.photo_url post.photo_url