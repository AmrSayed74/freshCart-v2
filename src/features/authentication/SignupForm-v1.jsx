import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";

import useSignup from "./useSignup";
import Spinner from "../../ui/Spinner";

const SignupForm = () => {
  const { handleSubmit, register, formState, getValues } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit(data) {
    signup(data);
  }

  return (
    <div className="mt-20 p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <h1 className="text-3xl  font-bold my-10 ">Register</h1>
      </div>
      <form className="max-w-3xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("name", {
              required: "This filed is required!",
            })}
            type="text"
            name="name"
            id="name"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            disabled={isLoading}
          />
          {errors && (
            <div className="text-red-600  text-2xl">
              {errors?.name?.message}
            </div>
          )}
          <label
            htmlFor="name"
            className=" transition peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
          >
            Name:
          </label>
        </div>

        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("email", {
              required: "This filed is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            type="email"
            name="email"
            id="email"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            disabled={isLoading}
          />
          {errors && (
            <div className="text-red-600  text-2xl">
              {errors?.email?.message}
            </div>
          )}
          <label
            htmlFor="email"
            className=" transition peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
          >
            Email:
          </label>
        </div>

        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("password", {
              required: "This filed is required",
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters",
              },
            })}
            type="password"
            name="password"
            id="password"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            disabled={isLoading}
          />
          {errors && (
            <div className="text-red-600  text-2xl">
              {errors?.password?.message}
            </div>
          )}
          <label
            htmlFor="password"
            className=" transition peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
          >
            Password:
          </label>
        </div>

        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("rePassword", {
              required: "This filed is required",
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters",
              },
              validate: (value) =>
                value === getValues().password ||
                "Please make sure your passwords match",
            })}
            type="password"
            name="rePassword"
            id="rePassword"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            disabled={isLoading}
          />
          {errors && (
            <div className="text-red-600  text-2xl">
              {errors?.rePassword?.message}
            </div>
          )}
          <label
            htmlFor="rePassword"
            className=" transition peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
          >
            rePassword:
          </label>
        </div>

        <div className="relative z-0 w-full mb-12 group">
          <input
            {...register("phone", {
              required: "This filed is required ",
              pattern: {
                value: /^(\+?2(0|1)[0-9]{10}|01[0-9]{9})$/,

                message: "Please enter a valid Egyptian phone number",
              },
            })}
            type="tel"
            name="phone"
            id="phone"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            disabled={isLoading}
          />
          {errors && (
            <div className="text-red-600  text-2xl">
              {errors?.phone?.message}
            </div>
          )}
          <label
            htmlFor="phone"
            className=" transition peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
          >
            Phone:
          </label>
        </div>

        <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between  flex-wrap">
          <Button
            disabled={isLoading}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
          <span>
            Already have an account?{" "}
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/login"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
