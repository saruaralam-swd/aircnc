export const hostRequest = async (hostData) => {
  const url = `${process.env.REACT_APP_URL}/user/${hostData?.email}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(hostData),
  });

  const data = await res.json();
  return data;
};
