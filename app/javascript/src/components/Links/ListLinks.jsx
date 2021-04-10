import React from "react";
import { isNil, isEmpty, either } from "ramda";
import Table from "./Table";

const ListLinks = ({ data, handlePinned }) => {
  if (either(isNil, isEmpty)(data)) {
    return (
      <h1 className="text-xl leading-5 text-center mt-10">
        You have no links assigned 😔
      </h1>
    );
  }

  return <Table data={data} handlePinned={handlePinned} />;
};

export default ListLinks;
