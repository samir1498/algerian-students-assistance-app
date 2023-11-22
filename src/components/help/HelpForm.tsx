import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "A valid firstname is required" })
      .max(50),
    lastName: z
      .string()
      .min(2, { message: "A valid lastname is required" })
      .max(50),
    phoneNumber: z
      .string()
      .min(8, { message: "A valid phonenumber is required" })
      .max(15),
    houseNumber: z
      .string()
      .min(1, { message: "A valid house number is required" })
      .max(10),
    streetName: z
      .string()
      .min(1, { message: "A valid street is required" })
      .max(100),
    city: z.string().min(1, { message: "A valid city is required" }).max(50),
    postalCode: z
      .string()
      .min(1, { message: "A valid postal code is required" }),

    gender: z.string().min(1),
    helpType: z.string().min(1),
    details: z.string(),
  })
  .required();

export type HelpRequestOffer = z.infer<typeof schema>;

type HelpFormProps = {
  title: string;
};

const HelpForm: React.FC<HelpFormProps> = ({ title }: HelpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelpRequestOffer>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<HelpRequestOffer> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-black p-4 rounded-xl shadow-xl max-w-fit mt-6 px-6 grid grid-cols-2 gap-1"
    >
      <span className="text-2xl font-bold mb-4 basis-full text-center col-span-full">
        {title}
      </span>
      <div className="flex flex-col justify-between">
        <label htmlFor="firstName" className="my-2 font-bold">
          First Name:
        </label>
        <input
          {...register("firstName")}
          autoFocus
          className="border border-black outline-1 outline-gray-200"
        />
        {errors.firstName && (
          <p className="text-xs text-red-500 w-4/5">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col justify-between basis-2/5">
        <label htmlFor="lastName" className="my-2 font-bold">
          Last Name:
        </label>
        <input
          {...register("lastName")}
          className="border border-black outline-1 outline-gray-200"
        />
        {errors.lastName && (
          <p className="text-xs text-red-500 w-4/5">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col justify-between col-span-full">
        <label htmlFor="phoneNumber" className="my-2 font-bold basis-2/3">
          Phone Number:
        </label>
        <input
          {...register("phoneNumber")}
          className="border border-black outline-1 outline-gray-200 basis-full"
        />
        {errors.phoneNumber && (
          <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="houseNumber" className="my-2 font-bold">
          House Number:
        </label>
        <input
          {...register("houseNumber")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
        {errors.houseNumber && (
          <p className="text-xs text-red-500">{errors.houseNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="state" className="my-2 font-bold">
          Street:
        </label>
        <input
          {...register("streetName")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
        {errors.streetName && (
          <p className="text-xs text-red-500">{errors.streetName.message}</p>
        )}
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="city" className="my-2 font-bold">
          City:
        </label>
        <input
          {...register("city")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="state" className="my-2 font-bold">
          Postal code:
        </label>
        <input
          {...register("postalCode")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
        {errors.postalCode && (
          <p className="text-xs text-red-500">{errors.postalCode.message}</p>
        )}
      </div>

      <div className="flex justify-between col-span-full">
        <label htmlFor="gender" className="my-2 font-bold basis-3/6">
          Gender:
        </label>
        <select
          {...register("gender")}
          className="my-1 rounded border border-solid border-black px-4 py-1 text-center basis-2/3"
        >
          <option value="">Select an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && (
          <p className="text-xs text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex justify-between col-span-full">
        <label htmlFor="helpType" className="my-2 font-bold basis-3/6">
          Type of Assistance:
        </label>
        <select
          {...register("helpType")}
          className="my-1 rounded border border-solid border-black px-4 py-1 text-center basis-2/3"
        >
          <option value="">Select an option</option>
          <option value="rentHouse">Rent a House</option>
          <option value="findRoommate">Find a Roommate</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="money">Money</option>
        </select>
        {errors.helpType && (
          <p className="text-xs text-red-500">{errors.helpType.message}</p>
        )}
      </div>
      <div className="flex flex-col justify-center items-start col-span-full">
        <label htmlFor="details" className="my-2 font-bold">
          Additional Details:
        </label>
        <textarea
          {...register("details")}
          rows={3}
          className="border resize-none border-black outline-1 outline-gray-200 w-full mt-2"
        />
        {errors.details && (
          <p className="text-xs text-red-500">{errors.details.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="col-span-full mx-auto my-3 mb-0 mt-4 rounded-lg border border-solid border-black bg-gray-700 px-8 py-1 font-bold text-white hover:bg-white hover:text-gray-700"
      >
        Submit
      </button>
    </form>
  );
};

export default HelpForm;
