import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}) => {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full px-3 py-2 placeholder-gray-500
          transition duration-150 ease-in-out rounded
          appearance-none shadow-sm border
          focus:outline-none focus:shadow-outline-blue
          focus:border-purple-400 sm:text-sm sm:leading-5"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
