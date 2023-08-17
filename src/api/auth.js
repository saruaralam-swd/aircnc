import { Navigate } from "react-router-dom";

export const setAuthToken = (user) => {
  const currentUser = {
    email: user?.email,
  };

  // save user in DB & get JWT
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // store token
      localStorage.setItem("aircnc-token", data?.token);
    });
};
