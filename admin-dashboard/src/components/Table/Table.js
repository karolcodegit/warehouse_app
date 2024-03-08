import React, { useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import api from "../../api";
import Input from "../Input/Input";
import {
  SearchIcon,
  SortAscendingIcon,
  SortDescendingIcon,
} from "../../utils/icons";
import { motion } from "framer-motion";

import { FaFileExcel } from "react-icons/fa";
import exportToExcel from "../../utils/exportToExcel";
import Button from "../Button/Button";

const Table = ({ columns, data }) => {
  const [carriers, setCarriers] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [{ id: "date", desc: true }], // Add this line
      }, // Pass our hoisted table state
    },

    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useSortBy
  );

  useEffect(() => {
    api.get("/api/carriers").then((res) => {
      setCarriers(res.data);
    });
    api.get("/api/users").then((res) => {
      setUsers(res.data);
    });
    api.get("/api/roles").then((res) => {
      setRoles(res.data);
    });
  }, []);

  // Render the UI for your table
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-between items-center space-x-4">
          <div></div>
          <div>
            <Input
              icon={SearchIcon}
              value={state.globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              col
            />
          </div>
        </div>

        <div className="flex justify-between py-5 items-end">
          <div className="flex items-center gap-x-5">
            {columns.map((column) => {
              if (column.accessor === "date") {
                return (
                  <div className="" key={column.accessor}>
                    <label
                      htmlFor={`${column.accessor}-filter`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {column.Header}
                    </label>
                    <input
                      id={`${column.accessor}-filter`}
                      type="date"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setFilter(column.accessor, e.target.value)
                      }
                    />
                  </div>
                );
              }

              if (column.accessor === "carrier") {
                return (
                  <div className="filter-carrier" key={column.accessor}>
                    <label
                      htmlFor={`${column.accessor}-filter`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {column.Header}
                    </label>
                    <select
                      id={`${column.accessor}-filter`}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setFilter(column.accessor, e.target.value)
                      }
                    >
                      <option value="">All</option>
                      {carriers.map((carrier) => (
                        <option key={carrier._id} value={carrier.carrierName}>
                          {carrier.carrierName}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (column.accessor === "status") {
                return (
                  <div className="filter-carrier" key={column.accessor}>
                    <label
                      htmlFor={`${column.accessor}-filter`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {column.Header}
                    </label>
                    <select
                      id={`${column.accessor}-filter`}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setFilter(column.accessor, e.target.value)
                      }
                    >
                      <option value="">All</option>

                      <option key="waiting" value="Waiting">
                        Waiting
                      </option>
                      <option key="closed" value="Closed">
                        Closed
                      </option>
                    </select>
                  </div>
                );
              }

              const reverseRoleMapping = roles.reduce((map, role) => {
                map[role.name] = role._id;
                return map;
              }, {});

              if (column.accessor === "roles") {
                return (
                  <div className="filter-carrier" key={column.accessor}>
                    <label
                      htmlFor={`${column.accessor}-filter`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {column.Header}
                    </label>
                    <select
                      id={`${column.accessor}-filter`}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setFilter(
                          column.accessor,
                          reverseRoleMapping[e.target.value]
                        )
                      }
                    >
                      <option value="">All</option>

                      {roles.map((role) => (
                        <option key={role._id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              // Add more conditions for other column types as needed
              return null;
            })}
          </div>
          <div className="flex items-center"> 
            <span className="px-3">Export: </span>
            <Button onClick={() => exportToExcel(data, "filename.xlsx")}>
              <FaFileExcel />
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table
            {...getTableProps()}
            className="w-full divide-y divide-gray-200  overflow-x-auto "
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
                  {headerGroup.headers.map((column, i) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider ${i === headerGroup.headers.length - 1 ? 'flex justify-end' : ''}`}
                    >
                      <div className="flex items-center gap-2 ">
                        {column.render("Header")}
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <SortAscendingIcon className="text-black" />
                          ) : (
                            <SortDescendingIcon className="text-black" />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {page.length === 0 ? (
                <tr>
                  <td
                    colSpan={headerGroups[0].headers.length}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                  >
                    No data
                  </td>
                </tr>
              ) : (
                page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, i) => (
                        <td
                          {...cell.getCellProps()}
                          className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${i === row.cells.length - 1 ? 'flex justify-end' : ''}`}
                          >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="pagination flex items-center justify-between my-3">
          <div>
            <span>
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </div>
          <div className="flex items-center">
            <button
              className="text-3xl cursor-pointer"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className="text-3xl cursor-pointer"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <MdKeyboardArrowRight />
            </button>

            <select
              className="rounded-md px-3 py-1"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Table;
