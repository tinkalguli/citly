import React from "react";
import { compose, head, join, juxt, tail, toUpper } from "ramda";

const TableHeader = () => {
  return (
    <thead className="bg-purple-700 text-white">
      <tr>
        <th></th>
        <th
          className="p-6 text-lg font-bold leading-4 tracking-wider
            text-left text-opacity-50 bg-gray-50"
        >
          Original
        </th>
        <th
          className="p-6 text-lg font-bold leading-4 tracking-wider
            text-left text-opacity-50 bg-gray-50"
        >
          Short Url
        </th>
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
