import { useFormik } from "formik";
import {Checkoutshcema} from "../Schemass"
const initialValues = {
    checkout_email:"",
    checkout_phone:"",
    checkout_name:"",
    checkout_city:"",
    country_name:"",
    Pin_code:"",
    Full_adress:""
}
const Checkoutform = () => {
const {values,errors,handleBlur, touched,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:Checkoutshcema,
    onSubmit:(values,action)=>{
    action.resetForm();    
    }
        
})

    return (
    <>
      <form onSubmit={handleSubmit} >
        <h6>Contact information</h6>
        <div className="inputfilteds">
          <div className="form-control">
            <label for="checkout-email">E-mail</label>
            <div>
              <span className="fa fa-envelope"></span>
              <input autoComplete="off"
                type="email"
                name="checkout_email"
                placeholder="Enter your email..."
                value={values.checkout_email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.checkout_email && touched.checkout_email ? <p>{errors.checkout_email}</p>:null}
            </div>
          </div>
          <div className="form-control">
            <label for="checkout-phone">Phone</label>
            <div>
              <span className="fa fa-phone"></span>
              <input autoComplete="off"
                type="tel"
                name="checkout_phone"
                placeholder="Enter you phone..."
                value={values.checkout_phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                            {errors.checkout_phone && touched.checkout_phone ? <p>{errors.checkout_phone}</p>:null}
            </div>
          </div>

          <div className="form-control">
            <label for="checkout-name">Full name</label>
            <div>
              <span className="fa fa-user-circle"></span>
              <input autoComplete="off"
                type="text"
                name="checkout_name"
                placeholder="Enter you name..."
                value={values.checkout_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                            {errors.checkout_name && touched.checkout_name ? <p>{errors.checkout_name}</p>:null}
            </div>
          </div>

          <div className="form-control">
            <label for="checkout-city">City</label>
            <div>
              <span className="fa fa-building"></span>
              <input autoComplete="off"
                type="text"
                name="checkout_city"
                placeholder="Your city..."
                value={values.checkout_city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.checkout_city && touched.checkout_city ? <p> {errors.checkout_city}</p>:null}
            </div>
          </div>

          <div className="form-control">
            <label for="checkout-country">Country</label>
            <div>
              <span className="fa fa-globe"></span>
              <input autoComplete="off"
                type="text"
                name="country_name"
                placeholder="Your country..."
                list="country_name"
                value={values.country_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                            {errors.country_name && touched.country_name ? <p>{errors.country_name}</p>:null}
           
            </div>
          </div>
          <div className="form-control">
            <label for="checkout-postal">Pin code</label>
            <div>
              <span className="fa fa-archive"></span>
              <input autoComplete="off"
                type="numeric"
                name="Pin_code"
                placeholder="Your postal code..."
                value={values.Pin_code}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                            {errors.Pin_code && touched.Pin_code ? <p>{errors.Pin_code}</p>:null}
              
            </div>
          </div>

          <div className="form-control textariafiled">
            <label htmlFor="">Enter Full Adress</label>
            <textarea
              name="Full_adress"
            placeholder="Enter full Adress"
            value={values.Full_adress}
            onChange={handleChange}
            onBlur={handleBlur}
                ></textarea>
                            {errors.Full_adress && touched.Full_adress ? <p>{errors.Full_adress}</p>:null}

          </div>
        </div>

        <div className="form-control-btn">
          <button type="submit">Continue</button>
        </div>
      </form>
    </>
  );
};

export default Checkoutform;
