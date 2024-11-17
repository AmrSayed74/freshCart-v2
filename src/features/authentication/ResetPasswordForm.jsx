import { useForm } from "react-hook-form";
import Logo from "../../ui/Logo";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";
// import useResetPassword from "./useResetPassword";
import Spinner from "../../ui/Spinner";

import usePutData from "../../reusable/usePutData";

const ResetPasswordForm = () => {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  // const { resetPassword, isPending } = useResetPassword();
  const { mutate: resetPassword, isPending } = usePutData(
    "",
    "resetPassword",
    "PUT",
    "Error resetting password",
    true,
    false,
    "Password successfully reset",
    null
    // "resetPassword"
  );
  function onSubmit(data) {
    console.log(data);
    resetPassword(data);
  }

  return (
    <div className="mt-48 p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <h1 className="text-3xl  font-bold my-10 ">Reset your password</h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
        <FormRow
          label="Email:"
          errors={errors?.email?.message}
          className="relative z-0 w-full mb-12 group"
        >
          <Input
            isPending={isPending}
            register={register}
            validationRules={{
              required: "This filed is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            }}
            type="email"
            name="email"
            id="email"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="email"
          />
        </FormRow>
        <FormRow
          label="New password:"
          errors={errors?.newPassword?.message}
          className="relative z-0 w-full mb-12 group"
        >
          <Input
            isPending={isPending}
            register={register}
            validationRules={{
              required: "This filed is required",
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters",
              },
            }}
            type="password"
            name="newPassword"
            id="newPassword"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="newPassword"
          />
        </FormRow>
        <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between flex-wrap">
          <Button
            isPending={isPending}
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isPending ? <Spinner /> : "Reset password"}
          </Button>
          <div>
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/login"
            >
              Login
            </Link>
            <span className="mx-4">OR</span>
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/signup"
            >
              Register
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
