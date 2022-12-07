import * as Yup from "yup"

export const Checkoutshcema = Yup.object({
   
    checkout_email:Yup.string().email().required("Please enter your email"),
    checkout_phone:Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(10).required("Please enter phone number"),
    checkout_name:Yup.string().min(2).max(25).required("Please eneter your name"),
    checkout_city:Yup.string().min(5).required("Please enter you city"),
    country_name:Yup.string().min("5").required("Please enter your country name"),
    Pin_code:Yup.number().min(6).max(6).required("Please enter pin code"),
    Full_adress:Yup.string().min(30).required("Please enter full adress")
})