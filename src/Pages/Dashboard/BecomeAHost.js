import React, { useContext, useEffect, useState } from "react";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";
import { getImageUrl } from "../../api/ImageUpload";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { getUserRole, hostRequest } from "../../api/user";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loader, setLoader] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    if (image) {
      setBtnLoading(true);
      getImageUrl(image)
        .then((data) => {
          const hostData = {
            location: location,
            documentImg: data,
            email: user?.email,
            role: "requested",
          };

          hostRequest(hostData).then((data) => {
            setBtnLoading(false);
            console.log(data?.result);
            toast.success("Request Done!. Admin see your request");
          });
        })
        .catch((error) => {
          setBtnLoading(false);
        });
    } else {
      return toast.error("Provide Valid Document");
    }
  };

  useEffect(() => {
    getUserRole(user?.email).then((data) => {
      setRole(data);
      setLoader(false);
    });
  }, [user]);

  return (
    <>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>
          {loader === false && (
            <BecomeHostForm
              handleSubmit={handleSubmit}
              btnLoading={btnLoading}
            />
          )}
        </>
      )}
    </>
  );
};

export default BecomeAHost;
