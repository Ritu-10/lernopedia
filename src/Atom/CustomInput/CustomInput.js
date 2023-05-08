import React from "react";

export default function CustomInput({
  className,
  onChange,
  value,
  placeholder,
  type,
  id
}) {
  return (
    <input
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
      type={type}
      id={id}
    />
  );
}
