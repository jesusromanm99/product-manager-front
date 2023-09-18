import React from "react";

interface Props {
  status: string;
}
function ProductStatus({ status }: Props) {
  return (
    <div
      className={`inline-block rounded-lg border  px-2 font-semibold  ${
        status == "AC"
          ? "border-green-200 bg-green-100 text-green-700"
          : "border-red-200 bg-red-100 text-red-700"
      }`}
    >
      {status == "AC" ? "Active" : "Inactive"}
    </div>
  );
}

export default ProductStatus;
