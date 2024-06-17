import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import customerInformation from "../utils/sampleCustomerInformation";
import validationSchema from "../utils/validations";

const CustomerInformationFormPage2 = () => {
  const [isClickedd, setIsClicked] = useState(false);
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex justify-center bg-custom-blue">
      <div className="relative bg-white w-11/12 rounded-lg shadow-lg p-6 flex flex-col max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 mt-5 text-center">
          Contact Details
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
              <label className="block text-gray-1000">Contact Number</label>
              <Field
                type="text"
                name="contactNumber"
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Enter contact number"
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-1000">GST Number</label>
              <Field
                type="text"
                name="gstNumber"
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Enter GST number"
              />
              <ErrorMessage
                name="gstNumber"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-1000">
                Type of License (Per car), discount type
              </label>
              <Field
                type="text"
                name="licenseType"
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Enter license type"
              />
              <ErrorMessage
                name="licenseType"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-1000">Rate</label>
              <Field
                type="number"
                name="rate"
                className="w-1/2 px-3 py-2 border rounded-md"
                placeholder="Enter rate"
              />
              <ErrorMessage
                name="rate"
                component="div"
                className="text-red-500"
              />
            </div>

            <div
              className=" w-1/2 p-2"
              onClick={() =>
                isClickedd ? setIsClicked(false) : setIsClicked(true)
              }
            >
              Primary-Secondary Contact Information ?
            </div>

            <div className="grid grid-flow-col grid-cols-2 gap-4">
              <div className="">
                {isClickedd && (
                  <div>
                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Primary Contact First Name
                      </label>
                      <Field
                        type="text"
                        name="primaryContactFirstName"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter first name"
                      />
                      <ErrorMessage
                        name="primaryContactFirstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Primary Contact Last Name
                      </label>
                      <Field
                        type="text"
                        name="primaryContactLastName"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter last name"
                      />
                      <ErrorMessage
                        name="primaryContactLastName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Primary Contact Number
                      </label>
                      <Field
                        type="text"
                        name="primaryContactNumber"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter contact number"
                      />
                      <ErrorMessage
                        name="primaryContactNumber"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Primary Contact Email ID
                      </label>
                      <Field
                        type="email"
                        name="primaryContactEmail"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter email ID"
                      />
                      <ErrorMessage
                        name="primaryContactEmail"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                {isClickedd && (
                  <div>
                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Secondary Contact First Name
                      </label>
                      <Field
                        type="text"
                        name="secondaryContactFirstName"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter first name"
                      />
                      <ErrorMessage
                        name="secondaryContactFirstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Secondary Contact Last Name
                      </label>
                      <Field
                        type="text"
                        name="secondaryContactLastName"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter last name"
                      />
                      <ErrorMessage
                        name="secondaryContactLastName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Secondary Contact Number
                      </label>
                      <Field
                        type="text"
                        name="secondaryContactNumber"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter contact number"
                      />
                      <ErrorMessage
                        name="secondaryContactNumber"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="space-y-2 px-4">
                      <label className="block text-gray-1000">
                        Secondary Contact Email ID
                      </label>
                      <Field
                        type="email"
                        name="secondaryContactEmail"
                        className="w-3/5 px-3 py-2 border rounded-md"
                        placeholder="Enter email ID"
                      />
                      <ErrorMessage
                        name="secondaryContactEmail"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-gray-1000">Payment Method</label>
              <Field
                as="select"
                name="paymentMethod"
                className="w-3/5 px-3 py-2 border rounded-md"
              >
                <option
                  value=""
                  className="text-gray-500 overflow-visible"
                  disabled
                >
                  Select Payment Method
                </option>
                {["Cheque", "Cash", "NEFT", "RTGS"].map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="paymentMethod"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="Submit"
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

export default CustomerInformationFormPage2;
