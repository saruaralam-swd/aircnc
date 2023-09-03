// save bookings
export const saveBookings = async (bookingData) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};

// for user
export const getMyBookings = async (email) => {
  const url = `${process.env.REACT_APP_URL}/bookings?email=${email}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// for Admin
export const getAllBookings = async () => {
  const url = `${process.env.REACT_APP_URL}/bookings`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
