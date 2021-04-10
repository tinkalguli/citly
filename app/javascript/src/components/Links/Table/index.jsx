import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <table
      className="min-w-full overflow-hidden
      divide-y divide-gray-200 mt-10 shadow rounded-lg"
    >
      <TableHeader />
      <TableRow data={data} />
    </table>
  );
};

export default Table;
