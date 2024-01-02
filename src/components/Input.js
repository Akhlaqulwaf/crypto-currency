import React from "react";

export const Input = ({ search, handleChange }) => {
  return (
    <>
      <input
        className="border-none focus:outline-none shadow-md focus:shadow-lg rounded-md py-[0.3rem] px-[1rem]"
        type="text"
        placeholder="search coin"
        name="search"
        autoFocus={true}
        value={search}
        onChange={handleChange}
      />
    </>
  );
};
