export const getImageUrl = async (img) => {
  const formData = new FormData();
  formData.append("image", img);

  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBb_Key}`;
  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  const imageData = await response.json();

  return imageData?.data?.display_url;
};
