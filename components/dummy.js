import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: yellow;
          }
        `}
      </style>
      <h1 className="dummy">Dummy pages</h1>
    </>
  );
};

export default Dummy;
