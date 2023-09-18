import React from "react";

interface Props {
  status: string;
}
function ProductStatus({ status }: Props) {
  return (
    <div
      className={`rounded-lg text-white px-2  ${status == "AC" ? "bg-green-500" : "bg-red-500"}`}
    >
      {status == "AC" ? "Active" : "Inactive"}
    </div>
  );
}

export default ProductStatus;
