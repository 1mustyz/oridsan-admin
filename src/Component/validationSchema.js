import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password required")
  })
  
export  const seminarSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
    amount: Yup.number().required("Amount is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    location: Yup.string().required("Location is required")

  })  

  export  const membershipSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    membership: Yup.string().required("Membership is required"),
    price: Yup.number().required("Price is required"),
  })  
  
  export  const sliderSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
  })