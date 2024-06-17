import * as Yup from "yup";

const validationSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  companyType: Yup.string().required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  taluka: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  pinCode: Yup.string().required("Required"),
  contactNumber: Yup.string().required("Required"),
  gstNumber: Yup.string().required("Required"),
  licenseType: Yup.string().required("Required"),
  discountType: Yup.string().required("Required"),
  rate: Yup.number().required("Required"),
  primaryContactFirstName: Yup.string().required("Required"),
  primaryContactLastName: Yup.string().required("Required"),
  primaryContactNumber: Yup.string().required("Required"),
  primaryContactEmail: Yup.string().email("Invalid email").required("Required"),
  secondaryContactFirstName: Yup.string().required("Required"),
  secondaryContactLastName: Yup.string().required("Required"),
  secondaryContactNumber: Yup.string().required("Required"),
  secondaryContactEmail: Yup.string()
    .email("Invalid email")
    .required("Required"),
  paymentMethod: Yup.string().required("Required"),
});

export default validationSchema;
