import React from "react";

export const Pagination = ({
  dataComp,
  itemPerPage,
  setCurrentPage
}) => {
  const totalPage = Math.ceil(dataComp.length / itemPerPage);
  const number = [];
  for (let i = 1; i <= totalPage; i++) {
    number.push(i);
  }
  return (
    <div>
      {number.map((number) => {
        return (
          <>
            <li className="flex gap-2" key={number}>
              <a onClick={() => setCurrentPage(number)} href="!#">
                {number}
              </a>
            </li>
          </>
        );
      })}
    </div>
  );
};
