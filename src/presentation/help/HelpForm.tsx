import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Assistance, schema } from "@/domain/models/assistance";
import { AssistanceRepositoryImpl } from "@/domain/repositories/assistance/assistanceRepositoryImpl";

const repo = new AssistanceRepositoryImpl();

type HelpFormProps = {
  title: string;
  url: string;
};

function HelpForm({ title, url }: HelpFormProps) {
  const [globalError, setGlobalError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Assistance>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "Ahmed",
      lastName: "Khan",
      phoneNumber: "555555555",
      houseNumber: "789",
      streetName: "Boulevard Saint-Laurent",
      city: "Vancouver",
      postalCode: "V6Z 1K7",
      gender: "male",
      helpType: "food",
      details:
        "Willing to provide groceries to those in need. Please contact for assistance.",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: Assistance) => {
    // Handle form submission
    try {
      const res = url.includes("offer")
        ? await repo.createAssistanceOffer(data)
        : await repo.createAssistanceRequest(data);
      if (res.status === 200) {
        navigate("../success");
      } else {
        setGlobalError("sothing went wrong please try again");
      }
    } catch (error) {
      setGlobalError("sothing went wrong please try again");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-black p-4 rounded-xl shadow-xl max-w-fit mt-6 px-6 grid grid-cols-2 gap-1"
    >
      <span className="text-2xl font-bold mb-4 basis-full text-center col-span-full">
        {`${title} Help`}
      </span>
      <div className="flex flex-col justify-between">
        <label htmlFor="firstName" className="my-2 font-bold">
          First Name:
        </label>
        <input
          id="firstName"
          {...register("firstName")}
          autoFocus
          className="border border-black outline-1 outline-gray-200"
        />
      </div>
      <div className="flex flex-col justify-between basis-2/5">
        <label htmlFor="lastName" className="my-2 font-bold">
          Last Name:
        </label>
        <input
          {...register("lastName")}
          className="border border-black outline-1 outline-gray-200"
        />
      </div>
      {errors.firstName && (
        <p className="text-xs text-red-500 ">{errors.firstName.message}</p>
      )}
      {errors.lastName && (
        <p className="text-xs text-red-500">{errors.lastName.message}</p>
      )}

      <div className="flex flex-col justify-between col-span-full">
        <label htmlFor="phoneNumber" className="my-2 font-bold basis-2/3">
          Phone Number:
        </label>
        <input
          {...register("phoneNumber")}
          className="border border-black outline-1 outline-gray-200 basis-full"
        />
      </div>
      {errors.phoneNumber && (
        <p className="text-xs text-red-500 col-span-full">
          {errors.phoneNumber.message}
        </p>
      )}
      <div className="flex flex-col justify-between">
        <label htmlFor="houseNumber" className="my-2 font-bold">
          House Number:
        </label>
        <input
          {...register("houseNumber")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <label htmlFor="streetName" className="my-2 font-bold">
          Street:
        </label>
        <input
          {...register("streetName")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
      </div>
      {errors.houseNumber && (
        <p className="text-xs text-red-500">{errors.houseNumber.message}</p>
      )}
      {errors.streetName && (
        <p className="text-xs text-red-500">{errors.streetName.message}</p>
      )}

      <div className="flex flex-col justify-between">
        <label htmlFor="city" className="my-2 font-bold">
          City:
        </label>
        <input
          {...register("city")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="postalCode" className="my-2 font-bold">
          Postal code:
        </label>
        <input
          {...register("postalCode")}
          className="border resize-none border-black outline-1 outline-gray-200 w-full"
        />
      </div>

      {errors.city && (
        <p className="text-xs text-red-500 ">{errors.city.message}</p>
      )}
      {errors.postalCode && (
        <p className="text-xs text-red-500">{errors.postalCode.message}</p>
      )}

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
      </div>
      {errors.gender && (
        <p className="text-xs text-red-500 text-center col-span-full">
          {errors.gender.message}
        </p>
      )}

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
      </div>
      {errors.helpType && (
        <p className="text-xs text-red-500 col-span-full text-center">
          {errors.helpType.message}
        </p>
      )}
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
      {globalError && (
        <p className="text-red-500  text-center col-span-full">
          Somthing went wrong please try again
        </p>
      )}

      <button
        type="submit"
        className="col-span-full mx-auto my-3 mb-0 mt-4 rounded-lg border border-solid border-black bg-gray-700 px-8 py-1 font-bold text-white hover:bg-white hover:text-gray-700"
      >
        Submit
      </button>
    </form>
  );
}

export default HelpForm;
