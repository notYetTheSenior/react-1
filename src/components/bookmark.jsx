import React from "react";
import button from "bootstrap/js/src/button";
//-fill
const Bookmark = ({status, ...rest}) => {
  return (
    <button className="btn btn-light" {...rest}>
      <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default Bookmark;