import React from "react";
import Result from "./_components/Result";
import ResultHome from "./_components/ResultHome";
import ResultTable from "./_components/ResultTable";

const ViewResult = () => {
  return (
    <div className="bg-gray-50">
      <ResultHome></ResultHome>
      <ResultTable></ResultTable>
    </div>
  );
};

export default ViewResult;
