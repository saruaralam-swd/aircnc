export const setAuthToken = (user) => {
  const currentUser = {
    email: user?.email,
  };

  // save user in DB & get JWT
  fetch(`${process.env.REACT_APP_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("aircnc-token", data?.token);
    })
    .catch((error) => console.log(error));
};
