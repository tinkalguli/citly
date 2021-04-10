import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 rounded-b">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="px-6 py-4 text-2xl font-medium text-center
            leading-5 text-bb-gray whitespace-no-wrap bg-gray-100"
          >
            <i
              className={`ri-information-fill align-middle hover:text-purple-500 ${
                rowData.is_pinned ? "text-purple-700" : "text-gray-500"
              } `}
            ></i>
          </td>
          <td
            className="px-6 py-4 text-md break-all
            leading-5 text-bb-gray max-w-xs"
          >
            {rowData.original_url}
          </td>
          <td
            className="px-6 py-4 text-md break-all
            leading-5 text-bb-gray max-w-xs"
          >
            {rowData.shortened_url}
          </td>
          <td
            className="px-6 py-4 text-md font-medium text-center
            leading-5 text-bb-gray whitespace-no-wrap bg-gray-100"
          >
            {rowData.clicked}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  destroyTask: PropTypes.func,
  updateTask: PropTypes.func,
};

export default TableRow;
