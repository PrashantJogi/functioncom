import React, { useEffect } from "react";

const LifeCycle = () => {
  let h = "";

  const click = () => {
    h.innerText = "hi";
  };
  useEffect(() => {
    h = document.getElementById("h");

    h.addEventListener("click", click);

    return () => {
      h.removeEventListener("click", click);
    };
  }, [h]);

  return (
    <>
      <h1 id="h">Hello</h1>
    </>
  );
};

export default LifeCycle;
