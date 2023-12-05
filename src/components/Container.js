import React from "react";

const Container = ({ className = null, children }) => {
  const dfltClss = `container`;
  const isAddClss = className ? `${dfltClss} ${className}` : `${dfltClss}`;

  return (
    <>
      <div className={`${isAddClss}`}>{children}</div>
    </>
  );
};

export default Container;
