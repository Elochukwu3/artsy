import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function ShoppingDetails({ products }) {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          lastname: "",
          firstname: "",
          city: "",
          country: "",
          number: "",
          postal: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.firstname) errors.firstname = "Required";
          if (!values.lastname) errors.lastname = "Required";

          if (!values.city) errors.city = "Required";

          if (!values.country) errors.country = "Required";
          if (!values.postal) errors.postal = "Required";

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full text-[18px] space-y-5">
            <label>Your Email</label> <br />
            <Field
              type={"email"}
              id="email"
              name="email"
              className="w-full px-4 h-12 outline-none rounded-[8px]"
            />
            <ErrorMessage name="email" component={"div"} />
            <label>First Name</label> <br />
            <Field
              type={"text"}
              id="firstname"
              name="firstname"
              className="w-full px-4 h-12 outline-none rounded-[8px]"
            />
            <ErrorMessage name="firstname" component={"div"} />
            <label>Last Name</label> <br />
            <Field
              type={"text"}
              id="lastname"
              name="lastname"
              className="w-full px-4 h-12 outline-none rounded-[8px]"
            />
            <ErrorMessage name="lastname" component={"div"} />
            <label>City</label> <br />
            <Field
              type="text"
              id="city"
              name="city"
              className="w-full px-4 h-12 outline-none rounded-[8px] block"
            />
            <ErrorMessage name="city" component={"div"} />
            <div className="w-full grid grid-cols-2 gap-10">
              <div className="w-full">
                <label>Country</label> <br />
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-4 h-12 outline-none rounded-[8px]"
                />
                <ErrorMessage name="country" component={"div"} />
              </div>
              <div className="w-full">
                <label>Postal</label> <br />
                <Field
                  type="text"
                  id="postal"
                  name="postal"
                  className="w-full px-4 h-12 outline-none rounded-[8px]"
                />
                <ErrorMessage name="postal" component={"div"} />
              </div>
            </div>
            <label>Phone Number</label> <br />
            <Field
              type="text"
              id="number"
              name="number"
              className="w-full px-4 h-12 outline-none rounded-[8px]"
            />
            <ErrorMessage name="number" component={"div"} />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white text-[1.3em] font-medium py-3 bg-[#3341C1] hover:bg-[#051076] scale-95 hover:scale-100 transition-transform duration-[.5s]"
            >
              Proceed to Payment
            </button>
          </Form>
        )}
      </Formik>
      <p
        onClick={() => {
          axios
            .post("api/checkout_sessions", { products })
            .then((res) => {
              console.log(res);
              window.location = res.data.sessionURL;
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Burronn
      </p>
    </div>
  );
}

export default ShoppingDetails;
