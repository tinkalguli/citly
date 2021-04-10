import React from "react";

import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="px-2 mx-auto max-w-4xl sm:px-4 lg:px-8">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
