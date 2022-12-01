import React from "react";

const HomeForm = () => {
  return (
    <form className="form-control justify-center items-center w-full max-w-x">
      <input
        type="email"
        placeholder="E-mail Address"
        className="input input-bordered my-2 w-full max-w-xs"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        className="input input-bordered my-2 w-full max-w-xs"
      />
      <textarea
        className="textarea textarea-bordered my-2 w-full max-w-xs"
        placeholder="Your message"
      ></textarea>

      <button className="btn btn-primary text-white hover:bg-secondary">Submit</button>
    </form>
  );
};

export default HomeForm;
