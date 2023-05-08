import React from "react";

export default function SearchBar({ type, placeholder, className, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
