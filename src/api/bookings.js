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
