import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import customers from "../utils/customer";

const Home = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState("active");

  const [searchTerm, setSearchTerm] = React.useState("");

  const [filteredCustomers, setFilteredCustomers] = React.useState(customers);

  const activeCustomers = filteredCustomers.filter(
    (customer) => customer.status === "Active"
  );
  const inactiveCustomers = filteredCustomers.filter(
    (customer) => customer.status === "Inactive"
  );
  const showCustomers =
    activeTab === "active" ? activeCustomers : inactiveCustomers;

  const handleSearch = () => {
    setFilteredCustomers(
      customers.filter((customer) =>
        customer.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  //   const navigate = useNavigate();
  const handleViewClick = (customer) => {
    navigate("/view", { state: { customer } });
  };
  return (
    <>
      {/* <Navbar page={page}></Navbar> */}
      <div className="max-w-[1519px] h-screen mx-auto bg-[#E0F2FF]">
        <div className="bg-white h-screen mx-auto max-w-6xl">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12">
            <div
              id="search-tenant"
              className="flex flex-col  sm:flex-row gap-4 items-center"
            >
              <div className="flex gap-3 items-center border h-10 w-full sm:w-80 rounded-md border-[#0C79B6]">
                <span className="px-3">
                  <IoIosSearch />
                </span>
                <input
                  className="font-serif outline-none w-full"
                  type="text"
                  placeholder="Search tenants by Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={handleSearch}
                className="flex justify-center items-center border border-bl h-10 w-full sm:w-28 px-2 py-2 bg-[#0C79B6] rounded-lg hover:border-grey-600 hover:bg-[#0c78b6d5]"
              >
                <span className="font-serif text-white text-xl">Search</span>
              </button>
            </div>
            <h1 className="py-14 text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-center sm:text-left">
              My Customers
            </h1>
            <div className="max-w-7xl mx-auto p-2">
              <div className="flex justify-start gap-4 space-x-4">
                <a
                  href="#"
                  className={`text-lg  font-bold pb-2  text-gray-500 ${
                    activeTab === "active" &&
                    "text-green-700 border-b-4 border-green-800"
                  }`}
                  onClick={() => setActiveTab("active")}
                >
                  Active ({activeCustomers.length})
                </a>
                <a
                  href="#"
                  className={`text-lg  font-bold pb-2  text-gray-500 ${
                    activeTab === "inactive" &&
                    "text-red-800 border-b-4 border-red-800"
                  }`}
                  onClick={() => setActiveTab("inactive")}
                >
                  Inactive ({inactiveCustomers.length})
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-black border-t max-h-32 overflow-y-auto">
                  <thead className="border-b-2 border-black">
                    <tr>
                      <th className="px-1 py-2 text-center">Id</th>
                      <th className="px-4 py-2 text-center">Name</th>
                      <th className="px-2 py-2 text-center">Type</th>
                      <th className="px-2 py-2 text-center">Payment</th>
                      <th className="px-2 py-2 text-center">Contact No</th>
                      <th className="px-1 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-100">
                        <td className="px-2 py-2 border-b text-center">
                          {customer.id}
                        </td>
                        <td className="px-4 py-2 border-b text-center">
                          {customer.companyName}
                        </td>
                        <td className="px-2 py-2 border-b text-center">
                          {customer.typeOfCompany}
                        </td>
                        <td
                          className={`px-2 py-2 border-b font-semibold text-center text-green-700`}
                        >
                          {customer.paymentMethod}
                        </td>
                        <td className="px-6 py-2 border-b text-center">
                          {customer.contactNumber}
                        </td>
                        <td className="px-2 py-2 border-b text-center">
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() => handleViewClick(customer)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
