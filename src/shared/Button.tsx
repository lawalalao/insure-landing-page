import React from "react";

export default ({
  className,
  label,
  id,
}: {
  className: string;
  label: string;
  id: string;
}) => {
  let cName = "button " + className;
  return (
    <button id={id} className={cName} aria-label={label}>
      {label}
    </button>
  );
};
