import React, { useContext, useState } from "react";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { getImageUrl } from "../../api/ImageUpload";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { hostRequest } from "../../api/user";

const BecomeAHost = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    if (image) {
      setLoading(true);

      getImageUrl(image)
        .then((data) => {
          const hostData = {
            location: location,
            documentImg: data,
            email: user?.email,
            role: "requested",
          };

          hostRequest(hostData).then((data) => {
            console.log(data?.result);

            toast.success("Request Done!. Admin see your request");
            setLoading(false);
          });
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      return toast.error("Select Valid Document");
    }
  };

  return <BecomeHostForm handleSubmit={handleSubmit} loading={loading} />;
};

export default BecomeAHost;
