import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="max-w-screen max-h-screen flex justify-center items-center">
        <Oval
      height={80}
      width={80}
      color="#2EC4B6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
    </div>
  );
};

export default Loading;
