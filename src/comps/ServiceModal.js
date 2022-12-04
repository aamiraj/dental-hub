import React from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";

const ServiceModal = ({ dentalService, selectedDate }) => {
  const { name, slots } = dentalService;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <input
              {...register("date")}
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full my-2"
              readOnly
            />
            <select
              {...register("slot", { required: true })}
              className="select select-bordered w-full my-2"
            >
              <option disabled defaultValue>
                Choose your time
              </option>
              {slots?.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full my-2"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && <p className="text-error">*Name is required</p>}
            <input
              {...register("email")}
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full my-2"
            />
            <input
              {...register("phone", { required: true })}
              type="phone"
              placeholder="Your phone number"
              className="input input-bordered w-full my-2"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone?.type === "required" && <p className="text-error">*Phone number is required</p>}
            <button type="submit" className="btn btn-primary text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
