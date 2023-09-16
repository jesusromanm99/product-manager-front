import React from "react";
type props = {
  title: string;
};
function PageTitle({ title }: props) {
  return (
    <h2 className='text-2xl font-semibold mb-4 inline-block border-b-2 border-orange-500 pb-2'>
      {title}
    </h2>
  );
}

export default PageTitle;
