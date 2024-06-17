import React from "react";
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const { customer } = location.state || {};
  const data = customer;
  return (
    <div>
      <div className="max-w-[1519px] h-fit mx-auto bg-[#E0F2FF]">
        <div className="bg-white h-fit  mx-auto max-w-6xl">
          {/* Customer Data Head */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32  py-12 mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-grow">
                  <h1 className="font-serif font-bold text-[30px]">
                    {customer.companyName}
                  </h1>
                  <p className="font-semibold">Id : {data.id}</p>
                  <p className="font-semibold">
                    Contact No : {data.contactNumber}
                  </p>
                  <p className="font-semibold">GST No : {data.gstNumber}</p>
                  <p className="font-semibold">
                    {data.firstLineAddress}, {data.secondLineAddress},{" "}
                    {data.city}, {data.taluka}, {data.district}, {data.state},{" "}
                    {data.countryPinCode}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0">
                  <div className="text-right md:text-left mr-0 md:mr-4">
                    <p
                      className={`font-semibold text-xl ${
                        data.status === "Active"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {data.status}
                    </p>
                    <p className="font-semibold font-serif">
                      <span className="italic font-serif">Type</span> :{" "}
                      {data.typeOfCompany}
                    </p>

                    <div className="flex flex-row justify-center md:flex-row  md:justify-center items-center gap-3 mt-4 md:mt-6">
                      <button className="items-center border border-black py-2 w-24 bg-white rounded-lg hover:border-grey-600">
                        <span className="font-serif">Update</span>
                      </button>
                      <button className="items-center border border-black py-2 w-24 bg-white rounded-lg hover:border-grey-600">
                        <span className="font-serif">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <hr className="border-black w-full" />
              </div>
            </div>
          </div>

          {/* All Customer Data */}
          <div className="p-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* primary contact */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Primary Contact</h3>
                <p>
                  <ul>
                    <li>
                      {data.primaryContactFirstName}{" "}
                      {data.primaryContactLastName}
                    </li>
                    <li>{data.primaryContactNumber}</li>
                    <li>{data.primaryContactEmail}</li>
                  </ul>
                </p>
              </div>
              {/* secondary contact */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Secondary Contact</h3>
                <p>
                  <ul>
                    <li>
                      {data.secondaryContactFirstName}{" "}
                      {data.secondaryContactLastName}
                    </li>
                    <li>{data.secondaryContactNumber}</li>
                    <li>{data.secondaryContactEmail}</li>
                  </ul>
                </p>
              </div>
              {/* Type of License */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Type of License (Per car)</h3>
                <p>{data.licenseType}</p>
              </div>
              {/* Rate */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Rate</h3>
                <p>{data.rate}</p>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Payment Method</h3>
                <p>{data.paymentMethod}</p>
              </div>

              {/* Referral Customer */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Referral Customer</h3>
                <p>{data.referralCustomer}</p>
              </div>

              {/* Referred By */}
              {data.referralCustomer === "Yes" && (
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Referred By</h3>
                  <p>{data.referredBy}</p>
                </div>
              )}

              {/* Customer Acquisition Method */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Customer Acquisition Method</h3>
                <p>{data.customerAcquisitionMethod}</p>
              </div>

              {/* Trial Period */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Trial Period</h3>
                <p>{data.trialPeriod}</p>
              </div>

              {/* Trial Duration */}
              {data.trialPeriod === "Yes" && (
                <div className="bg-white p-4 shadow rounded">
                  <h3 className="font-bold">Trial Duration</h3>
                  <p>{data.trialDuration}</p>
                </div>
              )}

              {/* Sales Person Name */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Sales Person Name</h3>
                <p>{data.salesPersonName}</p>
              </div>

              {/* Sales Person ID */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Sales Person ID</h3>
                <p>{data.salesPersonId}</p>
              </div>

              {/* Total Number of Cars Permitted per Day */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">
                  Total Number of Cars Permitted per Day
                </h3>
                <p>{data.carsPermittedPerDay}</p>
              </div>

              {/* Package Type */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Package Type</h3>
                <p>{data.packageType}</p>
              </div>

              {/* Total Number of Drivers Allowed */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Total Number of Drivers Allowed</h3>
                <p>{data.driversAllowed}</p>
              </div>

              {/* Number of Cars Allowed per Branch */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Number of Cars Allowed per Branch</h3>
                <p>{data.carsAllowedPerBranch}</p>
              </div>

              {/* Number of Drivers Allowed per Branch */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">
                  Number of Drivers Allowed per Branch
                </h3>
                <p>{data.driversAllowedPerBranch}</p>
              </div>

              {/* Number of Branches Allowed */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Number of Branches Allowed</h3>
                <p>{data.branchesAllowed}</p>
              </div>

              {/* Primary Contact and Company Manager Same */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">
                  Primary Contact and Company Manager Same?
                </h3>
                <p>
                  {data.primaryContactAndCompanyManagerSame === "Y"
                    ? "Yes"
                    : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
