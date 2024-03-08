import React from "react";

function Button({title}) {
  return (
    <button className="uppercase bg-[#4A69E2] font-medium text-sm px-8 py-4 rounded-lg h-fit">
      {title}
    </button>
  );
}

export default Button;
