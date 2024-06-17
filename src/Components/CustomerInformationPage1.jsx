import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import customerInformation from "../utils/sampleCustomerInformation";
import validationSchema from "../utils/validations";

const CustomerInformationFormPage1 = () => {
  return (
    <div className=" min-h-screen flex justify-center bg-custom-blue">
      <div className="relative bg-white w-11/12 rounded-lg shadow-lg p-6 flex flex-col max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 mt-5 text-center">
          Customer Information
        </h2>
        <Formik
          initialValues={customerInformation}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-1000">Company Name</label>
              <Field
                type="text"
                name="companyName"
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Enter name of the company"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-1000">Company Type</label>
              <Field
                as="select"
                name="companyType"
                className="w-1/2 px-3 py-2 border rounded-md"
              >
                <option value="" className="text-gray-500" disabled>
                  Select the Company Type
                </option>
                {[
                  "Hotel",
                  "Restaurant",
                  "Bar",
                  "Pub",
                  "Hospital",
                  "Railway Station",
                  "Bus Station",
                  "Airport",
                  "Mall",
                  "Valet Agency",
                ].map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="companyType"
                component="div"
                className="text-red-500"
              />
            </div>
            <hr className="border-t border-gray-400 my-4" />

            <div className="flex space-x-3">
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">Address Line 1</label>
                  <Field
                    type="text"
                    name="addressLine1"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter address line 1"
                  />
                  <ErrorMessage
                    name="addressLine1"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">Address Line 2</label>
                  <Field
                    type="text"
                    name="addressLine2"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter address line 2"
                  />
                  <ErrorMessage
                    name="addressLine2"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">City</label>
                  <Field
                    type="text"
                    name="city"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter city"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">Tehshil</label>
                  <Field
                    type="text"
                    name="taluka"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter tehshil"
                  />
                  <ErrorMessage
                    name="taluka"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">District</label>
                  <Field
                    type="text"
                    name="district"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter district"
                  />
                  <ErrorMessage
                    name="district"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">State</label>
                  <Field
                    type="text"
                    name="state"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter state"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">Country</label>
                  <Field
                    type="text"
                    name="country"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter country"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex-auto">
                <div className="space-y-2">
                  <label className="block text-gray-1000">Pincode</label>
                  <Field
                    type="text"
                    name="pinCode"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter pincode"
                  />
                  <ErrorMessage
                    name="pinCode"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-black bg-white-700 hover:bg-gray-200 rounded-lg text-sm px-10 py-2.5 me-6 border"
              >
                BACK
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-10 py-2.5"
              >
                NEXT
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CustomerInformationFormPage1;
