import React from "react";

const Error = ({ err }) => {
  return (
    <div>
      <p>
        Error: {err.status} {err.msg}
      </p>
    </div>
  );
};

export default Error;
