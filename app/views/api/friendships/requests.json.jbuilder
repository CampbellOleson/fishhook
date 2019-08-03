@requests.each do |req|
  json.set! req.id do 
    json.extract! req, :id, :requester_id, :requested_id
  end
end