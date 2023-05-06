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
    documentTypes: Yup.array().required("You have to select a document")
  })  
  
  export  const sliderSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    title: Yup.string().required("Title is required"),
  })

  export  const presidentSchema = Yup.object().shape({
    message: Yup.string().required("Message is required"),
    name: Yup.string().required("Name is required"),
    from: Yup.string().required("From date is required"),
    to: Yup.string().required("To date is required"),

  })

  export  const chapterSchema = Yup.object().shape({
    chapterName: Yup.string().required("Chapter Name is required"),
    address: Yup.string().required("Address is required"),
    contact: Yup.string().required("Contact is required"),

  })

  export  const staffSchema = Yup.object().shape({
    firstName: Yup.string().min(3).required("First Name is required"),
    lastName: Yup.string().min(3).required("Last Name is required"),
    title: Yup.string().min(2).required("Title is required"),
    email: Yup.string().email().required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string().min(6).required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),


  })