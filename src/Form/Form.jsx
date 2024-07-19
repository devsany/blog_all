// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mqazarlg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="container sm:flex sm:justify-center   md:flex md:justify-around"
    >
      <div className="p-2 ">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          type="email"
          className="border border-black"
          placeholder="Enter your Email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="p-2 ">
        <textarea
          id="message"
          className="border border-black"
          name="message"
          placeholder="Enter your Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div>
        <button
          className="btn btn-primary ml-2"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
