import React from "react";

function Error(props) {
  return (
    <div className="text-center">
      <p className="lead">{props.error}</p>
    </div>
  );
}

export default Error;
