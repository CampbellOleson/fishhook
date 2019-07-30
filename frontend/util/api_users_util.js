export const fetchUser = id => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};

export const fetchUsers = id => {
  return $.ajax({
    method: "GET",
    url: `api/users/`
  });
};

export const createUser = formUser => {
  return $.ajax({
    method: "POST",
    url: "api/users/",
    data: { user: formUser }
  });
};

export const updateUser = formUser => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${formUser.id}`,
    data: { user: formUser }
  });
};

export const deleteUser = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${id}`
  });
};
