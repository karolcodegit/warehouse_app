import React from "react";

const Details = ({ title, value }) => (
  <dl className="px-4 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
    <dt className="text-sm font-medium leading-6 text-gray-900 mb-2 sm:mb-0">
      {title}
    </dt>
    <dd className="text-sm leading-6 text-gray-700">{value}</dd>
  </dl>
);

export default Details;
