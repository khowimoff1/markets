import React, { useState } from "react";
import { IoMdSearch, IoMdCalendar, IoMdMore } from "react-icons/io";

const Table = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Andrio Maksim",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "maksim45@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 2,
      name: "James Diyan",
      year: "3 years",
      position: "Developer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "jamesd@gmail.com",
      phone: "+434(29)-355-68-66",
      address: "Block C, Demo Park",
      status: "Full-time",
    },
    {
      id: 3,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 4,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 5,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 6,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 7,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 8,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 9,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
    {
      id: 10,
      name: "Devid Windrow",
      year: "3 years",
      position: "Designer",
      experience: "3 years",
      birthday: "25 Nov, 1989",
      email: "windrow@gmail.com",
      phone: "+323(29)-232-44-44",
      address: "Block A, Demo Park",
      status: "Full-time",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="md:py-8 md:px-20 py-2 px-8">
      <h1 className="font-bold text-2xl">Data Tables</h1>
      <div className="bg-white mt-5 shadow-md rounded ">
        <div className="flex flex-col md:flex-row items-center md:justify-between border-b md:mb-5 p-5 space-y-3 md:space-y-0 md:space-x-5">
          <label
            htmlFor="search-input"
            className="flex items-center border rounded overflow-hidden w-full md:w-auto"
          >
            <input
              id="search-input"
              type="text"
              placeholder="Search here..."
              className="p-2 w-full md:w-72 outline-none border-none"
            />
            <button className="text-lg w-10 h-10 text-white bg-blue-600 flex items-center justify-center">
              <IoMdSearch />
            </button>
          </label>
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end md:justify-start">
            <span className="text-gray-600">Per Page: </span>
            <select className="border p-1">
              <option>05</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>

        <table className="min-w-full bg-white rounded-lg ">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="p-4 border-b">
                Name/ID
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="mt-1 p-1 border rounded w-32 pl-10"
                  />
                  <IoMdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </th>
              <th className="p-4 border-b flex flex-col ">
                Position
                <select name="position" className="mt-1 p-1 border rounded">
                  <option value=""></option>
                  <option value="Designer">Designer</option>
                  <option value="Developer">Developer</option>
                </select>
              </th>
              <th className="p-4 border-b">
                B'Day
                <div className="relative mt-1">
                  <IoMdCalendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="dateInput"
                    placeholder=" "
                    className="outline-none pl-8 w-28 p-1 border rounded"
                  />
                </div>
              </th>
              <th className="p-4 border-b">
                Email/Phone
                <div className="relative">
                  <IoMdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="searchInput"
                    placeholder=" "
                    className="mt-1 p-1 border rounded w-40 pl-8" // chap tarafda ikonka uchun padding
                  />
                </div>
              </th>
              <th className="p-4 border-b flex flex-col ">
                Address
                <select className="mt-1 p-1 border rounded w-64">
                  <option value=""></option>
                </select>
              </th>
              <th className="p-4 border-b">
                <div className="flex flex-col">
                  Status
                  <select className="mt-1 p-1 border rounded w-20">
                    <option value=""></option>
                  </select>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 text-sm text-gray-700"
              >
                <td className="p-4">
                  <div className="flex flex-col ">
                    <span className="font-semibold text-blue-600">
                      {item.name}
                    </span>
                    <span className="text-gray-500 text-xs">{item.id}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col ">
                    <span>{item.position}</span>
                    <span className="text-gray-500 text-xs">{item.year}</span>
                  </div>
                </td>
                <td className="p-4">{item.birthday}</td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span>{item.email}</span>
                    <span className="text-gray-500 text-xs">{item.phone}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-10">
                    <span>{item.address}</span>
                    <span>{item.status}</span>
                  </div>
                </td>
                <td className=" w-7 ml-20 mt-5 relative text-right flex items-center justify-end group">
                  {" "}
                  <IoMdMore className="text-3xl text-gray-400 cursor-pointer  " />
                  <div className="hidden group-hover:flex flex-col absolute z-10 bg-white rounded border border-[#f2f0f0] shadow-lg top-6 right-3">
                    <button className="hover:bg-blue-700 text-start hover:text-white w-full py-[1px] rounded px-5">
                      Edit
                    </button>
                    <button className="hover:bg-blue-700 text-start hover:text-white w-full py-[1px] rounded px-5">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} // Orqaga o'tish
              className="p-1 px-2 rounded  text-gray-600 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`p-1 px-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="p-1 px-2 rounded text-gray-600 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>

          <span className="text-sm text-gray-600">
            Showing {indexOfFirstItem + 1} to{" "}
            {indexOfLastItem > data.length ? data.length : indexOfLastItem} of{" "}
            {data.length} entries
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
